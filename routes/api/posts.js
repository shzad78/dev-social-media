var express = require("express");
var router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "posts works" }));
router.get("/", (req, res) => res.json({ msg: "at the root of posts works" }));

module.exports = router;
