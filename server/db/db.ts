import connection from './connection.ts'
import { Meal, MealSnakeCase, NewMeal } from '../../models/mealModels.ts'
import {
  LikedRecipe,
  NewLikedRecipe,
  NewUser,
  User,
  Usernames,
} from '../../models/userModels.ts'

const camelColumns = [
  'id',
  'title',
  'description',
  'recipe_url as recipeUrl',
  'submitted_by as submittedBy',
]

const camelJoin = ['id', 'user_id as userId', 'meal_id as mealId']

//get all meal ideas
export async function getAllMealIdeas(db = connection): Promise<Meal[]> {
  return db('meal_ideas').select(...camelColumns)
}

//get individual meal
export async function getMealIdea(
  id: number,
  db = connection
): Promise<Meal[]> {
  return db('meal_ideas')
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
  return db('meal_ideas')
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
  return db('meal_ideas')
    .where({ id })
    .update(mealSnakeCase)
    .returning(camelColumns)
    .then((updatedEntries) => updatedEntries[0])
}

//delete a meal
export async function deleteMeal(id: number, db = connection) {
  return db('meal_ideas').where({ id }).delete()
}

//Add a user
export async function addUser(
  newUser: NewUser,
  db = connection
): Promise<User> {
  const addedUser = await db('users').insert(newUser).returning('id')
  return addedUser[0]
}

//add a join
export async function addJoin(
  newJoin: NewLikedRecipe,
  db = connection
): Promise<LikedRecipe> {
  const addedJoin = await db('liked_meals').insert(newJoin).returning(camelJoin)
  return addedJoin[0]
}

//get usernames
export function getUsernames(db = connection): Promise<Usernames[]> {
  return db('users').select('username')
}
