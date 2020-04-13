const express = require('express')
const router = express.Router()

const discover = require('../controllers/discover')

router.get('/', discover.users)
router.post('/vote/:id', discover.vote)

module.exports = router
