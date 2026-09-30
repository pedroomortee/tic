const boton = document.querySelector('#modo-oscuro');

const actualizarModo = (modoOscuro) => {
    document.body.classList.toggle('modo-oscuro', modoOscuro);
    if (!boton) {
        return;
    }

    boton.textContent = modoOscuro ? '☀️' : '🌙';
    boton.setAttribute('aria-label', modoOscuro ? 'Desactivar modo oscuro' : 'Activar modo oscuro');
    boton.setAttribute('aria-pressed', String(modoOscuro));
};

const modoGuardado = localStorage.getItem('modo-oscuro') === 'true';
actualizarModo(modoGuardado);

if (boton) {
    boton.addEventListener('click', () => {
        const modoOscuro = !document.body.classList.contains('modo-oscuro');
        actualizarModo(modoOscuro);
        localStorage.setItem('modo-oscuro', String(modoOscuro));
    });
}

const formulario = document.querySelector('#form-contacto');

if (formulario) {
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.querySelector('#nombre').value.trim();
        console.log(`Nombre ingresado: ${nombre}`);
        console.log('Email ingresado:', document.querySelector('#email').value.trim());
        console.log('Mensaje ingresado:', document.querySelector('#mensaje').value.trim());

    });
}

const enlaceCerrar = document.querySelector('.cerrar-enlace');
const marcoVentana = document.querySelector('.marco-ventana');

if (enlaceCerrar && marcoVentana) {
    enlaceCerrar.addEventListener('click', (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        event.preventDefault();

        if (marcoVentana.classList.contains('cerrando')) {
            return;
        }

        marcoVentana.classList.add('cerrando');
        enlaceCerrar.setAttribute('aria-disabled', 'true');
        window.setTimeout(() => {
            window.location.assign(enlaceCerrar.href);
        }, 220);
    });
}
