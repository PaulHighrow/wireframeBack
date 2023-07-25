const Leads = require("../db/models/leadsModel");

const getAllLeads = async (_, res) => {
  try {
    const result = Leads.find({});
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllLeads,
};