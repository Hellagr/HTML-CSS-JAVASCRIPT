// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')

    .then(() => {
        console.log("Con open!");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })