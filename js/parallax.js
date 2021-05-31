document.addEventListener('DOMContentLoaded', () =>{
    let background = document.getElementById("bg-parallax");
    let estrellas = document.getElementById("bg-estrellas");
    let title = document.getElementById("title-parallax");
    let woody = document.getElementById("woody-parallax");
    let buzz = document.getElementById("buzz-parallax");
    let woodyRun = document.querySelector(".woodyRun");
    
    //Contenedores
    let loading = document.getElementById("container-loading");
    let ctnMenu = document.querySelector(".container-menu");
    let parallax = document.getElementById("parallax-ctn");
    let gallery = document.getElementById("container-gallery");
    let timer = document.querySelector(".container-timer");
    let carrousel = document.querySelector(".containerCarrousel");

    //Menu
    let divMenu = document.querySelector('.menuOptions');
    let btnMenu = document.getElementById('ctn-menu');
    
    setTimeout(function() {
        loading.classList.toggle("ocultar");
        parallax.classList.toggle("ocultar");
        btnMenu.classList.toggle("ocultar");
        divMenu.classList.toggle("ocultar");
        gallery.classList.toggle("ocultar");
        woodyRun.classList.toggle("ocultar");
        timer.classList.toggle("ocultar");
        carrousel.classList.toggle("ocultar");
    }, 4000);    

    window.addEventListener('scroll', ()=>{
        let value = window.scrollY;
        ctnMenu.style.top = value * 1 + 'px';
        divMenu.style.top = value * 1 + 'px';
        title.style.top = value * 1 + 'px';
        woody.style.left = value * 0.7 + 'px';
        buzz.style.right = value * 0.4 + 'px';
        estrellas.style.top = value * 0.5 + 'px';
    })
});