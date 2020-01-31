require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

let  port = process.env.PORT || 3000

app.use(express.json() );
app.use(routes);
app.use( cors() );


app.listen(port)

module.exports = app
