import http from 'k6/http';

export function Login() {
  const url = 'https://sso.thunderinsure.com/realms/thunder-insure/protocol/openid-connect/token';
  const payload = {
    client_id: 'laravel-api',
    username: 'SV013',
    password: '8888',
    grant_type: 'password',
    scope: 'openid profile email',
    client_secret: '2ceuJyxkl1DmoEeCQa/Y0tR8UrDRAVIxLWOPio9W',
  };
  const params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  const response = http.post(url, payload, params);
  //console.log('Response body:', response.body);
  return response;
}