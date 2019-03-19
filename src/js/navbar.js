(function($) {
    "use strict"
    $(function() {


        $('.navbar__mobile__icon button').on('click', function() {
            $(this).toggleClass('is-active')
            $('header').toggleClass('is--open')
            $('#overlay').toggleClass('is--active')
        })

        getNavbar()

        function getNavbar() {
            var height = $('.navbar').innerHeight()
            $('main').css('padding-top', height + 'px');
            $('#overlay').css('top', height + 'px');
        }

        window.addEventListener('resize', getNavbar)

        $(window).scroll(function(e) {
            setShadowForNavbar($(this).scrollTop())
        })

        setShadowForNavbar($(window).scrollTop())

        function setShadowForNavbar(height) {
            if(height > $('.navbar').innerHeight() / 2) {
                $('.navbar').addClass('is--scroll')
            }else {
                $('.navbar').removeClass('is--scroll')
            }
        }

    })
})(jQuery);