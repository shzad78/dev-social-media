var express = require("express");
var router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;
