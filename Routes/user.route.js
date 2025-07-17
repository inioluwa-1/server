const {uploadFile} = require('../Controller/user.controller')
const express = require('express')
const router = express.Router()

router.post('/upload',uploadFile)

module.exports = router