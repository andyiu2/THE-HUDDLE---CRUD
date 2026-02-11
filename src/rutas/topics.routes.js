const express = require('express')
const router = express.Router()
const topicsController = require('../controladores/topics.controller')

router.get('/', topicsController.home)
router.post('/topic', topicsController.agregar) 


module.exports = router