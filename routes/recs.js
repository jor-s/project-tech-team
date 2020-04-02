const express = require('express');
const router = express.Router();

const recs = require('../controllers/recs');

router.get('/', recs.users);
router.post('/vote/:id', recs.vote);

module.exports = router;
