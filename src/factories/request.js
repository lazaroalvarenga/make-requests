import { buildRequestBody } from '../utils/helpers';

export default async (uri, method, body = undefined, token = undefined) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    Authorization: `Bearer ${token || null}`,
  };

  let response = {};

  try {
    response = await fetch(uri, {
      method: method || 'GET',
      headers,
      body: buildRequestBody(body),
    });
    response = response.json();
  } catch (e) {
    return e;
  }

  return response;
};
