import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addAMeal } from '../apis/mealApi.tsx'

export default function AddAMeal() {
  
  const initialFormData = {
    title: '',
    description: '',
    recipeUrl: '',
    submittedBy: '',
  }

  const [form, setForm] = useState(initialFormData)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const addMutation = useMutation(addAMeal, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['meals'])
    }
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm({...form, [name]: value})
  }

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newMeal = {...form}     
    addMutation.mutate(newMeal)
    navigate('/')
  }

  return (
    <>
    <h2>Add your meal idea</h2>
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
          <button onClick={handleAdd}>Save</button>
        </form>
    </>
  )


}