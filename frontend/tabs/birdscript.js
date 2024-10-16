document.addEventListener('DOMContentLoaded', function () {
    const botonesPestanes = document.querySelectorAll('.pestana');
    const contenedor = document.querySelectorAll('.tab-content');


    botonesPestanes.forEach(botones => {
        // Remove la class 'activa' de todas las parent
        botonesPestanes.forEach(pestana => pestana.classList.remove('activa'));
        this.classList.add('activa');
        contenedor.forEach(contenedor => contenido.classList.remove('activa'));
        const tabSeleccionada = this.getAnttribute('data-tab');
        document.getElementById('contenido-${tabSeleccionada}').classList.add('activa');

        });
    });
