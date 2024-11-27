// Initial slide index
let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next/previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to move to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to show the current slide
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); 
  }

  // Loop back to the first slide if the index exceeds the total
  if (slideIndex > slides.length) { slideIndex = 1; }

  // Loop to the last slide if the index is less than 1
  if (slideIndex < 1) { slideIndex = slides.length; }

  // Show the current slide with fade effect
  slides[slideIndex - 1].classList.add("active");

  // Update active dot
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex - 1].classList.add("active");
}

// Auto-play the slideshow
setInterval(() => {
    plusSlides(1);
}, 5000);
