// models/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'scr_tms_mereged',
  password: 'manthammis',
  port: 9999, // default PostgreSQL port
});

module.exports = pool;
