import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMeals } from '../hooks/useMeal'

export default function AddAMeal() {
  const initialFormData = {
    title: '',
    description: '',
    recipeUrl: '',
    submittedBy: '',
  }
  const meals = useMeals()

  const [form, setForm] = useState(initialFormData)
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newMeal = { ...form }
    meals.add.mutate(newMeal)
    navigate('/')
  }

  return (
    <>
      <div className="section">
        <h2>Add your meal idea</h2>
        <div className="form">
          <form onSubmit={handleAdd}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="recipeUrl">Recipe Url:</label>
            <input
              type="text"
              id="recipeUrl"
              name="recipeUrl"
              value={form.recipeUrl}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="submittedBy">Submitted by:</label>
            <input
              type="text"
              id="submittedBy"
              name="submittedBy"
              value={form.submittedBy}
              onChange={handleChange}
            />
            <br />
            <button>Save</button>
          </form>
        </div>
      </div>
    </>
  )
}
