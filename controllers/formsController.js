import Counseling from "../models/Counselings.js";
import Report from "../models/Reports.js";

export const createReport = async (req, res) => {
  const { contact, description, availability, schedule_date, schedule_time } =
    req.body;
  try {
    const report = await Report.create({
      contact,
      description,
      availability,
      schedule_date,
      schedule_time,
    });
    return res.status(201).json({ message: "Report successfully created." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCounseling = async (req, res) => {
  const {
    type,
    counselor,
    contact,
    description,
    availability,
    schedule_date,
    schedule_time,
  } = req.body;
  try {
    const counseling = await Counseling.create({
      type,
      counselor,
      contact,
      description,
      availability,
      schedule_date,
      schedule_time,
    });
    return res
      .status(201)
      .json({ message: `${type} counseling successfully created.` });
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};
