const boton = document.querySelector('#modo-oscuro');

const actualizarModo = (modoOscuro) => {
    document.body.classList.toggle('modo-oscuro', modoOscuro);
    boton.textContent = modoOscuro ? '☀️' : '🌙';
    boton.setAttribute('aria-label', modoOscuro ? 'Desactivar modo oscuro' : 'Activar modo oscuro');
    boton.setAttribute('aria-pressed', String(modoOscuro));
};

const modoGuardado = localStorage.getItem('modo-oscuro') === 'true';
actualizarModo(modoGuardado);

boton.addEventListener('click', () => {
    const modoOscuro = !document.body.classList.contains('modo-oscuro');
    actualizarModo(modoOscuro);
    localStorage.setItem('modo-oscuro', String(modoOscuro));
});

