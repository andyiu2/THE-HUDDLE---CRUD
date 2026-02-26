const temaModel = require('../modelos/topics.model')
const enlaceModel = require('../modelos/link.model')

// ========================
// MOSTRAR TODOS
async function mostrarTemas(req, res) {
    try {
        const temas = await temaModel.obtenerTodos()
        // Para cada tema, obtener sus enlaces ordenados por votos
        for (const tema of temas) {
            tema.enlaces = await enlaceModel.obtenerEnlacesPorTema(tema.id)
        }
        res.render('index', { temas })
    } catch (err) {
        console.error(err)
        res.status(500).send('Error al obtener temas')
    }
}

// FORM CREAR
function mostrarFormularioCrear(req, res) {
    res.render('crear')
}

// CREAR
async function crearTema(req, res) {
    try {
        const { titulo } = req.body
        await temaModel.crearTema(titulo)
        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.status(500).send('Error al crear tema')
    }
}

// EDITAR
async function actualizarTema(req, res) {
    try {
        const { titulo } = req.body
        await temaModel.actualizarTema(req.params.id, titulo)
        res.json({ success: true })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false })
    }
}

// ELIMINAR
async function eliminarTema(req, res) {
    try {
        await temaModel.eliminarTema(req.params.id)
        res.json({ ok: true })
    } catch (err) {
        console.error(err)
        res.status(500).json({ ok: false })
    }
}

// VOTAR TEMA
async function votarTema(req, res) {
    try {
        const resultado = await temaModel.votarTema(req.params.id) // FIX: era temaModel.votar
        res.json({ votos: resultado.votos })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false })
    }
}

module.exports = {
    mostrarTemas,
    mostrarFormularioCrear,
    crearTema,
    actualizarTema,
    eliminarTema,
    votarTema
}