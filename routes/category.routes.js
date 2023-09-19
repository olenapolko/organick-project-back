const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');

router.get('/', category.getAll);
router.get('/:id', category.getById);
router.post('/', category.add);

module.exports = router;