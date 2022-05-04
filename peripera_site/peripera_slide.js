let slideIndex2 = 1;
showSlides(slideIndex2);

function plusSlides(n) {
    showSlides(slideIndex2 += n);
}

function currentSlide(n) {
    showSlides(slideIndex2 = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let smallImg = document.getElementsByClassName("containerImg_small");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < smallImg.length; i++) {
        smallImg[i].className = smallImg[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
}