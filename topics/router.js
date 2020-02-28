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

router.post("/", (req, res) => {
  req.body.name && req.body.name.length > 0
    ? topics.add(req.body).then(ret => res.status(201).json(ret))
    : res.status(400).json({ error: "name required" });
});

module.exports = router;
