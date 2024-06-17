// src\models\tableModel.js
const pool = require('./db');

const getTableData = async (tableName) => {
  try {
    const query = `SELECT * FROM public.${tableName}`;
    const { rows } = await pool.query(query);
    // Remove the 'geom' column from each row
    const dataWithoutGeom = rows.map(row => {
      const { geom, ...rowWithoutGeom } = row;
      return rowWithoutGeom;
    });

    return dataWithoutGeom;
  } catch (error) {
    throw error;
  }
};
const getTableColumnData = async (tableName) => {
  try {
    const query = `SELECT column_name, data_type FROM information_schema.columns WHERE table_schema = 'public' AND table_name = '${tableName}'`;
    console.log(query)
    const { rows } = await pool.query(query);

    // Extract column names and data types from the rows and filter out 'geom'
    const columns = rows
      .filter(row => row.column_name !== 'geom')
      .map(row => ({
        columnName: row.column_name,
        dataType: row.data_type
      }));

    return columns;
  } catch (error) {
    throw error;
  }
};

const getTableColumnValues = async (tableName, columnName) => {
  try {
    const query = `SELECT DISTINCT ${columnName} FROM public.${tableName}`;
    const { rows } = await pool.query(query);
    const columnValues = rows.map(row => row[columnName]);
    return columnValues;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTableData,
  getTableColumnData,
  getTableColumnValues
};
