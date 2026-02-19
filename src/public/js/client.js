const API_URL = 'http://localhost:3000'

console.log("JS cargado")


document.addEventListener('DOMContentLoaded', () => {



    // ========================
    // VOTAR
    // ========================
    document.querySelectorAll('.btn-votar').forEach(boton => {
        boton.addEventListener('click', async () => {

            const id = boton.dataset.id

            const respuesta = await fetch(`/votar/${id}`, {
                method: 'POST'
            })

            const data = await respuesta.json()

            document.getElementById(`votos-${id}`).textContent = data.votos
        })
    })


    // ========================
    // ELIMINAR
    // ========================
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', async () => {

            const id = boton.dataset.id

            const respuesta = await fetch(`/eliminar/${id}`, {
                method: 'POST'
            })

            if (respuesta.ok) {
                document.getElementById(`tema-${id}`).remove()
            }
        })
    })

})


    // ========================
    // EDITAR
    // ========================

    document.addEventListener('click', (e) => {

        // Mostrar modo edición
        if (e.target.classList.contains('btn-editar')) {

            const id = e.target.dataset.id
            const card = document.getElementById(`tema-${id}`)

            card.querySelector('.modo-vista').style.display = 'none'
            card.querySelector('.modo-edicion').style.display = 'block'
        }

        // Guardar edición
        if (e.target.classList.contains('guardar-edicion')) {

            const id = e.target.dataset.id
            const card = document.getElementById(`tema-${id}`)

            const titulo = card.querySelector('.input-titulo').value
            const enlace = card.querySelector('.input-enlace').value

            fetch(`/editar/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo, enlace })
            })
            .then(() => location.reload())
        }

    })

