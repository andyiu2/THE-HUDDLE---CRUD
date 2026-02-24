const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.join(__dirname, 'temas.db')

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err)
    } else {
        console.log('Conectado a SQLite')
    }
})

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS temas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            votos INTEGER DEFAULT 0
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS enlaces (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL,
        votos_enlace INTEGER DEFAULT 0,
        tema_id INTEGER,
        FOREIGN KEY (tema_id) REFERENCES temas(id) ON DELETE CASCADE
        )
    `);
})

module.exports = db
