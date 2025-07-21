const { uploadFile, getImages } = require('../Controller/user.controller')
const express = require('express')
const router = express.Router()

router.post('/upload', uploadFile)
router.get('/images', getImages) 

module.exports = router