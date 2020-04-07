const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')

const imageController = require('../config/multer')

router.get('/', profileController.profile)
router.get('/edit', profileController.goToEdit)
router.post('/edit', imageController.upload.single('picture'), profileController.doEdit)

module.exports = router
