export interface NewUser {
  name: string
  username: string
  email: string
}

export interface User extends NewUser {
  id: number
}
