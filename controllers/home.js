module.exports = (req, res) => {
  console.log(req.session)
  res.render('index', {
    user: req.user
  })
}