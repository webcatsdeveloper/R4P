const https = require('https');

https.get('https://right4p.myshopify.com/admin/api/2026-04/graphql.json', (res) => {
  console.log('Status Code:', res.statusCode);
}).on('error', (err) => {
  console.error('Error:', err.message);
});
