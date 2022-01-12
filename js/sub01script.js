$(document).ready(function(){
  
    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        },
        navigation : { 
            nextEl : '.swiper-button-next', 
            prevEl : '.swiper-button-prev', 
        },
        //breakpoints: { 화면의 넓이가 320px 이상일 때 
        // 320: { slidesPerView: 2, spaceBetween: 20 },
        // 화면의 넓이가 640px 이상일 때
        // 640: { slidesPerView: 4, spaceBetween: 40 }
        //}

    });


});