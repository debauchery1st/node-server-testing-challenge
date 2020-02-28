const topics = require("./model");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    router: "topics"
  });
});

router.get("/all", (req, res) => {
  topics.all().then(t => res.status(200).json(t));
});

module.exports = router;
