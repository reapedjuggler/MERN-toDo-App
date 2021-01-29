const express = require('express');
const path = require('path');
const db = require('./db');
const cors = require('cors');


const app = express();

var corsOptions = {
    origin: 'http://localhost:8000'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extennded: true}));

app.use('/api', require('./routes/api').route);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log("Server started on https://localhost:8000"));