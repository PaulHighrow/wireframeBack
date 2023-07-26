const axios = require("axios");
const fs = require('fs').promises;
const path = require("path");
const tokenPath = path.join(__dirname, "../../utils/crm/tokens.json")

axios.defaults.baseURL = "https://apeducation.kommo.com/";

const authRequest = {
  client_id: "d7412514-d863-4a1b-b396-92b243063b65",
  client_secret:
    "nWi0Cg6ffpzpAK65WuvtyJm2qp6sBfVusMm86pPTlcTQDWa9YUxmYqNOB0bBO57q",
  grant_type: "authorization_code",
  code: "def50200518c3f056262c0991b361e82424261c0ae349e5ccf9865cb26ebad20ee65dccdd67379ae04273f99e71f04901a822af613eab7d2d623aaade67e224cc319027913b655678f0517fb9b44a03621f9472eeb22007379b8a0a8611554d36e6538443343e3a36118394341625f5c5a1034c3b806de6d19ced1972ca90a08ce36626757ab9e8095169e9af98f3f2cc44c8b1859cc7e6a5c13e63b45e5f81bc936435886a5ae584f7e30369a58d7a2afb7ea10e3440dc1a703e5aff5289f91a5448e867c9fb9495774852b816b7731312587d5d3fc4161aa481f3b9c3645645a7b50074479d2f22c77645fdc36c2c087b39ef2d223e3d069bddecd69d85374ee8b028df6331bbe50806f1ab89a9e26e8e39448a358b064b674950bb688c024f0c3608064400a88951f4193e307019a1e38b602d380b4d225691c8ece8ba01da1d045d9f8af75f6bae7b7ce360ee645b402977282e39766ecc1980466fc66a07d267030c7cff2def2160f66060f020c71fc9ae678dcaab97ef0833835581261eab7bae6fc4ad89e09925a0c892a26a48b14c7e54d79b1289ffef4a851fc77db327468cf679e3c669f0adfd95a00fe7619dba7748811539c6ba50b66d6aa7e01bfb918c86ae30c0db04f897ddf37e0cd14140582d0c7572b9c11f35220f1463d560c8b8f63799282fee02e8d610090d478356e77e0a09ae1326a",
  redirect_uri: "https://paulhighrow.github.io/wireframe/",
};

const crmAuth = async (_, __, next) => {
  try {
    const authResp = await axios.post("oauth2/access_token", authRequest);
    console.log(authResp.data);
    await fs.writeFile(tokenPath, JSON.stringify(authResp.data), "utf-8")
    next();
  } catch (error) {
    console.log(error.response.data);
  }
  next();
};

module.exports = crmAuth;
