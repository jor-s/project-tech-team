const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

express()
  .use(express.static('static'));
  .use(bodyParser.urlencoded({extended: true}));
  .set('view engine', 'ejs');
  .set('views', 'views');
  .get('/', index);
  .listen(port, () => console.log('Listening on port ' + port))


function index (req, res) {
  res.send('Hello world');
}
