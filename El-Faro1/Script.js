document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a los botones de "Enviar"
    var enviarNoticiaBtn = document.getElementById('enviarNoticiaBtn');
    var enviarContactoBtn = document.getElementById('enviarContactoBtn');

    // Asignar eventos de clic a los botones
    enviarNoticiaBtn.addEventListener('click', function() {
        // Cierra el modal de "Enviar Noticia"
        var enviarNoticiaModal = new bootstrap.Modal(document.getElementById('enviarNoticiaModal'));
        enviarNoticiaModal.hide();

        // Mostrar alerta después de cerrar el modal
        alert('Su noticia fue enviada exitosamente');

        // Deshabilitar el fondo opaco que se activa al mostrar el modal
        var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
        modalBackdrop.remove();
    });

    enviarContactoBtn.addEventListener('click', function() {
        // Cierra el modal de "Contacto"
        var contactoModal = new bootstrap.Modal(document.getElementById('contactoModal'));
        contactoModal.hide();

        // Mostrar alerta después de cerrar el modal
        alert('Su mensaje fue enviado exitosamente');

        // Deshabilitar el fondo opaco que se activa al mostrar el modal
        var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
        modalBackdrop.remove();
    });
});






const $tiempo = document.querySelector('.tiempo');
const $fecha = document.querySelector('.fecha');

// Función para el reloj digital
function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${dia}-${mes}-${anio} ${showSemana}`
}
setInterval(() => {
    digitalClock()
}, 1000);
