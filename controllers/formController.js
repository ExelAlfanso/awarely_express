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


function parseTimeString(timeStr) {
  if (!timeStr) return null;

  if (timeStr.includes(":")) {
    return timeStr;
  }

  return timeStr.replace(".", ":");
}