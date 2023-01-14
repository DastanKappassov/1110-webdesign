$(function(){
    // NAV
    $(".nav").mouseenter(function(){
        $(".subnav").stop(true).slideDown(200);
        $(".subnav-bg").stop(true).slideDown(200);
    });
    $(".nav").mouseleave(function(){
        $(".subnav").stop(true).slideUp(200);     
        $(".subnav-bg").stop(true).slideUp(200);
    });

    // SLIDE
    setInterval(function(){
        $(".slide-group").animate({"margin-left": "-100%"}, function(){
            $(".slide:first").appendTo(".slide-group");
            $(".slide-group").css({"margin-left": "0%"});
        })
    }, 3000);

    // POPUP
    $(".notice ul li:first-child").click(function(){
        $("#popup").fadeIn(200)
    })
    $(".btn").click(function(){
        $("#popup").fadeOut(200)
    })
});