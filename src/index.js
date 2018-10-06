import "isomorphic-fetch";
import "babel-polyfill";
import makeRequest from './factories/request';

export default async (requestParams) => {
  let response = {};
  try {
    response = await makeRequest(requestParams);
  } catch (e) {
    response.error = e;
  }
  return response;
};

// export default request;
