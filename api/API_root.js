import http from 'k6/http';
import { token, url_, url_2} from './env.js';

export function API_root() {
  const url = '' + url_;

  const params = {
    headers: {
      'Cookie': token,
    },
  };

  const response = http.get(url, params);
  //console.log('Response body:', response.body);
  return response;
}
