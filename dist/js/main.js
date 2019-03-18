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
(function($) {
    "use strict"
    $(function() {

        // $('.catalog__carousel__container').slick({
        //     infinite: true,
        //     slidesToShow: 4,
        //     slidesToScroll: 1
        // });


    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {


        $('li.is--search').on('click', function() {
            $(this).addClass('is--open')
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('li.is--search')
            if(targets.length <= 0) $('li.is--search').removeClass('is--open')
        })

    })
})(jQuery);
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

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var slider = $('.catalog__carousel__container').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1380,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 2,
                        autoplay: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        var CLASSES = {
            target: '._tab-target',
            container: '._tab-container',
            active: 'is--active'
        },
        targets = $(CLASSES.target),
        activeId, activeTarget, activeTab
        
        if(targets.length > 0) {
            activeTarget = $(CLASSES.target + '.' + CLASSES.active)
            activeId = activeTarget.data('tabid')
            showTab(activeId)
        }

        function showTab(id) {
            $(CLASSES.container).removeClass(CLASSES.active)
            activeTab = $(CLASSES.container + '#' + id)
            activeTab.addClass(CLASSES.active)

            $(CLASSES.target).removeClass(CLASSES.active)
            $(CLASSES.target + '[data-tabid="' + id + '"]').addClass(CLASSES.active)
            $('.catalog__carousel__container').slick('setPosition');
        }

        $(CLASSES.target).on('click', function() {
            var topH = $(document).scrollTop()
            activeId = $(this).data('tabid')
            showTab(activeId)
            $(document).scrollTop(topH)
        })

        $('.catalog__carousel__arrows button').on('click', function() {
            var currentSlider = $(this).parent().siblings('.catalog__carousel__container')
            if($(this).hasClass('is--next')) {
                currentSlider.slick('slickNext')
            }else if($(this).hasClass('is--prev')) {
                currentSlider.slick('slickPrev')
            }
        })

    })
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImNhcm91c2VsLmpzIiwiZm9ybXMuanMiLCJuYXZiYXIuanMiLCJ0YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgYmxvY2tzID0gJCgnLl9hbmltYXRlJylcclxuXHJcbiAgICAgICAgYW5pbWF0ZU1lKClcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhbmltYXRlTWUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVNZSgpIHtcclxuICAgICAgICAgICAgYmxvY2tzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9ICQodGhpcykuZGF0YSgnYW5pbWF0aW9uJylcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGVkJykuYWRkQ2xhc3MoYW5pbWF0aW9uTmFtZSlcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCcpLnJlbW92ZUNsYXNzKGFuaW1hdGlvbk5hbWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyAkKCcuY2F0YWxvZ19fY2Fyb3VzZWxfX2NvbnRhaW5lcicpLnNsaWNrKHtcclxuICAgICAgICAvLyAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAvLyAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICAkKCdsaS5pcy0tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGkuaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApICQoJ2xpLmlzLS1zZWFyY2gnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19tb2JpbGVfX2ljb24gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJ2hlYWRlcicpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGdldE5hdmJhcigpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldE5hdmJhcigpIHtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywgaGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICQoJyNvdmVybGF5JykuY3NzKCd0b3AnLCBoZWlnaHQgKyAncHgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXROYXZiYXIpXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBzbGlkZXIgPSAkKCcuY2F0YWxvZ19fY2Fyb3VzZWxfX2NvbnRhaW5lcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzgwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTA1MCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIENMQVNTRVMgPSB7XHJcbiAgICAgICAgICAgIHRhcmdldDogJy5fdGFiLXRhcmdldCcsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJy5fdGFiLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ2lzLS1hY3RpdmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXJnZXRzID0gJChDTEFTU0VTLnRhcmdldCksXHJcbiAgICAgICAgYWN0aXZlSWQsIGFjdGl2ZVRhcmdldCwgYWN0aXZlVGFiXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZVRhcmdldCA9ICQoQ0xBU1NFUy50YXJnZXQgKyAnLicgKyBDTEFTU0VTLmFjdGl2ZSlcclxuICAgICAgICAgICAgYWN0aXZlSWQgPSBhY3RpdmVUYXJnZXQuZGF0YSgndGFiaWQnKVxyXG4gICAgICAgICAgICBzaG93VGFiKGFjdGl2ZUlkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd1RhYihpZCkge1xyXG4gICAgICAgICAgICAkKENMQVNTRVMuY29udGFpbmVyKS5yZW1vdmVDbGFzcyhDTEFTU0VTLmFjdGl2ZSlcclxuICAgICAgICAgICAgYWN0aXZlVGFiID0gJChDTEFTU0VTLmNvbnRhaW5lciArICcjJyArIGlkKVxyXG4gICAgICAgICAgICBhY3RpdmVUYWIuYWRkQ2xhc3MoQ0xBU1NFUy5hY3RpdmUpXHJcblxyXG4gICAgICAgICAgICAkKENMQVNTRVMudGFyZ2V0KS5yZW1vdmVDbGFzcyhDTEFTU0VTLmFjdGl2ZSlcclxuICAgICAgICAgICAgJChDTEFTU0VTLnRhcmdldCArICdbZGF0YS10YWJpZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcyhDTEFTU0VTLmFjdGl2ZSlcclxuICAgICAgICAgICAgJCgnLmNhdGFsb2dfX2Nhcm91c2VsX19jb250YWluZXInKS5zbGljaygnc2V0UG9zaXRpb24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoQ0xBU1NFUy50YXJnZXQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdG9wSCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gJCh0aGlzKS5kYXRhKCd0YWJpZCcpXHJcbiAgICAgICAgICAgIHNob3dUYWIoYWN0aXZlSWQpXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbFRvcCh0b3BIKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5jYXRhbG9nX19jYXJvdXNlbF9fYXJyb3dzIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlciA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5jYXRhbG9nX19jYXJvdXNlbF9fY29udGFpbmVyJylcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLW5leHQnKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlci5zbGljaygnc2xpY2tOZXh0JylcclxuICAgICAgICAgICAgfWVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLXByZXYnKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlci5zbGljaygnc2xpY2tQcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTtcclxuIl19
