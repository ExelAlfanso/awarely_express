// const { Pool } = require("pg");
// require("dotenv").config();
// const db = new Pool({
//   connectionString: process.env.DB_URL,
//   ssl: false,
// });
// db.on("connect", () => {
//   console.log("Connected to the database");
// });

// module.exports = db;


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectToDB;