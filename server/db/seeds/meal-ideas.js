/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('meal-ideas').del()
  await knex('meal-ideas').insert([
    {
      title: 'Nachos',
      description: 'Mince, corn chips, cheese, whats not to love',
      recipe_url:
        'https://foodess.com/easy-healthy-3-ingredient-banana-pancakes-recipe/',
      submitted_by: 'Nat KN',
    },
    {
      title: 'Pancakes',
      description: 'fluffy fluffy goodness',
      recipe_url:
        'https://foodess.com/easy-healthy-3-ingredient-banana-pancakes-recipe/',
      submitted_by: 'Charlotte',
    },
    {
      title: 'Cereal',
      description: "Natalie's favourite go to",
      recipe_url: '',
      submitted_by: 'Natalie',
    },
  ])
}
