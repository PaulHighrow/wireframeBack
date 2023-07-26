const Leads = require("../db/models/leadsModel");

const getAllLeads = async () => await Leads.find({});

const newLead = async (body) => await Leads(body).save();

module.exports = {
  getAllLeads,
  newLead,
};
