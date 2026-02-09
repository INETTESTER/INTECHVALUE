import http from 'k6/http';
import { token } from './env.js';

export function Area_Detail() {
  const url = 'https://api.thunderinsure.com/api/v1/areas/1';

  const params = {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = http.get(url, params);

  //console.log('Response body:', response.body);
  return response;
}
