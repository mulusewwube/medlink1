
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".js-menu-toggle");
    const mobileMenu = document.querySelector(".site-mobile-menu");

    menuToggle.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior
      mobileMenu.classList.toggle("show"); // Toggle the visibility
    });

    const closeButton = document.querySelector(".site-mobile-menu-close");
    if (closeButton) {
      closeButton.addEventListener("click", function () {
        mobileMenu.classList.remove("show");
      });
    }
  });



  var swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

