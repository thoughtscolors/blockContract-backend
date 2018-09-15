const express = require('express')
const app = express()
const http = require('http').createServer(app)
const socket = require('socket.io').listen(http)
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const socketPort = process.env.PORT || 8100
const port = process.env.PORT || 8101


socket.on('connection', (client) => {
console.log('client connected...', client.id)
  // client.on('register', handleRegister)
  // client.on('join', handleJoin)
  // client.on('leave', handleLeave)
  // client.on('message', handleMessage)
  // client.on('chatrooms', handleGetChatrooms)
  // client.on('availableUsers', handleGetAvailableUsers)
  client.on('disconnect', () => {
    console.log('client disconnect:', client.id)
    // handleDisconnect()
  })
  client.on('error', (err) => {
    console.log('error from client:', client.id)
    console.log('error:', err);
  })
})

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
  http.listen(socketPort, () => {
    console.log(`socket running on port: ${socketPort}!`)
  });
}

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`blockContract running on port: ${port}!`)
  });
}

module.exports = app
