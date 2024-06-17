// src/routes/digitalFormRoute.js
const express = require('express');
const router = express.Router();
const {
  insertTblLapController,
  insertTblSomController,
  insertTblAttachmentController,
  insertTblBmmController,
  getZoneListController,
  getDivisionListController,
  getSSEListController,
  getUsersListController
} = require('../controllers/digitalFormsController');

router.post('/lap', insertTblLapController);
router.post('/som', insertTblSomController);
router.post('/attachment', insertTblAttachmentController);
router.post('/bmm', insertTblBmmController);

// New routes for fetching distinct values
router.get('/zones', getZoneListController);
router.get('/divisions/:z_code', getDivisionListController);
router.get('/sses/:z_code/:div_code', getSSEListController);

router.get('/users', getUsersListController);

module.exports = router;
