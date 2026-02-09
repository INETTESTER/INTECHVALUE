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
  if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
    console.log("ดาวน์โหลดข้อมูลแปลง Fail : " + response.status);
  }

  //console.log('Response body:', response.body);
  return response;
}
