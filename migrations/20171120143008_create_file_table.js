
exports.up = function(knex, Promise) {
  return knex.schema.createTable('files', function(table) {
    table.increments();
    table.string('system_id', 80).unique();
    table.enu('status', ['VALID', 'MISSING', 'FAILED', 'PENDING']).notNull();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('files');
};
