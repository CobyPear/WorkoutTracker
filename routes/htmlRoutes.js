var path = require("path");

module.exports = function(app){
    // get route for /exercise
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    });

    // get route for /stats
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    });
};