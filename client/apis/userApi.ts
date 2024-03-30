import request from 'superagent'
import { NewUserDetails } from '../../models/userModels'

const rootURL = 'api/v1/user'

export async function addNewUser(newUser: NewUserDetails) {
  const res = await request.post(rootURL).send(newUser)
  if (res.status !== 200) {
    throw new Error('failed to add user')
  }
  return res.body
}
