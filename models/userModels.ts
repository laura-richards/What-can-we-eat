export interface NewUser {
  name: string
  username: string
  email: string
}

export interface User extends NewUser {
  id: number
}

export interface NewLikedRecipe {
  user_id: number
  meal_id: number
}

export interface LikedRecipe extends NewLikedRecipe {
  id: number
}
