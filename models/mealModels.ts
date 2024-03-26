export interface NewMeal {
  title: string
  description: string
  recipeUrl: string
  submittedBy: string
}
export interface Meal extends NewMeal {
  id: number
}

export interface MealSnakeCase {
  title: string
  description: string
  recipe_url: string
  submitted_by: string
}

export type UpdateMealParams = {
  numId: number
  newMeal: NewMeal
}
