const express = require("express");
const { get, post } = require("../Controllers/comments");
const router = express.Router();

router.get("/comments", get)
router.post("/comments", post)

module.exports = router;