import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateRoomRequest } from '../types/CreateRoomRequest';
import type { CreateRoomResponse } from '../types/CreateRoomResponse';

const useCreateRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: CreateRoomResponse = await response.json();

      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-rooms'],
      });
    },
  });
};

export default useCreateRoom;
