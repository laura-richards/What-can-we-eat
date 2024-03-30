import request from 'superagent'
import { NewUserDetails } from '../../models/userModels'

const rootURL = 'api/v1/user'

export async function addNewUser(newUser: NewUserDetails) {
  console.log('tried to add:', newUser)
}
