import connection from './connection.ts'
import {Meal, NewMeal } from '../../models/mealModels.ts'

const db = connection 

const camelColumns = [
  'id',
  'title',
  'description'
  'recipeUrl as recipeUrl',
  'submitted_by as submittedBy',
]

//get all meal ideas 
export async function getAllMealIdeas(): Promise<Meal[]> {
  return db('meal-ideas').select(...camelColumns)
}

//add a meal 
export async function addAMeal(newMeal: NewMeal): Promise<Meal> {
  const mealSnakeCase: MealSnakeCase = { title: newMeal.title, description: newMeal.description, recipe_url: newMeal.recipeUrl, submitted_by: newMeal.submittedBy}
  return db('meal-ideas').insert(mealSnakeCase).returning(camelColumns).first()
}

//update a meal 
export async function updateMeal(id: number, updatedMeal: Meal): Promise<Meal> {
  const mealSnakeCase: MealSnakeCase = { title: newMeal.title, description: newMeal.description, recipe_url: newMeal.recipeUrl, submitted_by: newMeal.submittedBy}
  return db('meal-ideas').where({ id }).update(mealSnakeCase).returning(camelColumns).first()
}

//delete a meal 
export async function deleteMeal(id: number) {
  return db('meal-ideas').where({ id }).delete()
}