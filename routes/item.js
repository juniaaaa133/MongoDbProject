const express = require('express')
const route = express.Router();
const itemController = require('../controllers/itemController')

route.get('/item-detail/:itemId',itemController.viewItemDetail)
route.post('/item-detail/:itemId',itemController.deleteItem)

module.exports = route;
