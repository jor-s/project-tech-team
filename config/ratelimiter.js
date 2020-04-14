const rateLimit = require('express-rate-limit')
// app.set('trust proxy', 1) Use this when you are going to deploy it on Heroku

exports.loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 20,
	message:'you tried logging in too many times, now you will have to wait 15 minutes',
	skipsuccessfulRequests: true
} ,console.log('SANITY CHECK FOR RATE LIMITER PLS DO IT'))
