document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  

  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.gallery', { delay: 900 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
  ScrollReveal().reveak('.footer', {delay:500});

  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 43.5293101, lng: -5.6773233},
          zoom: 13
        });
      }

  
  
  