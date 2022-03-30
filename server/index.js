const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
})

const PORT = 3000;

app.listen(PORT, () => console.log('App responding from port ' + PORT))
