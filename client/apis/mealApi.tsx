// import request from 'superagent'

// const rootURL = '/api/v1/meals'

const meals = [{ title: 'nachos' }, { title: 'pancakes' }]

export async function getMealList() {
  try {
    // const res = await request.get(rootURL)
    // return res.body
    console.log('checked for meals')
    return meals
  } catch (e) {
    console.error(e)
  }
}
