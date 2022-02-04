const app = require('./server');
var proxy = require('express-http-proxy');

app.use('/graphql', proxy('http://localhost:4000/'));

app.listen(4000, () => {
  console.log('Listening');
});
