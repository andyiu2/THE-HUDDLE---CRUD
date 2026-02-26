const modeloEnlace = require('../modelos/link.model')

// CREAR ENLACE
async function crearLink(req, res) {
    try {
        const temaId = req.params.id
        const { url } = req.body
        await modeloEnlace.crearEnlace(url, temaId)
        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false })
    }
}

// VOTAR ENLACE
async function votarEnl(req, res) {
    try {
        const resultado = await modeloEnlace.votarEnlace(req.params.id) // FIX: era actualizarEnlace
        res.json({ votos: resultado.votos_enlace })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false })
    }
}

// ELIMINAR ENLACE
async function eliminarEnl(req, res) {
    try {
        await modeloEnlace.eliminarEnlace(req.params.id) // FIX: era req.param (sin s)
        res.json({ success: true })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false })
    }
}

module.exports = {
    crearLink,
    votarEnl,
    eliminarEnl
}