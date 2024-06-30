const express = require('express')
const route = express.Router();
const itemController = require('../controllers/itemController')

route.get('/create-item',itemController.viewPage)
route.post('/create-item',itemController.addItem)
route.get('/item-detail/update/:itemId',itemController.viewItemPage)
route.post('/item-detail/update/:itemId',itemController.updateItem)

module.exports = route;