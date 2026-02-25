import http from 'k6/http';
import { token, url_, url_2 } from './env.js';

export function Village() {
  const url = url_ + '/api/v1/villages/getVillageBySubDistrictId?subDistrictId=1726';

  const params = {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = http.get(url, params);

  //console.log('Response body:', response.body);
  return response;
}
