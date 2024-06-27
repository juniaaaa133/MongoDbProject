const express = require('express')
const route = express.Router();
const docController = require('../controllers/docController')

route.get('/documentation',docController.viewPage)

module.exports = route;