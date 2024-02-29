/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('liked_meals', (table) => {
    table.integer('id').primary()
    table.integer('meal_id').references('meal_ideas.id')
    table.integer('user_id').references('users.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('liked_meals')
}
