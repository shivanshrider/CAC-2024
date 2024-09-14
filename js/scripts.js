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



  
  
const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 100}%)`;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.button == "next" ? ++currSlide : --currSlide;

    if (currSlide > maxSlide) {
      currSlide = 0;
    } else if (currSlide < 0) {
      currSlide = maxSlide;
    }

    updateCarousel(currSlide);
  });
});

updateCarousel();


document.addEventListener("DOMContentLoaded", () => {
 
    const modal = document.createElement("div");
    modal.id = "resultModal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.zIndex = "1000";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.display = "flex";

   
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "8px";
    modalContent.style.width = "80%";
    modalContent.style.maxWidth = "500px";
    modalContent.style.textAlign = "center";

   
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.style.color = "#aaa";
    closeBtn.style.float = "right";
    closeBtn.style.fontSize = "28px";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.marginBottom = "10px";

  
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    const heading = document.createElement("h2");
    heading.textContent = "Round 2 Results";


    const paragraph = document.createElement("p");
    paragraph.textContent = "The results for Round 2 (Final Round) are out.  Please check the attached PDF for more details.";


    const pdfLink = document.createElement("a");
    pdfLink.href = "/result/result2.pdf"; 
    pdfLink.target = "_blank";
    pdfLink.textContent = "Download Results PDF";
    pdfLink.style.display = "inline-block";
    pdfLink.style.marginTop = "20px";
    pdfLink.style.padding = "10px 20px";
    pdfLink.style.backgroundColor = "#28a745";
    pdfLink.style.color = "white";
    pdfLink.style.textDecoration = "none";
    pdfLink.style.borderRadius = "5px";
    pdfLink.style.cursor = "pointer";


    pdfLink.onmouseover = function() {
        pdfLink.style.backgroundColor = "#218838";
    };
    pdfLink.onmouseleave = function() {
        pdfLink.style.backgroundColor = "#28a745";
    };


    modalContent.appendChild(closeBtn);
    modalContent.appendChild(heading);
    modalContent.appendChild(paragraph);
    modalContent.appendChild(pdfLink);


    modal.appendChild(modalContent);


    document.body.appendChild(modal);


    const modalBtn = document.createElement("button");
    modalBtn.id = "resultModalBtn";
    modalBtn.textContent = "View Phase 2 (Final) Results";
    modalBtn.style.padding = "10px 20px";
    modalBtn.style.fontSize = "16px";
    modalBtn.style.cursor = "pointer";
    modalBtn.style.backgroundColor = "#007bff";
    modalBtn.style.color = "white";
    modalBtn.style.border = "none";
    modalBtn.style.borderRadius = "5px";
    modalBtn.style.margin = "20px";


    modalBtn.onmouseover = function() {
        modalBtn.style.backgroundColor = "#0056b3";
    };
    modalBtn.onmouseleave = function() {
        modalBtn.style.backgroundColor = "#007bff";
    };


    modalBtn.onclick = function() {
        modal.style.display = "flex";
    };


    document.body.appendChild(modalBtn);


    setTimeout(() => {
        modal.style.display = "flex";
    }, 2000); 
});

    


