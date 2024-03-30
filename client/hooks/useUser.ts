import {
  useQuery,
  useQueryClient,
  useMutation,
  MutationFunction,
} from '@tanstack/react-query'
import * as api from '../apis/userApi.ts'

export function useUsers() {
  const query = useQuery(['users'], api.getUsernames)
  return {
    ...query,
    add: useAddUser(),
  }
}

function useUsersMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
  return mutation
}

function useAddUser() {
  return useUsersMutation(api.addNewUser)
}
