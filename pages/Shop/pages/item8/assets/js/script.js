document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.navbar-toggler').addEventListener('click', function () {
    let navbarMenu = document.querySelector('#navbarTogglerDemo02');
    navbarMenu.classList.toggle('collapse');
  });
});
