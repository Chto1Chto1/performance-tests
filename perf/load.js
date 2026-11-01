import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
  { duration: '1m', target: 50 },
  { duration: '3m', target: 50 },
  { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

const BASE_URL = 'https://test-api.k6.io';

export default function () {
  const list = http.get(`${BASE_URL}/public/crocodiles/`);
  check(list, { 'list status 200': (r) => r.status === 200 });
  sleep(1);

  const one = http.get(`${BASE_URL}/public/crocodiles/1/`);
  check(one, { 'one status 200': (r) => r.status === 200 });
  sleep(1);
}