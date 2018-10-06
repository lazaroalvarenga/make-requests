import 'isomorphic-fetch';
import makeRequest from './factories/request';

const request = async (requestParams) => {
  let response = {};
  try {
    response = await makeRequest(requestParams);
  } catch (e) {
    response.error = e;
  }
  return response;
};

export default request;
