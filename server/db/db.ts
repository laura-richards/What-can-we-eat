import connection from './connection.ts'
import { Meal, MealSnakeCase, NewMeal } from '../../models/mealModels.ts'

const camelColumns = [
  'id',
  'title',
  'description',
  'recipe_url as recipeUrl',
  'submitted_by as submittedBy',
]

//get all meal ideas
export async function getAllMealIdeas(db = connection): Promise<Meal[]> {
  return db('meal-ideas').select(...camelColumns)
}

//get individual meal
export async function getMealIdea(
  id: number,
  db = connection
): Promise<Meal[]> {
  return db('meal-ideas')
    .where({ id })
    .select(...camelColumns)
    .first()
}

//add a meal
export async function addAMeal(
  newMeal: NewMeal,
  db = connection
): Promise<Meal> {
  const mealSnakeCase: MealSnakeCase = {
    title: newMeal.title,
    description: newMeal.description,
    recipe_url: newMeal.recipeUrl,
    submitted_by: newMeal.submittedBy,
  }
  return db('meal-ideas')
    .insert(mealSnakeCase)
    .returning(camelColumns)
    .then((insertedEntries) => insertedEntries[0])
}

//update a meal
export async function updateMeal(
  id: number,
  updatedMeal: Meal,
  db = connection
): Promise<Meal> {
  const mealSnakeCase: MealSnakeCase = {
    title: updatedMeal.title,
    description: updatedMeal.description,
    recipe_url: updatedMeal.recipeUrl,
    submitted_by: updatedMeal.submittedBy,
  }
  return db('meal-ideas')
    .where({ id })
    .update(mealSnakeCase)
    .returning(camelColumns)
    .then((updatedEntries) => updatedEntries[0])
}

//delete a meal
export async function deleteMeal(id: number, db = connection) {
  return db('meal-ideas').where({ id }).delete()
}
