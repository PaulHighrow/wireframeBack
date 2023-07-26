const axios = require("axios");
const fs = require('fs').promises;
const path = require("path");
const tokenPath = path.join(__dirname, "../../utils/crm/tokens.json")
const token = require("../../utils/crm/tokens.json");

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const refreshRequest = {
  client_id: "d7412514-d863-4a1b-b396-92b243063b65",
  client_secret:
    "nWi0Cg6ffpzpAK65WuvtyJm2qp6sBfVusMm86pPTlcTQDWa9YUxmYqNOB0bBO57q",
  grant_type: "refresh_token",
  refresh_token: `${token.refresh_token}`,
  redirect_uri: "https://paulhighrow.github.io/wireframe/",
};

const crmRefresh = async (_, __, next) => {
  try {
    const refreshResp = await axios.post(
      "oauth2/refresh_token",
      refreshRequest
    );
    console.log(refreshResp.data);
    await fs.writeFile(tokenPath, JSON.stringify(refreshResp.data), "utf-8");
    next();
  } catch (error) {
    console.log(error.response.data);
  }
  next();
};

module.exports = crmRefresh;
