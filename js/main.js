$(function(){

    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // Fixed navigation

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400){  
            $('nav').css('position', 'fixed').css('background', '#bfc2c8');
        }
        else{
            $('nav').css('position', 'absolute').css('background', '#bfc2c87e');
        }
    });

    $(window).scroll(function() {
        $('.info-card').each(function (){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("bounceInUp");
            }
        });
        $('.advantages').each(function (){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
        
    });

    // плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    /* Параллакс от скролла */
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.scroll').css('top',(0-(scrolled*0.75))+'px');
    }

     // Кастомная Я.Карта

     ymaps.ready(init);
     var myMap, 
         myPlacemark;

    function init(){
      myMap = new ymaps.Map("map", {
         center: [46.474204, 30.749196],
         zoom: 17
     });

      myPlacemark = new ymaps.Placemark([46.474495, 30.746565], {
         iconCaption: 'Ул. Базарная, 36',
         hintContent: 'То, что нужно!',
         balloonContent: 'Наш офис'
     });

     myMap.geoObjects.add(myPlacemark);
    }

    // Всплывающее окно

    // Всплывающее окно

    $('.footer__phone-link, .header__phone-link').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    })


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })

});