import { useState } from 'react'
import { useMeals } from '../hooks/useMeal.ts'

export function Register() {
  const meals = useMeals()
  // write code to use meals to populate list of meals
  const mealNum = meals?.data?.length || 0
  const mealOptions = []
  for (let i = mealNum - 3; i < mealNum; i++) {
    mealOptions.push(meals?.data?.[i])
  }
  console.log(mealOptions)

  const initialFormData = {
    name: '',
    userName: '',
    meal: '',
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
                />{' '}
              </div>
            ) : null}
          </div>
          <button>Register</button>
        </form>
      </div>
    </>
  )
}
