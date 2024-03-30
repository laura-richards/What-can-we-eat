import express from 'express'
import * as db from '../db/db.ts'
import { NewUser } from '../../models/userModels.ts'

const router = express.Router()

//Get api/v1/user
router.get('/', async (req, res) => {
  try {
    const usernames = await db.getUsernames()
    res.status(200).json({ usernames })
  } catch (error) {
    console.error(error)
    res.status(500).send('Error getting Usernames')
  }
})

// Post /api/v1/user
router.post('/', async (req, res) => {
  const newUser: NewUser = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
  }
  if (!newUser) {
    console.error('No user')
    return res.status(400).send('Bad request')
  }

  try {
    const addedUser = await db.addUser(newUser)
    if (req.body.meal != null) {
      const newJoin = {
        user_id: addedUser.id,
        meal_id: req.body.meal,
      }
      await db.addJoin(newJoin)
    }
    res.status(200).json({ addedUser })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
