const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '12052005', // Your MySQL password
  database: 'user_db',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Listen on port 5000
app.listen(3001, () => {
  console.log('Server running on port 3000');
});
// User signup route
app.post('/signup', (req, res) => {
  const { username, phoneNumber, email, password, shippingAddress } = req.body;

  // Hash the password for security
  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = 'INSERT INTO users (username, phoneNumber, email, password, shippingAddress) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [username, phoneNumber, email, hashedPassword, shippingAddress], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving user data', error: err });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});
// User login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Logged in successfully', user });
  });
});
