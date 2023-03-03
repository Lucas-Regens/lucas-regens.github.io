// Twitter, facebook e instagram son a modo de ejemplo
document.getElementById('boton_fotos').onclick = function() {
    var imagen = document.getElementById('fotografia');
    imagen.src = 'Imagenes\fotor_2023-3-1_6_42_43.png';
}
document.getElementById('boton_facebook').onclick = function() {
    window.open('https://www.facebook.com/profile.php?id=100066728112915');
}
document.getElementById('boton_instagram').onclick = function() {
    window.open('https://www.instagram.com/bakeryshopshop/?hl=es');
}
document.getElementById('boton_twitter').onclick = function() {
    Awindow.open('https://twitter.com/mdgchocolates?lang=es');
}
document.getElementById('boton_contactos').onclick = function() {
    alert("¡Aún no tengo contactos! Lo siento");
}