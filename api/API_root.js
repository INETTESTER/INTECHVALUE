import http from 'k6/http';
import { token } from './env.js';

export function API_root() {
  const url = 'https://api.thunderinsure.com/';

  const params = {
    headers: {
      'Cookie': token,
    },
  };

  const response = http.get(url, params);
  //console.log('Response body:', response.body);
  return response;
}
