import http from 'k6/http';
import { token } from './env.js';

export function Areas_per500() {
  const url = 'https://api.thunderinsure.com/api/v1/area/dataAreas?per_page=500&page=1';

  const params = {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = http.get(url, params);

  console.log('Response body:', response.body);
  return response;
}
