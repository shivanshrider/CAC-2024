/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Menu toggle function
    window.toggleMenu = function() {
        var navList = document.getElementById('nav-list');
        navList.classList.toggle('active');
    };

})(jQuery); // End of use strict



document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll(".count");
    const speed = 500;

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute("data-target"));
            const count = parseInt(counter.innerText);
            const increment = Math.trunc(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});


// var mainListDiv = document.getElementById("mainListDiv"),
//     mediaButton = document.getElementById("mediaButton");

// mediaButton.onclick = function () {
    
//     "use strict";
    
//     mainListDiv.classList.toggle("show_list");
//     mediaButton.classList.toggle("active");
    
// };

// const navToggle = document.querySelector('.nav-toggle');
// const navItems = document.querySelector('.nav-items');

// navToggle.addEventListener('click', () => {
//   navToggle.classList.toggle('active');
//   navItems.classList.toggle('active');
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const mediaButton = document.getElementById('mediaButton');
//     const mainListDiv = document.getElementById('mainListDiv');
  
//     mediaButton.addEventListener('click', function() {
//       this.classList.toggle('active');
//       mainListDiv.classList.toggle('active');
//     });
//   });

  
  
  