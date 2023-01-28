var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var app = express();

//initialize port number
const port = process.env.PORT || 4000;
const uri = process.env.MONGODB_URI;

// Setting Up express To allow JSON based data on routes

app.use(express.json())

app.get('/home.html', (req, res) => {
    res.render('guidelines');
});
app.get('/myBookings.html', (req, res) => {
    res.render('guidelines');
});

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

