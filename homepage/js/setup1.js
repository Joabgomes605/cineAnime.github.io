var owl = $('.owl-carousel');

owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1500])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})