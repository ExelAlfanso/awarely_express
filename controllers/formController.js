const pool = require("../db");

exports.laporan = async (req, res) => {
  const { contact, story, availability, date, time } = req.body;
  
  try {
    const assistanceBool = availability === "yes";

    const result = await pool.query(
      "INSERT INTO reports (contact, description, assistance, schedule_date, schedule_time) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [contact, story, assistanceBool, date || null, parseTimeString(time) || null]
    );

    return res.status(201).json({
      message: "Report submitted successfully.",
      report: result.rows[0],
    });
  } catch (err) {
    console.error("Report failed.", err);
    return res.status(500).json({ message: "Report failed." });
  }
};


exports.ultksp = async (req, res) => {
  const { counselor, contact, story, availability, date, time } = req.body;
  
  try {
    const assistanceBool = availability === "yes";

    const result = await pool.query(
      "INSERT INTO ultkspCounselings (counselor,contact, description, assistance, schedule_date, schedule_time) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *",
      [counselor, contact, story, assistanceBool, date || null, parseTimeString(time) || null]
    );

    return res.status(201).json({
      message: "Scheduled successfully.",
      report: result.rows[0],
    });
  } catch (err) {
    console.error("Scheduling failed.", err);
    return res.status(500).json({ message: "Scheduling failed." });
  }
};

exports.rekanmelangkah = async (req, res) => {
  const { counselor, contact, story, availability, date, time } = req.body;
  
  try {
    const assistanceBool = availability === "yes";

    const result = await pool.query(
      "INSERT INTO rmCounselings (counselor,contact, description, assistance, schedule_date, schedule_time) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *",
      [counselor, contact, story, assistanceBool, date || null, parseTimeString(time) || null]
    );

    return res.status(201).json({
      message: "Scheduled successfully.",
      report: result.rows[0],
    });
  } catch (err) {
    console.error("Scheduling failed.", err);
    return res.status(500).json({ message: "Scheduling failed." });
  }
};

function parseTimeString(timeStr) {
  if (!timeStr) return null;

  if (timeStr.includes(":")) {
    return timeStr;
  }

  return timeStr.replace(".", ":");
}