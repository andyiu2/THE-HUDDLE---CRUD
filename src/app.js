const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const topicsRoutes = require('./rutas/topics.routes')

app.use(express.json())


// configurar ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'vistas'))

// configurar carpeta publica
app.use(express.static(path.join(__dirname, 'public')))


app.use(express.urlencoded({extended: true}))

app.use('/', topicsRoutes)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})