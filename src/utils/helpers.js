export const formatQueryString = (key, value) => `${key}=${value}`;

export const buildQueryParams = params => Object.keys(params).map(k => formatQueryString(k, params[k])).join('&');

export const buildURL = (endpoint, params) => {
  if (params) {
    return `${endpoint}?${buildQueryParams(params)}`;
  }
  return endpoint;
};

export const buildRequestBody = (body) => {
  const parsedBody = body
    ? `data: ${JSON.stringify(body)}`
    : null;
  return parsedBody;
};
