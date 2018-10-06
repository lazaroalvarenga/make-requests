const makeRequest = require('./lib').default;

exports.default = async function (reqParams) {
  var response = {};

  try {
    response = await makeRequest(reqParams);
  } catch (e) {
    response.error = e;
  }

  return response;
};
