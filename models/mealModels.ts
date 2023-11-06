export interface Meal {
  id: number
  title: string
  description: string
  recipeUrl: string 
  submittedBy: string
}

export interface NewMeal {
  title: string
  description: string
  recipeUrl: string 
  submittedBy: string
}