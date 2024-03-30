import { useState } from 'react'
import { useMeals } from '../hooks/useMeal.ts'
import { useUsers } from '../hooks/useUser.ts'

//to do
//check for if username already is in database
//update back end for if not meal selected
export function Register() {
  const meals = useMeals()
  const users = useUsers()
  // write code to use meals to populate list of meals
  const mealNum = meals?.data?.length || 0
  const mealOptions = []
  for (let i = mealNum - 3; i < mealNum; i++) {
    mealOptions.push(meals?.data?.[i])
  }

  const initialFormData = {
    name: '',
    username: '',
    email: '',
    meal: null,
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
    users.add.mutate(form)
  }

  return (
    <>
      <div>
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
              required
            />
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              id="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div>
              {mealOptions.length === 3 ? (
                <div>
                  <h3>Select a meal to get you started:</h3>
                  <label htmlFor={mealOptions[0]?.title}>
                    {mealOptions[0]?.title}
                  </label>
                  <input
                    name="meal"
                    id={mealOptions[0]?.title}
                    type="radio"
                    value={mealOptions[0]?.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={mealOptions[1]?.title}>
                    {mealOptions[1]?.title}
                  </label>
                  <input
                    name="meal"
                    id={mealOptions[1]?.title}
                    type="radio"
                    value={mealOptions[1]?.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={mealOptions[2]?.title}>
                    {mealOptions[2]?.title}
                  </label>
                  <input
                    name="meal"
                    id={mealOptions[2]?.title}
                    type="radio"
                    value={mealOptions[2]?.id}
                    onChange={handleChange}
                  />
                </div>
              ) : null}
            </div>
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}
