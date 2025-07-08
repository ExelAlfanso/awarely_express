const { Pool } = require("pg");
require("dotenv").config();
const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,
});
db.on("connect", () => {
  console.log("Connected to the database");
});

module.exports = db;
