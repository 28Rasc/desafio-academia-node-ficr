const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(express.json() );
app.use(routes);
app.use( cors() );


app.listen(8080)

module.exports = app
