import http from 'k6/http';
import { token, url_, url_2} from './env.js';

export function ApproveSts() {
  const url = url_ + '/api/v1/approveSts';

  const params = {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  };

  const response = http.get(url, params);

  //console.log('Response body:', response.body);
  return response;
}
