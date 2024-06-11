function muestra_oculta(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display == 'none') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
}
function ValidarSentimientos (res) {
    let mensaje = document.getElementById('mjs')
    if (res) {
        mensaje.style.display = 'none'
    } else {
        mensaje.style.display = 'block'
    }
}