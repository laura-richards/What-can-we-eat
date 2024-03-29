import express from 'express'
import * as db from '../db/db.ts'
import { NewUser } from '../../models/userModels.ts'

const router = express.Router()

// Post /api/v1/user
//this needs to add user to database and then add selecttted meal as a join also

router.post('/', async (req, res) => {
  const newUser: NewUser = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
  }

  // console.log(req.body.meal)
  if (!newUser) {
    console.error('No user')
    return res.status(400).send('Bad request')
  }

  try {
    const addedUser = await db.addUser(newUser)
    const newJoin = {
      user_id: addedUser.id,
      meal_id: req.body.meal,
    }
    const newJoined = await db.addJoin(newJoin)
    console.log(newJoined)
    res.status(200).json({ addedUser })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
