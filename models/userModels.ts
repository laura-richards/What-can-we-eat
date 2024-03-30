export interface NewUser {
  name: string
  username: string
  email: string
}

export interface User extends NewUser {
  id: number
}

export interface NewUserDetails extends NewUser {
  meal: number | null
}

export interface NewLikedRecipe {
  user_id: number
  meal_id: number
}

export interface LikedRecipe extends NewLikedRecipe {
  id: number
}
