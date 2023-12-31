const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');


router.post('/', order.add);
router.get('/', order.getAll);

module.exports = router;