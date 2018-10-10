const request = require("../lib");

const post = async () => {
  let response = {};
  try {
    response = await request("http://atena-network.herokuapp.com/ranking?format=json", "POST");
  } catch (e) {
    response.error = e;
  }
  return response;
};

post();
