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
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const mensajeInput = document.querySelector('#mensaje');
    const mensajeEstado = document.querySelector('#form-mensaje');

    const mostrarEstadoFormulario = (texto, tipo) => {
        if (!mensajeEstado) {
            return;
        }

        mensajeEstado.textContent = texto;
        mensajeEstado.classList.toggle('error', tipo === 'error');
        mensajeEstado.classList.toggle('exito', tipo === 'exito');
    };

    formulario.addEventListener('invalid', () => {
        mostrarEstadoFormulario('Falta información o el correo electrónico no tiene un formato válido. Revisa los campos marcados.', 'error');
    }, true);

    formulario.addEventListener('input', () => {
        mostrarEstadoFormulario('', '');
    });

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!nombreInput || !emailInput || !mensajeInput) {
            mostrarEstadoFormulario('No se ha podido comprobar el formulario. Inténtalo de nuevo más tarde.', 'error');
            return;
        }

        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        if (!nombre || !email || !mensaje) {
            mostrarEstadoFormulario('Falta información por rellenar. Completa todos los campos.', 'error');
            return;
        }

        if (!emailInput.validity.valid) {
            mostrarEstadoFormulario('Introduce una dirección de correo electrónico válida.', 'error');
            emailInput.focus();
            return;
        }

        console.log(`Nombre ingresado: ${nombre}`);
        console.log('Email ingresado:', email);
        console.log('Mensaje ingresado:', mensaje);
        mostrarEstadoFormulario('¡Mensaje enviado correctamente! Gracias por contactar.', 'exito');
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
