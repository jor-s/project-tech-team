const express = require('express');
const port = 3000;

const app = express();

app
  .set('views', 'views');
  .get('/', (req, res) => {res.send('Hello world')})
  .listen(port, () => console.log('Listening on port ' + port))
