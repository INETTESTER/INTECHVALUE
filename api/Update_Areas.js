import http from 'k6/http';
import { token } from './env.js';
import { SharedArray } from 'k6/data';
const data = new SharedArray('land_no', function () {
  const json = JSON.parse(open('../file/areas.json'));
  return json.data.map(item => item.land_no);
});
const data2 = new SharedArray('id', function () {
  const json = JSON.parse(open('../file/areas.json'));
  return json.data.map(item => item.id);
});

export function Update_Areas(scenario) {
  const land_no = data[scenario.iterationInTest];
  const id = data2[scenario.iterationInTest];
  // console.log(land_no);
  // console.log(id);
  const url = 'https://api.thunderinsure.com/api/v1/areas/' + id;

  const payload = JSON.stringify({
    land_no: '' + land_no,
    approveSts: 2,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = http.put(url, payload, params);

  console.log('Response body:', response.body);
  return response;
}
