/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users').insert([
    { name: 'Jane Doe', email: 'string1@gmail.com', auth0Id: 'auth101' },
    { name: 'John Doe', email: 'string2@gmail.com', auth0Id: 'auth102' },
    { name: 'Jake Doe', email: 'string3@gmail.com', auth0Id: 'auth103' },
  ])
}
