const express = require('express')
const router = express.Router()

//Handlers from controllers
const {getListMusic} = require('../controllers/MusicController');

router.get('/getListMusic', getListMusic);

module.exports = router