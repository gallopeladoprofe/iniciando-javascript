document.addEventListener("DOMContentLoaded", function(){
    //zona segura
    reproducirAudio();
});


function reproducirAudio() {
    // Hay que permitir en google chrome la reproduccion de audio
    // en el candadito
    const audio = document.getElementById("miAudio");
    audio.loop = true;
    audio.autoplay = true;
    audio.load();
    audio.play();
}


