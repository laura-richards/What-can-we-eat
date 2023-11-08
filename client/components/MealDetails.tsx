import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMealDetails } from '../apis/mealApi'

function MealDetails() {
  const { id } = useParams()
  const numberId = Number(id)
  const {
    data: meal,
    isLoading,
    isError,
  } = useQuery(['meal', id], () => getMealDetails(numberId))

  if (isError) return <p></p>
  if (isLoading || !meal) return <p>Loading...</p>

  return (
    <section className="section">
      <h2>{meal.title}</h2>
      <p>{meal.description}</p>
      <p>
        Find recipe here:
        <a href={meal.recipeUrl} target="_blank" rel="noreferrer">
          {meal.recipeUrl}
        </a>
      </p>
      <p>Submitted by: {meal.submittedBy}</p>
    </section>
  )
}

export default MealDetails
