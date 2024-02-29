/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('meal_ideas').insert([
    {
      title: 'Nachos',
      description: 'Mince, corn chips, cheese, whats not to love',
      recipe_url:
        'https://foodess.com/easy-healthy-3-ingredient-banana-pancakes-recipe/',
      submitted_by: '3',
    },
    {
      title: 'Pancakes',
      description: 'fluffy fluffy goodness',
      recipe_url:
        'https://foodess.com/easy-healthy-3-ingredient-banana-pancakes-recipe/',
      submitted_by: '2',
    },
    {
      title: 'Cereal',
      description: "Natalie's favourite go to",
      recipe_url: '',
      submitted_by: '1',
    },
  ])
}
