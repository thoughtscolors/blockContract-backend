const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 8101

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const usersRoute = require('./src/routes/users')

app.use('/users', usersRoute)

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err })
});

app.use((req, res, next) => {
  res.status(404).json({ error: { message: "Not Found" } })
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`blockContract running on port: ${port}!`)
  });
}

module.exports = app
