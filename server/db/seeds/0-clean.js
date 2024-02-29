export async function seed(knex) {
  await knex('liked_meals').del()
  await knex('meal_ideas').del()
  await knex('users').del()
}