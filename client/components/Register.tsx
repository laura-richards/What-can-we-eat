import { useEffect, useState } from 'react'
import { useMeals } from '../hooks/useMeal.ts'
import { useUsers } from '../hooks/useUser.ts'
import { Usernames } from '../../models/userModels.ts'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

export function Register() {
  const { user } = useAuth0()
  const navigate = useNavigate()
  const meals = useMeals()
  const users = useUsers()

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
  const [usernameExists, setUsernameExists] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prevData) => ({
      ...prevData, 
      auth0Id: user.id,
      email: user.email,
      [name]: value,
    }))
  }

  useEffect(() => {
    const checkUsername = async () => {
      const usernames = await users.data.usernames
      const match = usernames.filter(
        (username: Usernames) => username.username === form.username
      )
      if (match.length > 0) {
        setUsernameExists(true)
      } else {
        setUsernameExists(false)
      }
    }

    checkUsername()
  }, [form.username, users.data])

  useEffect(() => {
    const checkForUser = async() => {
      const userEmails = await users.data.usernames
      const match = userEmails.filter((details) => details.email === user.email)
      if (match.length > 0) {
        navigate('/')
      }
    }
    checkForUser()
  }, [users.data, navigate, user])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    users.add.mutate(form)
    navigate('/')
  }

  return (
    <>
      <div className="section">
        <h1>Register</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                name="username"
                id="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                required
              />
              {usernameExists ? (
                <p className="warning">Username already exists</p>
              ) : null}
            </div>
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
            <button disabled={usernameExists}>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}
