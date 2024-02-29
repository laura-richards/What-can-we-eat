/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('meal_ideas', (table) => {
    table.integer('id').primary()
    table.string('title')
    table.string('description')
    table.string('recipe_url')
    table.integer('submitted_by').references('users.id')
  })
}



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('meal-ideas')
}
