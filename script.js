const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
         delay: 3000,
         disableOnInteraction:false, //turn this true or false depending on whether to stop autoplay when user interacts

    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});