
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table.increments();
    table.string('name').unique();
    table.string('system_id', 80).unique();
    table.string('auth_token', 40).unique();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
