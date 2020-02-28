const db = require("../database/connection.js");

module.exports = {
  all,
  add
};

function all() {
  return db("links");
}

function add(link) {
  return db("links").insert(link);
}
