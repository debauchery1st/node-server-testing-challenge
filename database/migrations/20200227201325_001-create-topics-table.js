exports.up = function(knex) {
  return knex.schema.createTable("topics", function(tbl) {
    tbl.increments();
    tbl
      .string("name", 255)
      .notNullable()
      .unique()
      .index();
    tbl.string("description", 1024).default("general");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("topics");
};
