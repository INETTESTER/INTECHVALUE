import http from 'k6/http';
import { token, url_, url_2 } from './env.js';

export function GetCoordinatesByZoneId() {
  const url = url_ + '/api/v1/area/getCoordinatesByZoneId?zone_id=1&production_year_id=9';

  const params = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  const response = http.get(url, params);

  //console.log('Response body:', response.body);
  return response;
}
