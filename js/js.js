//header
$(function(){
    $('header .hamBtn').click(function(){
        $('header .hamNav')
        .toggleClass('display');
    })

    $('header .hamNav i').click(function(){
        $(this)
        .closest('.hamNav')
        .toggleClass('display');
    })
})

//mainArea
$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: false,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
    })
})