import http from 'k6/http';
import { token, url_, url_2 } from './env.js';

export function Sub_District() {
  const url = url_ + '/api/v1/subDistricts/getSubDistrictsByDistrictId?districtId=230';

  const params = {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = http.get(url, params);

  //console.log('Response body:', response.body);
  return response;
}
