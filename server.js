const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const options = {
    useFindAndModify: false,
    useNewUrlParser: true
}

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGOATLAS_URI || "mongodb://localhost/workout", options);

// --------------------------------------------------------------------------------------------
// routes here
const htmlRoutes = require('./routes/htmlRoutes.js')
const apiRoutes = require('./routes/apiRoutes.js')
app.use(htmlRoutes)
app.use(apiRoutes)


// Start the server
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });