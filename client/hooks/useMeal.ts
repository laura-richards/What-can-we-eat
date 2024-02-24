import {
  useQuery,
  useQueryClient,
  useMutation,
  MutationFunction,
} from '@tanstack/react-query'
import * as api from '../apis/mealApi.ts'

export function useMeals() {
  const query = useQuery(['meals'], api.getMealList)

  return {
    ...query,
    delete: useDeleteMeal(),
    add: useAddMeal(),
  }
}

export function useMeal(id: number) {
  const query = useQuery(['meal', id], () => api.getMealDetails(id))
  return { ...query, update: useUpdateMeal(id) }
}

function useMealsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meals'] })
    },
  })
  return mutation
}

function useMealMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  id: number
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meal', id] })
    },
  })
  return mutation
}

export function useUpdateMeal(id: number) {
  return useMealMutation(api.updateMeal, id)
}

export function useDeleteMeal() {
  return useMealsMutation(api.deleteMeal)
}

export function useAddMeal() {
  return useMealsMutation(api.addAMeal)
}
