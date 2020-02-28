const db = require("../database/connection.js");

const topics = () => db("topics");

module.exports = {
  all,
  add,
  updateTopic,
  removeTopic
};

function all() {
  return topics();
}

function findById(id) {
  return topics()
    .where({ id })
    .first();
}

function add(topic) {
  return topics()
    .insert(topic, "id")
    .then(([id]) => findById(id));
}

function updateTopic(changes, id) {
  if (!id) {
    return { error: "id required" };
  }
  return topics()
    .update(changes)
    .where({ id })
    .then(() => findById(id));
}

function removeTopic(id) {
  return findById(id).then(was => {
    return topics()
      .del()
      .where({ id })
      .then(() => was);
  });
}
