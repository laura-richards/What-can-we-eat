import { useState } from 'react'
import { useMeals } from '../hooks/useMeal.ts'

export function Register() {
  const meals = useMeals()
  console.log(meals.data)
  const initialFormData = {
    name: '',
    userName: '',
  }

  const [form, setForm] = useState(initialFormData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('someone wanted to register for your app', form)
  }

  return (
    <>
      <h1>Register for an account</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="userName">Username:</label>
          <input
            name="userName"
            id="userName"
            type="text"
            value={form.userName}
            onChange={handleChange}
          />
          <h3>Select some meals to get you started:</h3>
          <label htmlFor="pancakes">Pancakes</label>
          <input name="pancakes" id="pancakes" type="checkbox" />
          <label htmlFor="nachos">Nachos</label>
          <input name="nachos" id="nachos" type="checkbox" />
          <label htmlFor="cereal">Cereal</label>
          <input name="cereal" id="cereal" type="checkbox" />
          <button>Register</button>
        </form>
      </div>
    </>
  )
}
