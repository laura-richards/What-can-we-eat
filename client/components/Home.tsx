import { useQuery } from '@tanstack/react-query'
import { getMealList } from '../apis/mealApi.tsx'
import { Link } from 'react-router-dom'

export default function Home() {
  const { data: meals, isError, isLoading } = useQuery(['meals'], getMealList)

  if (isError) return <p>error getting ideas</p>
  if (isLoading) return <p>Loading... </p>

  return (
    <section>
      <h2 className="page-title">Food Ideas:</h2>
      <ul>
        {meals?.map((meal) => (
          <li key={meal.title}>
            <Link to={`/${meal.title}`}>{meal.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}