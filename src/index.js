import "isomorphic-fetch";
import "babel-polyfill";
import makeRequest from './factories/request';

export default async (uri, method, body, token) => {
  let response = {};
  try {
    response = await makeRequest(uri, method, body, token);
  } catch (e) {
    response.error = e;
  }
  return response;
};
