exports.up = knex => {
  return knex.schema.createTable('cohorts', (t) => {
    t.bigIncrements('id').primary();
    t.text('members');
    t.string('name');
    t.text('logoUrl');
    t.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable('cohorts');
};