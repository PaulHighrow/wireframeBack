const axios = require("axios");
const token = require("../../utils/crm/tokens.json");

axios.defaults.baseURL = "https://apeducation.kommo.com/";
axios.defaults.headers.common[
  "Authorization"
] = `${token.token_type} ${token.access_token}`;

const postLead = async (req, res, next) => {
  const postRequest = [
    {
      name: req.body.name,
      pipeline_id: 6542135,
      custom_fields_values: [
        {
          field_id: 1807468,
          values: [
            {
              value: req.body.phone,
            },
          ],
        },
      ],
    },
  ];

  try {
    const postResp = await axios.post("api/v4/leads", postRequest);
    console.log(postResp.config.data);
  } catch (error) {
    console.log(error.response.data);
    return res.status(400).json(error.response.data);
  }
  next();
};

module.exports = postLead;
