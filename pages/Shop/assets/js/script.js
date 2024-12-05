// script.js
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse'); 

  navbarToggle.addEventListener('click', function() {

      navbarCollapse.classList.toggle('show');
  });
});
