

const express = require('express');

const Router = express.Router();

const {getData,postData} = require('../controller/controller')

Router.get('/url',getData)

Router.post('/url',postData)


module.exports = Router