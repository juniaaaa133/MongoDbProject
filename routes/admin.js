const express = require('express')
const route = express.Router();
const itemController = require('../controllers/itemController')

route.get('/create-item',itemController.viewPage)
route.post('/create-item',itemController.addItem)

module.exports = route;