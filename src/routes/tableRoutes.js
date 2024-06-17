//src\routes\tableRoutes.js
const express = require('express');
const router = express.Router();
const { getTableDataController, getTableColumnController, getTableColumnValuesController } = require('../controllers/tableController');

router.post('/data', getTableDataController);
router.post('/columns', getTableColumnController);
router.post('/column-values', getTableColumnValuesController);

module.exports = router;
