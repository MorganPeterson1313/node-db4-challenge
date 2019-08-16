
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id:1, ingredient_name: 'apples', },
        {recipe_id:1, ingredient_name: 'cinnamon'},
        {recipe_id:2, ingredient_name: 'cranberries'}
      ]);
    });
};
