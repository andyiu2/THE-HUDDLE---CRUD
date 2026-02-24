const express = require('express')
const router = express.Router()
const topicscontroller = require('../controladores/topics.controller')
const linkcontroller = require('../controladores/link.controller')

// endpoints y conexion con topicscontroller
router.get('/', topicscontroller.mostrarTemas)
router.get('/crear', topicscontroller.mostrarFormularioCrear)
router.post('/crear', topicscontroller.crearTema)
router.post('/editar/:id', topicscontroller.actualizarTema)
router.post('/eliminar/:id', topicscontroller.eliminarTema)
router.post('/temas/:id/votar', topicscontroller.votarTema)
 

// endpoints para enlaces y conexion con linkscontroller
router.post('/temas/:id/enlaces', linkcontroller.crearLink)
router.post('/enlace/:id/votar', linkcontroller.votarEnl)
router.post('/enlace/:id/eliminar', linkcontroller.eliminarEnl)


module.exports = router
