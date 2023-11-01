/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('meal-ideas', (table) => {
    table.integer('id').primary()
    table.string('title')
    table.string('photo')
    table.string('description')
    table.string('recipe_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('meal-ideas')
}
