const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
	name: String,
	email: String,
	age: Number,
	password: String,
	date: String,
	preferences: String,
	hobby: Array,
	picture: String,
	pickupline: String,
	likes: {
		type: [Schema.Types.ObjectId],
		ref: 'User',
		autopopulate: true
	},
	dislikes: {
		type: [Schema.Types.ObjectId],
		ref: 'User',
		autopopulate: true
	}
})
UserSchema.plugin(require('mongoose-autopopulate'));
//http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
//https://stackoverflow.com/questions/12577263/how-to-use-methods-on-schema-in-mongoose-express
//https://gist.github.com/AndrewHenderson/4315493

UserSchema.methods.comparePassword = function (password) {
	return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', UserSchema)



module.exports = User