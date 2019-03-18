(function($) {
    "use strict"
    $(function() {

        var blocks = $('._animate')

        animateMe()

        $(document).scroll(function() {
            animateMe()
        })

        function animateMe() {
            blocks.each(function() {
                var animationName = $(this).data('animation')
                if($(this).visible(true)) {
                    $(this).addClass('animated').addClass(animationName)
                }else {
                    $(this).removeClass('animated').removeClass(animationName)
                }
            })
        }

    })
})(jQuery);