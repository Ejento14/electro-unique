import "./styles.css";
import logoCard from "./Images/logo-card.svg";
import logoSm from "./Images/logo-sm.svg";

document.getElementById("logo-card").setAttribute("src", logoCard);
document.getElementById("logo-sm").setAttribute("src", logoSm);

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
