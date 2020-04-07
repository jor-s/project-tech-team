const express = require('express');
const router = express.Router();

const recs = require('../controllers/discover');

router.get('/', recs.users);
router.post('/vote/:id', recs.vote);

module.exports = router;
