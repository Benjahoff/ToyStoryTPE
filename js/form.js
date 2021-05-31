document.addEventListener('DOMContentLoaded', () => {
    let loading = document.getElementById("container-loading");
    let btnMenu = document.getElementById('ctn-menu');
    let divMenu = document.querySelector('.menuOptions');
    let form = document.querySelector('.signup-container');
        
    setTimeout(function() {
        loading.classList.toggle("ocultar");
        btnMenu.classList.toggle("ocultar");
        divMenu.classList.toggle("ocultar");
        form.classList.toggle("ocultar");
    }, 4000);    

 });