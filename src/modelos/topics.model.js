const db = require('./database')

// OBTENER TODOS LOS TEMAS
function obtenerTodos() {
    return new Promise((resolve, reject) => {
        db.all(
            'SELECT * FROM temas ORDER BY votos DESC',
            [],
            (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
            }
        )
    })
}

// OBTENER POR ID
function obtenerPorId(id) {
    return new Promise((resolve, reject) => {
        db.get(
            'SELECT * FROM temas WHERE id = ?',
            [id],
            (err, row) => {
                if (err) reject(err)
                else resolve(row)
            }
        )
    })
}

// CREAR TEMA
function crearTema(titulo) {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT INTO temas (titulo) VALUES (?)',
            [titulo],
            function (err) {
                if (err) reject(err)
                else resolve({ id: this.lastID, titulo })
            }
        )
    })
}

// ACTUALIZAR TEMA
function actualizarTema(id, titulo) {
    return new Promise((resolve, reject) => {
        db.run(
            'UPDATE temas SET titulo = ? WHERE id = ?',
            [titulo, id],
            function (err) {
                if (err) reject(err)
                else resolve()
            }
        )
    })
}

// ELIMINAR TEMA
function eliminarTema(id) {
    return new Promise((resolve, reject) => {
        db.run(
            'DELETE FROM temas WHERE id = ?',
            [id],
            function (err) {
                if (err) reject(err)
                else resolve()
            }
        )
    })
}

// VOTAR TEMA
function votarTema(id) {
    return new Promise((resolve, reject) => {
        db.run(
            'UPDATE temas SET votos = votos + 1 WHERE id = ?',
            [id],
            function (err) {
                if (err) {
                    reject(err)
                } else {
                    db.get(
                        'SELECT votos FROM temas WHERE id = ?',
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
    obtenerTodos,
    obtenerPorId,
    crearTema,
    actualizarTema,
    eliminarTema,
    votarTema
}