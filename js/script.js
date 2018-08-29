
$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".navbar").addClass("bg-dark");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("bg-dark");
    }
});