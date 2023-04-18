const router = require('express').Router();
const { handleURL } = require('../controllers/url');
 
router.post('/', handleURL);

module.exports = router;