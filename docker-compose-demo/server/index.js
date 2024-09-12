const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 5004;

// dotenv
require("dotenv").config();

console.log(process.env.DB_HOST);

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
