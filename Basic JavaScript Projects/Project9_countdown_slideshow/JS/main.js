let slideIndex = 1; //the starting image for the slideshow
slideshow(slideIndex);  //start by showing the slide when the page loads

// This changes the value of slideIndex, and 
// calls the slideshow function again to update the image
function plusSlides(n) {
    slideshow(slideIndex += n);
}

// This calls the slideshow function for the specific slide when you click on a dot
function currentSlide(n) {
    slideshow(slideIndex = n);
}

// Displays slide number 'n'
function slideshow(n) {
    let i;  // to iterate through elements
    let slides = document.getElementsByClassName("mySlides");   //retrieve slides
    let dots = document.getElementsByClassName("dot");  //retrieve dots
    if (n > slides.length) { slideIndex = 1 }   //resets slides if going past the end of the slideshow
    if (n < 1) { slideIndex = slides.length }   //resets slides if going past the beginning of slideshow
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   //Turning ALL slides off
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Turning ALL dots to inactive
    }
    slides[slideIndex - 1].style.display = "block"; //sets the desired slide to be visible
    dots[slideIndex - 1].className += " active";    //sets the corresponding dot to active styling
}


// I didn't end up using this countdown in my slideshow, but it is required
// for this assignment so here it is 
function countdown() {
    let timer = document.getElementById("timer");
    var s = document.getElementById("seconds").value;
    if (isNaN(s)) { return; }
    if (s < 0) { return; }
    var seconds = Math.trunc(s);

    function tick() {
        timer.innerHTML = seconds;
        seconds = seconds - 1;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time is up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}