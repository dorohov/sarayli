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


        $('._checount-button').on('click', function() {
            var inid = $(this).data('inid')
            var productCountCart = $('._checount-input[data-inid="' + inid + '"]').val()

            if($(this).hasClass('is--plus') && productCountCart < 10000) {
                productCountCart++
            }else if($(this).hasClass('is--minus') && productCountCart > 0) {
                productCountCart--
            }

            $('._checount-input[data-inid="' + inid + '"]').val(productCountCart)
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

        $('.question__block__heading').on('click', function(e) {
            var thisContainer = $(this).siblings('.question__block__content')
            var thisBlock = $(this).closest('.question__block')

            thisBlock.toggleClass('is--open')
            thisContainer.slideToggle()
        })

        var phoneInputs = document.getElementsByClassName('__phomemask');

        if(phoneInputs.length) {
            for(var i = 0; i < phoneInputs.length; i++) {
                new IMask(
                    phoneInputs[i], {
                    mask: '+{7}(900)000-00-00'
                });
            }
        }
    })
})(jQuery);
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(53.003318, 36.138263),
    zoom: 15,
    disableDefaultUI: true,
    styles: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ]
  });
  var icon = window.location.origin + '/img/marker.png';

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(53.003318, 36.138263),
                icon: icon,
                map: map
            });
}
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

        var slider = $('.catalog__carousel__slider').slick({
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
            if($('.catalog__carousel__slider').length > 0) {
                $('.catalog__carousel__slider').slick('setPosition');
            }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImNhcm91c2VsLmpzIiwiZm9ybXMuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJ0YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGJsb2NrcyA9ICQoJy5fYW5pbWF0ZScpXHJcblxyXG4gICAgICAgIGFuaW1hdGVNZSgpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYW5pbWF0ZU1lKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlTWUoKSB7XHJcbiAgICAgICAgICAgIGJsb2Nrcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSAkKHRoaXMpLmRhdGEoJ2FuaW1hdGlvbicpXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZpc2libGUodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlZCcpLmFkZENsYXNzKGFuaW1hdGlvbk5hbWUpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKS5yZW1vdmVDbGFzcyhhbmltYXRpb25OYW1lKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gJCgnLmNhdGFsb2dfX2Nhcm91c2VsX19jb250YWluZXInKS5zbGljayh7XHJcbiAgICAgICAgLy8gICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgICAgICAgJCgnbGkuaXMtLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpLmlzLS1zZWFyY2gnKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSAkKCdsaS5pcy0tc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgJCgnLl9jaGVjb3VudC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGluaWQgPSAkKHRoaXMpLmRhdGEoJ2luaWQnKVxyXG4gICAgICAgICAgICB2YXIgcHJvZHVjdENvdW50Q2FydCA9ICQoJy5fY2hlY291bnQtaW5wdXRbZGF0YS1pbmlkPVwiJyArIGluaWQgKyAnXCJdJykudmFsKClcclxuXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1wbHVzJykgJiYgcHJvZHVjdENvdW50Q2FydCA8IDEwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnRDYXJ0KytcclxuICAgICAgICAgICAgfWVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLW1pbnVzJykgJiYgcHJvZHVjdENvdW50Q2FydCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudENhcnQtLVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcuX2NoZWNvdW50LWlucHV0W2RhdGEtaW5pZD1cIicgKyBpbmlkICsgJ1wiXScpLnZhbChwcm9kdWN0Q291bnRDYXJ0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnW2RhdGEtZmFuY3lib3g9XCJkb2N1bWVudHNcIl0nKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgIHRodW1icyA6IHtcclxuICAgICAgICAgICAgICAgIGF1dG9TdGFydCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ6b29tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnF1ZXN0aW9uX19ibG9ja19faGVhZGluZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNDb250YWluZXIgPSAkKHRoaXMpLnNpYmxpbmdzKCcucXVlc3Rpb25fX2Jsb2NrX19jb250ZW50JylcclxuICAgICAgICAgICAgdmFyIHRoaXNCbG9jayA9ICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uX19ibG9jaycpXHJcblxyXG4gICAgICAgICAgICB0aGlzQmxvY2sudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgdGhpc0NvbnRhaW5lci5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIHBob25lSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnX19waG9tZW1hc2snKTtcclxuXHJcbiAgICAgICAgaWYocGhvbmVJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwaG9uZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3IElNYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lSW5wdXRzW2ldLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogJyt7N30oOTAwKTAwMC0wMC0wMCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJ2YXIgbWFwO1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTMuMDAzMzE4LCAzNi4xMzgyNjMpLFxyXG4gICAgem9vbTogMTUsXHJcbiAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNlOWU5ZTlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmNWY1ZjVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAyOVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiAwLjJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxNlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmNWY1ZjVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2RlZGVkZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxNlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IDM2XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogNDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMTlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZlZmVmZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZlZmVmZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IDEuMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gIH0pO1xyXG4gIHZhciBpY29uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvaW1nL21hcmtlci5wbmcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTMuMDAzMzE4LCAzNi4xMzgyNjMpLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICAgICAgICAgIG1hcDogbWFwXHJcbiAgICAgICAgICAgIH0pO1xyXG59IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlX19pY29uIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCdoZWFkZXInKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBnZXROYXZiYXIoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXROYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nLXRvcCcsIGhlaWdodCArICdweCcpO1xyXG4gICAgICAgICAgICAkKCcjb3ZlcmxheScpLmNzcygndG9wJywgaGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0TmF2YmFyKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0U2hhZG93Rm9yTmF2YmFyKCQodGhpcykuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0U2hhZG93Rm9yTmF2YmFyKCQod2luZG93KS5zY3JvbGxUb3AoKSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U2hhZG93Rm9yTmF2YmFyKGhlaWdodCkge1xyXG4gICAgICAgICAgICBpZihoZWlnaHQgPiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSAvIDIpIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBzbGlkZXIgPSAkKCcuY2F0YWxvZ19fY2Fyb3VzZWxfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzgwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTA1MCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBDTEFTU0VTID0ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICcuX3RhYi10YXJnZXQnLFxyXG4gICAgICAgICAgICBjb250YWluZXI6ICcuX3RhYi1jb250YWluZXInLFxyXG4gICAgICAgICAgICBhY3RpdmU6ICdpcy0tYWN0aXZlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFyZ2V0cyA9ICQoQ0xBU1NFUy50YXJnZXQpLFxyXG4gICAgICAgIGFjdGl2ZUlkLCBhY3RpdmVUYXJnZXQsIGFjdGl2ZVRhYlxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRhcmdldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhY3RpdmVUYXJnZXQgPSAkKENMQVNTRVMudGFyZ2V0ICsgJy4nICsgQ0xBU1NFUy5hY3RpdmUpXHJcbiAgICAgICAgICAgIGFjdGl2ZUlkID0gYWN0aXZlVGFyZ2V0LmRhdGEoJ3RhYmlkJylcclxuICAgICAgICAgICAgc2hvd1RhYihhY3RpdmVJZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dUYWIoaWQpIHtcclxuICAgICAgICAgICAgJChDTEFTU0VTLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoQ0xBU1NFUy5hY3RpdmUpXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9ICQoQ0xBU1NFUy5jb250YWluZXIgKyAnIycgKyBpZClcclxuICAgICAgICAgICAgLy8gYWN0aXZlVGFiLmNzcygnb3BhY2l0eScsICcwJylcclxuICAgICAgICAgICAgYWN0aXZlVGFiLmFkZENsYXNzKENMQVNTRVMuYWN0aXZlKVxyXG5cclxuICAgICAgICAgICAgJChDTEFTU0VTLnRhcmdldCkucmVtb3ZlQ2xhc3MoQ0xBU1NFUy5hY3RpdmUpXHJcbiAgICAgICAgICAgICQoQ0xBU1NFUy50YXJnZXQgKyAnW2RhdGEtdGFiaWQ9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoQ0xBU1NFUy5hY3RpdmUpXHJcbiAgICAgICAgICAgIGlmKCQoJy5jYXRhbG9nX19jYXJvdXNlbF9fc2xpZGVyJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmNhdGFsb2dfX2Nhcm91c2VsX19zbGlkZXInKS5zbGljaygnc2V0UG9zaXRpb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChDTEFTU0VTLnRhcmdldCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3BIID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgYWN0aXZlSWQgPSAkKHRoaXMpLmRhdGEoJ3RhYmlkJylcclxuICAgICAgICAgICAgc2hvd1RhYihhY3RpdmVJZClcclxuICAgICAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsVG9wKHRvcEgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2dfX2Nhcm91c2VsX19hcnJvd3MgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVyID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLmNhdGFsb2dfX2Nhcm91c2VsX19jb250YWluZXInKVxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tbmV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyLnNsaWNrKCdzbGlja05leHQnKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tcHJldicpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpO1xyXG4iXX0=
