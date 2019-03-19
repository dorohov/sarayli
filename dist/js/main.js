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

        var productCountCart = 1

        $('.cat_cur_btn').on('click', function() {
            if($(this).hasClass('is--plus') && productCountCart < 10000) {
                productCountCart++
            }else if($(this).hasClass('is--minus') && productCountCart > 0) {
                productCountCart--
            }

            $('.cat_cur_in').val(productCountCart)
        })
        
        $('[data-fancybox="documents"]').fancybox({
            thumbs : {
                autoStart : true,
                buttons: [
                    "zoom",
                    "close"
                  ],
            }
        });

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
(function($) {
    "use strict"
    $(function() {

        var slider = $('.catalog__carousel__container').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            centerMode: true,
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
                        centerMode: false,
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
            // activeTab.css('opacity', '0')
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImNhcm91c2VsLmpzIiwiZm9ybXMuanMiLCJuYXZiYXIuanMiLCJ0YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGJsb2NrcyA9ICQoJy5fYW5pbWF0ZScpXHJcblxyXG4gICAgICAgIGFuaW1hdGVNZSgpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYW5pbWF0ZU1lKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlTWUoKSB7XHJcbiAgICAgICAgICAgIGJsb2Nrcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSAkKHRoaXMpLmRhdGEoJ2FuaW1hdGlvbicpXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlZCcpLmFkZENsYXNzKGFuaW1hdGlvbk5hbWUpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKS5yZW1vdmVDbGFzcyhhbmltYXRpb25OYW1lKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gJCgnLmNhdGFsb2dfX2Nhcm91c2VsX19jb250YWluZXInKS5zbGljayh7XHJcbiAgICAgICAgLy8gICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgICAgICAgJCgnbGkuaXMtLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpLmlzLS1zZWFyY2gnKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSAkKCdsaS5pcy0tc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgcHJvZHVjdENvdW50Q2FydCA9IDFcclxuXHJcbiAgICAgICAgJCgnLmNhdF9jdXJfYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1wbHVzJykgJiYgcHJvZHVjdENvdW50Q2FydCA8IDEwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnRDYXJ0KytcclxuICAgICAgICAgICAgfWVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLW1pbnVzJykgJiYgcHJvZHVjdENvdW50Q2FydCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudENhcnQtLVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcuY2F0X2N1cl9pbicpLnZhbChwcm9kdWN0Q291bnRDYXJ0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnW2RhdGEtZmFuY3lib3g9XCJkb2N1bWVudHNcIl0nKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgIHRodW1icyA6IHtcclxuICAgICAgICAgICAgICAgIGF1dG9TdGFydCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ6b29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXJfX21vYmlsZV9faWNvbiBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnaGVhZGVyJykudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZ2V0TmF2YmFyKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0TmF2YmFyKCkge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygncGFkZGluZy10b3AnLCBoZWlnaHQgKyAncHgnKTtcclxuICAgICAgICAgICAgJCgnI292ZXJsYXknKS5jc3MoJ3RvcCcsIGhlaWdodCArICdweCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldE5hdmJhcilcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldFNoYWRvd0Zvck5hdmJhcigkKHRoaXMpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFNoYWRvd0Zvck5hdmJhcigkKHdpbmRvdykuc2Nyb2xsVG9wKCkpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFNoYWRvd0Zvck5hdmJhcihoZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYoaGVpZ2h0ID4gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgc2xpZGVyID0gJCgnLmNhdGFsb2dfX2Nhcm91c2VsX19jb250YWluZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTM4MCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgQ0xBU1NFUyA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiAnLl90YWItdGFyZ2V0JyxcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnLl90YWItY29udGFpbmVyJyxcclxuICAgICAgICAgICAgYWN0aXZlOiAnaXMtLWFjdGl2ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhcmdldHMgPSAkKENMQVNTRVMudGFyZ2V0KSxcclxuICAgICAgICBhY3RpdmVJZCwgYWN0aXZlVGFyZ2V0LCBhY3RpdmVUYWJcclxuICAgICAgICBcclxuICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYWN0aXZlVGFyZ2V0ID0gJChDTEFTU0VTLnRhcmdldCArICcuJyArIENMQVNTRVMuYWN0aXZlKVxyXG4gICAgICAgICAgICBhY3RpdmVJZCA9IGFjdGl2ZVRhcmdldC5kYXRhKCd0YWJpZCcpXHJcbiAgICAgICAgICAgIHNob3dUYWIoYWN0aXZlSWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93VGFiKGlkKSB7XHJcbiAgICAgICAgICAgICQoQ0xBU1NFUy5jb250YWluZXIpLnJlbW92ZUNsYXNzKENMQVNTRVMuYWN0aXZlKVxyXG4gICAgICAgICAgICBhY3RpdmVUYWIgPSAkKENMQVNTRVMuY29udGFpbmVyICsgJyMnICsgaWQpXHJcbiAgICAgICAgICAgIC8vIGFjdGl2ZVRhYi5jc3MoJ29wYWNpdHknLCAnMCcpXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYi5hZGRDbGFzcyhDTEFTU0VTLmFjdGl2ZSlcclxuXHJcbiAgICAgICAgICAgICQoQ0xBU1NFUy50YXJnZXQpLnJlbW92ZUNsYXNzKENMQVNTRVMuYWN0aXZlKVxyXG4gICAgICAgICAgICAkKENMQVNTRVMudGFyZ2V0ICsgJ1tkYXRhLXRhYmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKENMQVNTRVMuYWN0aXZlKVxyXG4gICAgICAgICAgICAkKCcuY2F0YWxvZ19fY2Fyb3VzZWxfX2NvbnRhaW5lcicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChDTEFTU0VTLnRhcmdldCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3BIID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgYWN0aXZlSWQgPSAkKHRoaXMpLmRhdGEoJ3RhYmlkJylcclxuICAgICAgICAgICAgc2hvd1RhYihhY3RpdmVJZClcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsVG9wKHRvcEgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2Nhcm91c2VsX19hcnJvd3MgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVyID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLmNhdGFsb2dfX2Nhcm91c2VsX19jb250YWluZXInKVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tbmV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyLnNsaWNrKCdzbGlja05leHQnKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tcHJldicpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpO1xyXG4iXX0=
