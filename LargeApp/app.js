const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const gitExtension = vscode.extensions.getExtension < GitExtension > ('vscode.git').exports;
const git = gitExtension.getAPI(1);


mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopolo: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})