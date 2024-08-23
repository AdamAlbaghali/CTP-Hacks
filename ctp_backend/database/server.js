const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

const pool = mysql.createPool({
  host: process.env.DB_HOST, 
  user: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, conn) => {
  if(err) console.log(err)
  console.log("Connected successfully")
})

module.exports = pool.promise()

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_database'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// POST endpoint to submit survey data
app.post('/api/submit-survey', (req, res) => {
  const {
    isCunyStudent,
    campus,
    foodInsecurityAffect,
    housingInsecurityAffect,
    mentalHealthAffect,
    healthcareAccessAffect,
    foodInsecurityAware,
    housingInsecurityAware,
    mentalHealthAware,
    healthcareAccessAware,
    foodInsecurityAdequate,
    housingInsecurityAdequate,
    mentalHealthAdequate,
    healthcareAccessAdequate,
  } = req.body;

  const sql = `
    INSERT INTO survey_answers (
      isCunyStudent, campus, foodInsecurityAffect, housingInsecurityAffect, 
      mentalHealthAffect, healthcareAccessAffect, foodInsecurityAware, 
      housingInsecurityAware, mentalHealthAware, healthcareAccessAware, 
      foodInsecurityAdequate, housingInsecurityAdequate, mentalHealthAdequate, 
      healthcareAccessAdequate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    isCunyStudent, campus, foodInsecurityAffect, housingInsecurityAffect,
    mentalHealthAffect, healthcareAccessAffect, foodInsecurityAware,
    housingInsecurityAware, mentalHealthAware, healthcareAccessAware,
    foodInsecurityAdequate, housingInsecurityAdequate, mentalHealthAdequate,
    healthcareAccessAdequate
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to submit survey' });
    }
    res.status(201).json({ message: 'Survey submitted successfully!' });
  });
});


// GET endpoint to fetch survey data
app.get('/api/survey-data', (req, res) => {
  const sql = 'SELECT * FROM survey_answers';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch survey data' });
    }
    res.status(200).json(results);
  });
});

  
  