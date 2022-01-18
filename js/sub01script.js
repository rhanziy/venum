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

    const text = document.querySelector('.text');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
 
    const element = document.querySelectorAll('.text > span');
    for ( let i = 0; i < element.length; i++ ){
       element[i].style.transform = "rotate("+i*13.15+"deg)"
    }
    
    $(window).scroll(function(){

        let scroll = window.pageYOffset ;

        $('.scar.p').css({
            left : -250+scroll*0.1+"px",
            top: -150+scroll*0.15+"px"
        });
        $('.scar.g').css({
            bottom:-500+scroll*0.1+"px"
        });


    });

});