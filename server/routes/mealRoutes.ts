import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

//GET /api/v1/meals
router.get('/', async (req, res) => {
  try {
    const meals = await db.getAllMealIdeas()
    res.json({meals})
  } catch(error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

//GET /api/v1/meals/:id
router.get('/:id', async (req, res) => {
  
    const id = Number(req.params.id)

    if (!id) {
    console.error('No valid id')
    return res.status(400).send('Bad request')
    } 

  try {
    const meal = await db.getMealIdea(id)
    res.json({meal})
  } catch(error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// Post /api/v1/meals
router.post('/', async (req, res) => {
  const  newMeal  = req.body 
  console.log(`routes`, newmeal)
  
  if (!newMeal) {
    console.error('No meal')
    return res.status(400).send('Bad request')
  }

  try {
    const addedMeal = await db.addAMeal(newMeal)
    res.status(200).json({addedMeal})
  } catch(error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// put /api/v1/meals/:id
router.put('/:id', async (req, res) => {
  const  newMeal  = req.body 
  const id = Number(req.params.id)
  
  if (!newMeal || !id) {
    console.error('No meal or id')
    return res.status(400).send('Bad request')
  }

  try {
    const updatedMeal = await db.updateMeal(id, newMeal)
    res.status(200).json({ updatedMeal })
  } catch(error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

//delete /api/v1/meals/:id
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  
  if (!id) {
    console.error('Invalid meal id')
    return res.status(400).send('Bad request')
  }

  try {
    await db.deleteMeal(id)
    res.sendStatus(200)
  } catch(error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})



export default router