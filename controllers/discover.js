/* eslint-disable no-async-promise-executor */
const User = require('../models/Users')

exports.users = async (req, res) => {
	const thisUser = req.user
	let users = await findUsers(thisUser)
	console.log(users)
	res.render('discover',{
		user:req.user,
		users: users
	})
}
exports.vote = async (req, res, next) => {
	const id = req.params.id
	const user = req.user.id

	let vote = req.body.vote
	try {
		if (vote == 'like') {
			await like(user, id)
		}
		if (vote == 'dislike') {
			await dislike(user, id)
		}
		res.redirect('/discover')
	} catch (err) {
		next(err)
	}
}

let findUsers = (thisUser) => {
	let object = {}
	let ids = [].concat(thisUser._id, thisUser.likes, thisUser.dislikes)
	object._id = {
		$nin: ids
	}
	return new Promise((resolve, reject) => {
		try {
			let users = User.find(object)
			resolve(users)
		} catch (err) {
			reject(err)
		}
	})
}

let like = (userID, voteID) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await User.findById(userID)
			const checkDup = user.likes.includes(voteID)
			if (!checkDup) {
				user.likes.push(voteID)
				await user.save()
			}
			resolve('has resolved')
		} catch (err) {
			reject(err)
		}
	})
}

let dislike = (userID, voteID) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await User.findById(userID)
			const checkDup = user.dislikes.includes(voteID)
			if (!checkDup) {
				user.dislikes.push(voteID)
				await user.save()
			}
			resolve('has resolved')
		} catch (err) {
			reject(err)
		}
	})
}
