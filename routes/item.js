const express = require('express')
const route = express.Router();
const itemController = require('../controllers/itemController')

route.get('/item-detail/:itemId',itemController.viewItemDetail)

module.exports = route;
