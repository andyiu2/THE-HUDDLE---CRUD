const temaModel = require('../modelos/topics.model')

async function mostrarTemas(req, res) {
    const temas = temaModel.obtenerTodos()
    res.render('index', { temas })
}

function mostrarFormularioCrear(req, res) {
    res.render('crear')
}

function crearTema(req, res) {
    const { titulo, enlace } = req.body
    temaModel.crear(titulo, enlace)
    res.redirect('/')
}

function mostrarFormularioEditar(req, res) {
    const tema = temaModel.obtenerPorId(req.params.id)
    res.render('editar', { tema })
}

function actualizarTema(req, res) {
    const { titulo, enlace } = req.body
    temaModel.actualizar(req.params.id, titulo, enlace)
    res.json({ success: true })

}

function eliminarTema(req, res) {
    temaModel.eliminar(req.params.id)
    res.json({ ok: true })
}

function votarTema(req, res) {
    const temaActualizado = temaModel.votar(req.params.id)
    res.json({ votos: temaActualizado.votos })
}

module.exports = {
    mostrarTemas,
    mostrarFormularioCrear,
    crearTema,
    mostrarFormularioEditar,
    actualizarTema,
    eliminarTema,
    votarTema
}
