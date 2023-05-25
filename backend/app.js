const express = require('express');
const percentageRoute = require('./routes/roman');
const app = express();

app.use('/', percentageRoute);


module.exports = app.listen(8080, () => {
    console.log('Connected To 8080 Port.');
});
