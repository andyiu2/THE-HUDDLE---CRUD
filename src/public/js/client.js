document.addEventListener('DOMContentLoaded', () => {
// VOTAR TEMA

document.querySelectorAll('.btn-votar-tema').forEach(boton => {
    boton.addEventListener('click', () => {
        const id = boton.dataset.id

        fetch(`/temas/${id}/votar`, { method: 'POST' })
            .then(res => res.json())
            .then(() => location.reload()) // recarga y el ORDER BY DESC del SQL ya los ordena
    })
})

// VOTAR ENLACE
document.querySelectorAll('.btn-votar-enlace').forEach(boton => {
    boton.addEventListener('click', () => {
        const id = boton.dataset.id

        fetch(`/enlace/${id}/votar`, { method: 'POST' })
            .then(res => res.json())
            .then(() => location.reload())
    })
})
    // ========================
    // ELIMINAR TEMA
    // ========================
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', async () => {
            const id = boton.dataset.id

            const respuesta = await fetch(`/eliminar/${id}`, { method: 'POST' })

            if (respuesta.ok) {
                document.getElementById(`tema-${id}`).remove()
            }
        })
    })

    // ========================
    // ELIMINAR ENLACE
    // ========================
    document.querySelectorAll('.btn-eliminar-enlace').forEach(boton => {
        boton.addEventListener('click', async () => {
            const id = boton.dataset.id

            const respuesta = await fetch(`/enlace/${id}/eliminar`, { method: 'POST' }) // FIX: ruta correcta
            if (respuesta.ok) {
                document.getElementById(`enlace-${id}`).remove()
            }
        })
    })

    // ========================
    // AGREGAR ENLACE
    // ========================
    document.querySelectorAll('.form-enlace').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault()
            const temaId = form.dataset.id
            const url = form.querySelector('input[name="url"]').value

            const respuesta = await fetch(`/temas/${temaId}/enlaces`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            })

            if (respuesta.ok) {
                location.reload()
            }
        })
    })

})

// ========================
// EDITAR TEMA
// ========================
document.addEventListener('click', (e) => {

    // Mostrar modo edición
    if (e.target.classList.contains('btn-editar')) {
        const id = e.target.dataset.id
        const card = document.getElementById(`tema-${id}`)

        card.querySelector('.modo-vista').style.display = 'none'
        card.querySelector('.modo-edicion').style.display = 'block'
    }

    // Cancelar edición
    if (e.target.classList.contains('cancelar-edicion')) {
        const id = e.target.dataset.id
        const card = document.getElementById(`tema-${id}`)

        card.querySelector('.modo-vista').style.display = 'block'
        card.querySelector('.modo-edicion').style.display = 'none'
    }

    // Guardar edición
    if (e.target.classList.contains('guardar-edicion')) {
        const id = e.target.dataset.id
        const card = document.getElementById(`tema-${id}`)
        const titulo = card.querySelector('.input-titulo').value

        fetch(`/editar/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo })
        })
        .then(() => location.reload())
    }

})