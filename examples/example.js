const request = require("../lib");

const sample = async () => {
  let response = {};
  try {
    response = await request("http://atena-network.herokuapp.com/ranking?format=json");
  } catch (e) {
    response.error = e;
  }
  return response;
};

sample();
