exports.up = function(knex, Promise) {
  return knex.schema.createTable('data', table => {
    table.increments();

    //Calculated result
    table.integer('location_cost').notNullable();
    table.integer('food_cost').notNullable();
    table.integer('misc_cost').notNullable();
    table.integer('health_cost').notNullable();
    table.integer('budget_cost').notNullable();
    table.integer('difference').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('data');
};
