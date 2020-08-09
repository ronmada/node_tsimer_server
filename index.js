const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res) => {
    res.send('<h1>hello world</h1>');
});

app.get('/favicon.ico', (req, res) => res.status(204));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log(` PORT IS: ${port}`);