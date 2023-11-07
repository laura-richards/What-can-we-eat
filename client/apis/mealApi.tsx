import request from 'superagent'

const rootURL = '/api/v1/meals'



export async function getMealList() {
  try {
    const res = await request.get(rootURL)
    return res.body.meals
  } catch (e) {
    console.error(e)
  }
}
