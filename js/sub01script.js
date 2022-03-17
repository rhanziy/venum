document.addEventListener("DOMContentLoaded", function(e) {

    const swiper = new Swiper(".swiper-container", {
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

    const scarP = document.querySelector('.scar.p');
    const scarG = document.querySelector('.scar.g');

    window.addEventListener('scroll', function(){
        let scroll = window.pageYOffset;

        scarP.style.left = -250+scroll*0.1+"px";
        scarP.style.top = -150+scroll*0.15+"px";
        scarG.style.bottom = -500+scroll*0.1+"px";
    });

});