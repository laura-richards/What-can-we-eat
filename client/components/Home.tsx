import { useQuery } from '@tanstack/react-query'
import { getMealList } from '../apis/mealApi.ts'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const { data: meals, isError, isLoading } = useQuery(['meals'], getMealList)

  if (isError) return <p>error getting ideas</p>
  if (!meals || isLoading) return <p>Loading... </p>

  return (
    <section className="section">
      <h2>Food Ideas:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <Link to={`/${meal.id}`} state={{ meal: meal }}>
              {meal.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          navigate('/addMeal')
        }}
      >
        Add an idea
      </button>
    </section>
  )
}
