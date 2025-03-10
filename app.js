const express = require('express');

const app = express();


// set server Port
const PORT=5000;

//  import the dotenv module
require('dotenv').config();

// root endpoint
app.get('/', (req, res) => {
    res.send(`Hello W  orld version 2- ${process.env.ENVIRONMENT}`);
});

// start server
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!- http://localhost:${PORT}`);
});
