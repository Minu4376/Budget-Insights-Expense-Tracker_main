const express = require("express")
const router = express.Router()

const { getInsight } = require("../controllers/aiController")

router.post("/insight", getInsight)

module.exports = router