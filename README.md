# 📚 THE HUDDLE — Challenge 7: CRUD App

Aplicación web de temas de aprendizaje con sistema de votaciones, construida con Node.js, Express y SQLite.

---

## 🚀 Demo

Los usuarios pueden crear temas de aprendizaje, agregarles enlaces, votar por los que más les gustan y eliminar o editar los existentes. El contenido se reordena automáticamente según los votos.

---

## 🛠️ Tecnologías

- **Node.js** — entorno de ejecución
- **Express** — servidor y manejo de rutas
- **SQLite3** — base de datos
- **EJS** — motor de plantillas
- **JavaScript puro** — interacciones del lado del cliente

---

## 📁 Estructura del proyecto

```
src/
├── controladores/
│   ├── topics.controller.js
│   └── link.controller.js
├── modelos/
│   ├── topics.model.js
│   ├── link.model.js
│   └── database.js
├── rutas/
│   └── topics.routes.js
├── views/
│   ├── index.ejs
│   └── crear.ejs
└── public/
    ├── css/
    │   └── styles.css
    └── js/
        └── client.js
app.js
```

---

## ⚙️ Instalación

1. Clonar el repositorio
```bash
git clone <url-del-repo>
cd THE-HUDDLE---CRUD
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar el servidor
```bash
node app.js
```

4. Abrir en el navegador
```
http://localhost:3000
```

---

## ✅ Funcionalidades

- **Temas:** crear, editar, eliminar y votar
- **Enlaces:** agregar, eliminar y votar dentro de cada tema
- **Votaciones:** el contenido se reordena automáticamente por cantidad de votos
- **Tiempo real:** los cambios se reflejan sin necesidad de recargar manualmente
- **Arquitectura MVC** separando modelos, vistas y controladores

---

## 📐 Arquitectura

La app sigue el patrón **MVC**:

- **Modelo** — gestiona los datos en SQLite (`topics.model.js`, `link.model.js`)
- **Vista** — plantillas EJS que renderizan el HTML (`index.ejs`, `crear.ejs`)
- **Controlador** — recibe las requests, llama al modelo y responde con la vista adecuada

---

## 🗄️ Base de datos

Dos tablas en SQLite:

```sql
temas (id, titulo, votos)
enlaces (id, url, votos_enlace, tema_id → FK temas)
```

Los enlaces se eliminan en cascada si se elimina su tema.
