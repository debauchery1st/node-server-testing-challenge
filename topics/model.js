const db = require("../database/connection.js");

module.exports = {
  all,
  add
};

function all() {
  return db("topics");
}

function findById(id) {
  return db("topics")
    .where({ id })
    .first();
}

function add(topic) {
  return db("topics")
    .insert(topic, "id")
    .then(([id]) => findById(id));
}
