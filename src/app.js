// src/app.js
const express = require('express');
const app = express();
const tableRoutes = require('./routes/tableRoutes');
const digitalFormRoutes = require('./routes/digitalFormRoute');
const cors = require('cors');

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Route handling
app.use('/tables', tableRoutes);
app.use('/digital-forms', digitalFormRoutes);

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
