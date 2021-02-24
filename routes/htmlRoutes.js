const path = require("path");
const router = require('express').Router();


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// get route for /exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

// get route for /stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

module.exports = router