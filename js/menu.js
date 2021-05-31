document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menuOptions');
    const close = document.querySelector('.toggle-button');

    close.addEventListener("click", function(){
        menu.classList.toggle("openMenu");
    })
  });