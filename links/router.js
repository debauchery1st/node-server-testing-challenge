const router = require("express").Router();

router.use("/", (req, res) => {
  res.status(200).json({
    router: "links"
  });
});

module.exports = router;
