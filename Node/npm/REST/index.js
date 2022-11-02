const express = require('express');
const app = express();
const path = require('path')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static("public"));

const comments = [
    {
        username: 'Todd',
        comment: 'lol you are garbage'
    },
    {
        username: 'Hui',
        comment: 'fuck off!'
    },
    {
        username: '777',
        comment: '1xBET is the best of the bad'
    },
    {
        username: 'Oriflame',
        comment: 'do you want some stuffm bastrads???'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here is your ${meat} ${qty} tacos`);
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})