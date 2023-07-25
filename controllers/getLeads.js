const { getAllLeads } = require("../services/leadsServices");

const getLeads = async (req, res) => await getAllLeads(req, res);

module.exports = getLeads;