require('dotenv').load()
const app = require('../index')
const chai = require('chai')
const expect = chai.expect

chai.use(require('chai-http'))
