// src/controllers/digitalFormsController.js
const {
  insertIntoTblLap,
  insertIntoTblSom,
  insertIntoTblAttachment,
  insertIntoTblBmm,
  getZoneList,
  getDivisionList,
  getSSEList,
  getUsersList
} = require('../models/digitalFormModel');

const insertTblLapController = async (req, res) => {
  try {
    const data = req.body;
    const result = await insertIntoTblLap(data);
    res.json({ message: 'Data inserted successfully', data: result });
  } catch (error) {
    console.error('Error inserting into tbl_lap:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const insertTblSomController = async (req, res) => {
  try {
    const data = req.body;
    const result = await insertIntoTblSom(data);
    res.json({ message: 'Data inserted successfully', data: result });
  } catch (error) {
    console.error('Error inserting into tbl_som:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const insertTblAttachmentController = async (req, res) => {
  try {
    const data = req.body;
    const result = await insertIntoTblAttachment(data);
    res.json({ message: 'Data inserted successfully', data: result });
  } catch (error) {
    console.error('Error inserting into tbl_attachment:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const insertTblBmmController = async (req, res) => {
  try {
    const data = req.body;
    const result = await insertIntoTblBmm(data);
    res.json({ message: 'Data inserted successfully', data: result });
  } catch (error) {
    console.error('Error inserting into tbl_bmm:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getZoneListController = async (req, res) => {
  try {
    const zones = await getZoneList();
    res.json(zones);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getDivisionListController = async (req, res) => {
  try {
    const { z_code } = req.params;
    const divisions = await getDivisionList(z_code);
    res.json(divisions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getSSEListController = async (req, res) => {
  try {
    const { z_code, div_code } = req.params;
    const sses = await getSSEList(z_code, div_code);
    res.json(sses);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
const getUsersListController = async (req, res) => {
  try {
    const users = await getUsersList();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  insertTblLapController,
  insertTblSomController,
  insertTblAttachmentController,
  insertTblBmmController,
  getZoneListController,
  getDivisionListController,
  getSSEListController,
  getUsersListController
};
