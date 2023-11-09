import request from 'superagent'
import { Meal } from '../../models/mealModels'

const rootURL = '/api/v1/meals'

export async function getMealList(): Promise<Meal[]> {
  const res = await request.get(rootURL)
  if (res.status !== 200) {
    throw new Error('Failed to fetch meal ideas')
  }
  return res.body.meals
}

export async function getMealDetails(id: number) {
  const res = await request.get(`${rootURL}/${id}`)
  if (res.status !== 200) {
    throw new Error('failed to get meal idea')
  }
  return res.body.meal
}

export async function updateMeal({id, newMeal}) {
  const res = await request.put(`${rootURL}/${id}`).send(newMeal)
  if (res.status !== 200) {
    throw new Error('failed to update meal idea')
  }
  return res.body.updatedMeal
}

export async function deleteMeal(id: number) {
  const res = await request.delete(`${rootURL}/${id}`)
  if (res.status !== 200) {
    throw new Error('failed to delete meal idea')
  }
  return res.body
}

export async function addAMeal(newMeal: newMeal) {
  const res = await request.post(`${rootURL}`).send(newMeal) 
  return res.body.newMeal
}
