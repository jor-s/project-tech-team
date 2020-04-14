const express = require('express')
const router = express.Router()

const requiresLogin = require('../config/middleware/requiresLogin')

router.use('/profile', requiresLogin, require('./profile'))
router.use('/discover', requiresLogin, require('./discover'))

router.use(require('./home'))
module.exports = router
