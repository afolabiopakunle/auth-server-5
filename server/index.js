const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
const api = require('./routes/api');

const db = 'mongodb+srv://afolabi:8899fifafa@cluster0.bwrba.mongodb.net/eventsdb?retryWrites=true&w=majority';

mongoose.connect(db, (err) => err ? console.log(err) : console.log('Connected to mongoDB successfully'));

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
})

app.use('/api', api);

const PORT = 3000;

app.listen(PORT, () => console.log('App responding from port ' + PORT))
