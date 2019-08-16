
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {instructions: 'Boiled apples until soft and add cinnamon', recipe_id: 1},
        {instructions: 'Boil cranberries then serve', recipe_id: 2}
      ]);
    });
};
