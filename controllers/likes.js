exports.likes = (req, res) => {
	res.render('likes', {
		user: req.user,
	})
}