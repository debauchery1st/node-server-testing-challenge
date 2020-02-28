const links = require("./model");
const router = require("express").Router();

router.use("/", (req, res) => {
  res.status(200).json({
    router: "links"
  });
});

router.get("/all", (req, res) => {
  links.all().then(t => res.status(200).json(t));
});

module.exports = router;
