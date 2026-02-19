let temas = []
let idActual = 1

function obtenerTodos() {
    return temas.sort((a, b) => b.votos - a.votos)
}

function obtenerPorId(id) {
    return temas.find(t => t.id == id)
}

function crear(titulo, enlace) {
    const nuevo = {
        id: idActual++,
        titulo,
        enlace,
        votos: 0
    }
    temas.push(nuevo)
    return nuevo
}

function actualizar(id, titulo, enlace) {
    const tema = obtenerPorId(id)
    if (!tema) return null
    tema.titulo = titulo
    tema.enlace = enlace
    return tema
}

function eliminar(id) {
    temas = temas.filter(t => t.id != id)
}

function votar(id) {
    const tema = obtenerPorId(id)
    if (!tema) return null
    tema.votos++
    return tema
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
    votar
}
