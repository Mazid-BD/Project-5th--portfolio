$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:true,
    center:true,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

 //sticky menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $(".sticky").removeClass("sticky-header");
        } else {
            $(".sticky").addClass("sticky-header");
        }
    });

$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});



