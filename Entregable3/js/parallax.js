document.addEventListener('DOMContentLoaded', () =>{
    let background = document.getElementById("bg-parallax");
    let estrellas = document.getElementById("bg-estrellas");
    let title = document.getElementById("title-parallax");
    let woody = document.getElementById("woody-parallax");
    let buzz = document.getElementById("buzz-parallax");
    let ctnMenu = document.getElementById("ctn-menu");
    //Contenedores
    let loading = document.getElementById("container-loading");
    let parallax = document.getElementById("parallax-ctn");
    let carrousel = document.getElementById("container");
   
    setTimeout(function() {
        loading.classList.toggle("ocultar");
        parallax.classList.toggle("ocultar");
        carrousel.classList.toggle("ocultar");
    }, 3000);    



    

    window.addEventListener('scroll', ()=>{
        let value = window.scrollY;
        title.style.top = value * 1 + 'px';
        woody.style.left = value * 0.7 + 'px';
        buzz.style.right = value * 0.4 + 'px';
        estrellas.style.top = value * 0.5 + 'px';
        ctnMenu.style.top = value * 1 + 'px';
    })
});