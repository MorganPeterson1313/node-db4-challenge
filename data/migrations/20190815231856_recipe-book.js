
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128);
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes');
      })
      .createTable('instructions', tbl => {
        tbl.increments();
        tbl.text('instructions', 128)
          .unique()
          .notNullable();
      })
      .createTable('recipe_instructions', tbl => {
        tbl.integer('instruction_id')
        .unsigned()
        .notNullable()
        .references('instructions.id');
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id');
        tbl.primary(['instruction_id', 'recipe_id']);
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe-instructions');
};
