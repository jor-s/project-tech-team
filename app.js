const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()

express()
  .use('/public', express.static('static'))
  .use(bodyParser.urlencoded({extended: true}))
  .set('view engine', 'ejs')
  .set('views', 'views')
  .get('/', index)
  .listen(port, () => console.log('Listening on port ' + port))





function index (req, res) {
  res.send('Hello world')
}

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/index', (req, res) => {
  res.render('index.ejs');
})

app.get('/about', (req, res) => {
  res.render('about.ejs');
})


