const dotenv = require("dotenv"),
  Config = require("./src/config/config"),
  Mongoose = require('mongoose'),
  Connection=require('./src/config/mongoose-connection');

dotenv.config();

Mongoose.Promise = Promise

Mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})

Mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
})

Mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
})

Mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})

Mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
}) 

Connection();