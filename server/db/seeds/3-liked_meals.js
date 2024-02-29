/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('liked_meals').insert([
    { meal_id: 1, user_id: 1 },
    { meal_id: 2, user_id: 2 },
    { meal_id: 3, user_id: 3 },
  ])
}
