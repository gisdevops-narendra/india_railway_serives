// src/models/digitalFormModel.js
const pool = require('./db');

const insertIntoTblLap = async (data) => {
  const query = `
    INSERT INTO tbl_lap (
      railf_id, zone_id, division_id, sse_id, village_name, railway_line_direction, land_area, visit_date, visit_name, 
      visit_office, farmer_owner, market_rate,number_of_owners, amount_finalized, bank_name, check_dd_number, 
      advance_amount, possession_date, commencement_of_works, ownership_details, owner_integration_details, 
      color_intelligence_details, remarks
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)
    RETURNING *;
  `;
  const values = [
    data.railf_id,              // $1
    data.selectedZone,          // $2
    data.selectedDivision,      // $3
    data.selectedSSE,           // $4
    data.villageName,           // $5
    data.railwayLineDirection,  // $6
    data.landArea,  // $7
    new Date(data.visitDate),   // $8
    data.visitName,             // $9
    data.visitOffice,           // $10
    data.farmerOwner,           // $11
    data.marketRate,// $12
    data.numberOfOwners,        // $13
    data.amountFinalized, // $14
    data.bankName,              // $15
    data.checkDDNumber,         // $16
    data.advanceAmount,   // $17
    new Date(data.possessionDate),    // $18
    data.commencementOfWorks,   // $19
    data.ownershipDetails,      // $20
    data.ownerIntegrationDetails,     // $21
    data.colorIntelligenceDetails,    // $22
    data.remarks                // $23
  ];

  try {
    console.log('Executing query:', query);
    console.log('With values:', values);
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error('Error executing query:', error.message);
    throw error;
  }
};

//done for som,bmm
const insertIntoTblSom = async (data) => {
  const query = `
    INSERT INTO tbl_som (railf_id, zone_id, division_id, sse_id, user_id, survey_works, work_category, remarks)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;
  const values = [
    data.railf_id, 
    data.selectedZone, 
    data.selectedDivision, 
    data.selectedSSE, 
    data.selectedSurveyor, 
    data.selectedSurveyingWork, 
    data.selectedCategoryOfWork, 
    data.remarks
  ];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error('Error executing query', error.message);
    throw error;  
  }
};
const insertIntoTblAttachment = async (data) => {
  const query = `
    INSERT INTO tbl_attachment (railf_id, tbl_name, media_type, media_path)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [data.railf_id, data.tbl_name, data.media_type, data.media_path];
  const { rows } = await pool.query(query, values);
  return rows[0];
};
const insertIntoTblBmm = async (data) => {
  const query = `
    INSERT INTO tbl_bmm (
      railf_id, zone_id, division_id, sse_id, user_id, bridge_class, work_category, remarks
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8
    ) RETURNING *;
  `;
  const values = [
    data.railf_id, data.zone_id, data.division_id, data.sse_id, data.user_id, data.bridge_class, data.work_category, data.remarks
  ];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const getZoneList = async () => {
  const query = 'SELECT DISTINCT(z_code) FROM mgmt.tbl_rail_hierarchy';
  const { rows } = await pool.query(query);
  return rows;
};

const getDivisionList = async (z_code) => {
  const query = 'SELECT DISTINCT(div_code) FROM mgmt.tbl_rail_hierarchy WHERE z_code = $1';
  const { rows } = await pool.query(query, [z_code]);
  return rows;
};

const getSSEList = async (z_code, div_code) => {
  const query = 'SELECT DISTINCT(sse_code) FROM mgmt.tbl_rail_hierarchy WHERE z_code = $1 AND div_code = $2';
  const { rows } = await pool.query(query, [z_code, div_code]);
  return rows;
};

const getUsersList = async () => {
  const userJurisdiction = '11';
  const query = `select uid,user_name from mgmt.tbl_users_master where user_juridication = '{${userJurisdiction}}'`;
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = {
  insertIntoTblLap,
  insertIntoTblSom,
  insertIntoTblAttachment,
  insertIntoTblBmm,
  getZoneList,
  getDivisionList,
  getSSEList,
  getUsersList
};
