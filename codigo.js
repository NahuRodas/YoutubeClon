/* console.clear();

var video = [document.getElementsByClassName('videos')];

video.forEach(e => {
    console.log(e.atributes);
});

 // Funcion que genera un codigo de video aleatorio
function generador() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        codigoVideo = ""; 

    for (let i = 0; i < 11; i++) {
        var numeroRandom = Math.floor(Math.random() * chars.length);
        codigoVideo += chars.substring(numeroRandom, numeroRandom + 1);
    }
    return "https://www.youtube.com/watch?v=" + codigoVideo;
}
 */

var sidebar = document.getElementById('sidebar'),
    menuBtn = document.getElementById('drop-button'),
    videosGrid = document.getElementById('videos-grid');


menuBtn.addEventListener('click', ()=>{

    if(sidebar.style.width != "0px"){
        sidebar.style.width="0px";
        videosGrid.style.left = "0";
        videosGrid.style.paddingRight = "2%";
        videosGrid.style.gridTemplateColumns = "repeat(5,1fr)"
    }
    else if (sidebar.style.width != "256px") {
        sidebar.style.width="256px";
        videosGrid.style.left = "250px";
        videosGrid.style.paddingRight = "15%";
        videosGrid.style.gridTemplateColumns = "repeat(4,1fr)"
    }

});

