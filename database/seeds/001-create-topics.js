exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("topics")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("topics").insert([
        { id: 1, name: "NodeJS" },
        { id: 2, name: "HTML" },
        { id: 3, name: "CSS" }
      ]);
    });
};
