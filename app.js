const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const router = require('./routes/index.js')

const app = express()

express()
  .use('/public', express.static('static'))
  .use(bodyParser.urlencoded({extended: true}))
  .use('/', router)
  .set('view engine', 'ejs')
  .set('views', 'views')
  .listen(port, () => console.log('Listening on port ' + port))
