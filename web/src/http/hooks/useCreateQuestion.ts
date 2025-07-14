import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateQuestionRequest } from '../types/CreateQuestionRequest';
import type { CreateQuestionResponse } from '../types/CreateQuestionResponse';
import type { GetRoomsQuestionsResponse } from '../types/GetRoomQuestionsResponse';

const useCreateQuestion = (roomId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    // Executa no momento que for feita a chamada para a API
    onMutate({ question }) {
      const questions = queryClient.getQueryData<GetRoomsQuestionsResponse>([
        'get-questions',
        roomId,
      ]);

      const questionsArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      };

      queryClient.setQueryData<GetRoomsQuestionsResponse>(
        ['get-questions', roomId],
        [newQuestion, ...questionsArray]
      );

      return { newQuestion, questions };
    },

    onSuccess(data, _variables, context) {
      queryClient.setQueryData<GetRoomsQuestionsResponse>(
        ['get-questions', roomId],
        (questions) => {
          if (!(questions && context.newQuestion)) {
            return questions;
          }
          return questions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              };
            }
            return question;
          });
        }
      );
    },

    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomsQuestionsResponse>(
          ['get-questions', roomId],
          context.questions
        );
      }
    },

    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ['get-questions', roomId],
    //   });
    // },
  });
};

export default useCreateQuestion;
