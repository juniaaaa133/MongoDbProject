const express = require('express');
const { fetchAllUsers } = require('../controllers/userController');

const router = express.Router();

router.get('/users',fetchAllUsers);

module.exports = router;