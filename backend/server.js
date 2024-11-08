const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Konfiguracja połączenia z bazą danych
const pool = new Pool({
  host: 'db',         
  user: 'user',
  password: 'password',
  database: 'mydatabase',
  port: 5432,
});

// Endpoint do pobierania użytkowników
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});

