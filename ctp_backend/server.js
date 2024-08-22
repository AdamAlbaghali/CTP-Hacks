const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

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

app.post('/api/submit-form', (req, res) => {
    const { name, email, message } = req.body;
  
    const sql = 'INSERT INTO form_data (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to submit form' });
      }
      res.status(201).json({ message: 'Form submitted successfully!' });
    });
});

app.get('/api/form-data', (req, res) => {
    const sql = 'SELECT * FROM form_data';
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch form data' });
      }
      res.status(200).json(results);
    });
});
  
app.delete('/api/form-data/:id', (req, res) => {
    const { id } = req.params;
  
    const sql = 'DELETE FROM form_data WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete form data' });
      }
      res.status(200).json({ message: 'Form data deleted successfully!' });
    });
});
  