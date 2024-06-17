//src\controllers\tableController.js
const { getTableData, getTableColumnData, getTableColumnValues } = require('../models/tableModel');

const getTableDataController = async (req, res) => {
  const { tableName } = req.body; // Get tableName from request body
  try {
    const data = await getTableData(tableName);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTableColumnController = async (req, res) => {
  const { tableName } = req.body; // Get tableName from request body
  try {
    const data = await getTableColumnData(tableName);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTableColumnValuesController = async (req, res) => {
  const { tableName, columnName } = req.body; // Get tableName and columnName from request body
  try {
    const data = await getTableColumnValues(tableName, columnName);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { 
  getTableDataController,
  getTableColumnController,
  getTableColumnValuesController
};
