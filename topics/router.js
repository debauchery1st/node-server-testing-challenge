const router = require("express").Router();

router.use("/", (req, res) => {
  res.status(200).json({
    router: "topics"
  });
});

module.exports = router;
