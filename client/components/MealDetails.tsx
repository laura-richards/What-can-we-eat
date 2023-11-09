import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealDetails } from '../apis/mealApi'
import { useState } from 'react'
import { updateMeal, deleteMeal } from '../apis/mealApi.tsx'

function MealDetails() {
  const { id } = useParams()
  const numberId = Number(id)
  const {
    data: meal,
    isLoading,
    isError,
  } = useQuery(['meal', id], () => getMealDetails(numberId))
  
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const updateMutation = useMutation(updateMeal, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['meal', id])
    },
  })

  const deleteMutation = useMutation(deleteMeal, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['meals'])
    }
  })
   
  const initialFormData = {
    title: '',
    description: '',
    recipeUrl: '',
    submittedBy: '',
  }

  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(initialFormData)

  const handleEditingChange = () => {
    setForm({title: meal.title, description: meal.description, recipeUrl: meal.recipeUrl, submittedBy: meal.submittedBy })
    setEditing(!editing)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm({...form, [name]: value})
  }

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newMeal = {...form}     
    updateMutation.mutate({id, newMeal})
    setEditing(!editing)
  }

  const handleDelete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    deleteMutation.mutate(id)
    navigate('/')
  }

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
      {!editing ? (
        <div>
        <button onClick={handleEditingChange}>Edit idea</button>
        <button onClick={handleDelete}>Delete idea</button>
        </div>
      ) : (
        <form>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id='title'
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id= 'description'
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="recipeUrl">Recipe Url:</label>
          <input
            type="text"
            id= 'recipeUrl'
            name="recipeUrl"
            value={form.recipeUrl}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="submittedBy">Submitted by:</label>
            <input
            type="text"
            id= 'submittedBy'
            name="submittedBy"
            value={form.submittedBy}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleEditingChange}>Close</button>
        </form>
      )}
    </section>
  )
}

export default MealDetails
