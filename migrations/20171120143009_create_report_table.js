
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reports', function(table) {
    table.increments();
    table.string('html_file_id').references('files.system_id');
    table.string('project_id').references('projects.system_id').onDelete('CASCADE');
    table.string('tag').notNull();
    table.float('coverage');
    table.string('system_id', 80).unique();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reports');
};
