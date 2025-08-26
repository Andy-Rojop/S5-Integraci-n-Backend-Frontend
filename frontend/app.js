document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    // Elimina mensaje previo si existe
    let msg = document.getElementById("msg");
    if (!msg) {
        msg = document.createElement("div");
        msg.id = "msg";
        document.getElementById("form").appendChild(msg);
    }
    msg.textContent = "";
    msg.style.color = "black";

    try {
        const res = await fetch("/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (res.ok) {
            msg.textContent = result.message || "Enviado correctamente";
            msg.style.color = "green";
            document.getElementById("form").reset();
            cargarListado();
        } else {
            msg.textContent = result.error || "Error al enviar";
            msg.style.color = "red";
        }
    } catch (err) {
        msg.textContent = "Error de conexión con el servidor";
        msg.style.color = "red";
    }
});

async function cargarListado() {
    try {
        const res = await fetch("/form");
        const data = await res.json();
        const listado = document.getElementById("listado");
        listado.innerHTML = "";
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `Nombre: ${item.nombre} Correo: ${item.email} Mensaje: ${item.message}`;
            listado.appendChild(li);
        });
    } catch (err) {
        // Opcional: mostrar error en el listado
    }
}

// Cargar listado al iniciar
window.addEventListener("DOMContentLoaded", cargarListado);