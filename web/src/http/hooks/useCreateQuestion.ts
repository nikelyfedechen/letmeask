import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateQuestionRequest } from '../types/CreateQuestionRequest';
import type { CreateQuestionResponse } from '../types/CreateQuestionResponse';

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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-questions', roomId],
      });
    },
  });
};

export default useCreateQuestion;
