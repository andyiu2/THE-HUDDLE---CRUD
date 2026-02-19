const express = require('express')
const router = express.Router()
const topicscontroller = require('../controladores/topics.controller')

router.get('/', topicscontroller.mostrarTemas)
router.get('/crear', topicscontroller.mostrarFormularioCrear)
router.post('/crear', topicscontroller.crearTema)

router.get('/editar/:id', topicscontroller.mostrarFormularioEditar)
router.post('/editar/:id', topicscontroller.actualizarTema)

router.post('/eliminar/:id', topicscontroller.eliminarTema)
router.post('/votar/:id', topicscontroller.votarTema)

module.exports = router
