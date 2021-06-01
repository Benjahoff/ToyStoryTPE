document.addEventListener('DOMContentLoaded', () => {
  var slideIndex = 1;
  showSlides(slideIndex);
  
     var modal = document.getElementById("myModal");
     var next = document.querySelector('.next');
     var prev = document.querySelector('.prev');

     next.addEventListener("click", () => {
       plusSlides(1);
     })
     prev.addEventListener("click", () => {
      plusSlides(-1);
     })
      function openPopup(img) {
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      }
  
      function closePopup() {
        modal.style.display = "none";
      }
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
  
    slides[slideIndex-1].style.display = "block";  
  }
 });