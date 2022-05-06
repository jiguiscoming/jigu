let slideIndex2 = 1;
                    
function currentSlide(n) {
  showSlides(slideIndex2 = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let button = document.getElementsByClassName("button");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < button.length; i++) {
    button[i].className = button[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  button[slideIndex2-1].className += " active";
}