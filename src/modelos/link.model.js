const db = require('./database')

// CREAR ENLACE
function crearEnlace(url, temaId) {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO enlaces (url, tema_id) VALUES (?, ?)`,
            [url, temaId],
            function (err) {
                if (err) reject(err)
                else resolve({ url, temaId })
            }
        )
    })
}

// OBTENER ENLACES POR TEMA (ordenados por votos)
function obtenerEnlacesPorTema(temaId) {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT * FROM enlaces WHERE tema_id = ? ORDER BY votos_enlace DESC',
            [temaId],
            (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
            }
        )
    })
}

// ELIMINAR ENLACE
function eliminarEnlace(id) {
    return new Promise((resolve, reject) => {
        db.run(
            'DELETE FROM enlaces WHERE id = ?',
            [id],
            function (err) {
                if (err) reject(err)
                else resolve()
            }
        )
    })
}

// VOTAR ENLACE
function votarEnlace(id) {
    return new Promise((resolve, reject) => {
        db.run(
            'UPDATE enlaces SET votos_enlace = votos_enlace + 1 WHERE id = ?', // FIX: typo votos_enlaces → votos_enlace
            [id],
            function (err) {
                if (err) reject(err)
                else {
                    db.get(
                        'SELECT votos_enlace FROM enlaces WHERE id = ?', // FIX: consistente con columna
                        [id],
                        (err2, row) => {
                            if (err2) reject(err2)
                            else resolve(row)
                        }
                    )
                }
            }
        )
    })
}

module.exports = {
    crearEnlace,
    obtenerEnlacesPorTema,
    eliminarEnlace,
    votarEnlace
}