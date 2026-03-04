import http from 'k6/http';

export function Login() {
  const url = 'https://sso.thunderinsure.com/realms/thunder-insure/protocol/openid-connect/token';
  const payload = {
    client_id: 'laravel-api',
    username: 'SV013',
    password: 'Changeme1!',
    grant_type: 'password',
    scope: 'openid profile email',
    client_secret: 'h6EHTplFqEc3KRukQzh7quihBefUSMQS',
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