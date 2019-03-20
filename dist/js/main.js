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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImNhcm91c2VsLmpzIiwiZm9ybXMuanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJ0YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgYmxvY2tzID0gJCgnLl9hbmltYXRlJylcclxuXHJcbiAgICAgICAgYW5pbWF0ZU1lKClcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhbmltYXRlTWUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVNZSgpIHtcclxuICAgICAgICAgICAgYmxvY2tzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9ICQodGhpcykuZGF0YSgnYW5pbWF0aW9uJylcclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGVkJykuYWRkQ2xhc3MoYW5pbWF0aW9uTmFtZSlcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCcpLnJlbW92ZUNsYXNzKGFuaW1hdGlvbk5hbWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyAkKCcuY2F0YWxvZ19fY2Fyb3VzZWxfX2NvbnRhaW5lcicpLnNsaWNrKHtcclxuICAgICAgICAvLyAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAvLyAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICAkKCdsaS5pcy0tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGkuaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApICQoJ2xpLmlzLS1zZWFyY2gnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAkKCcuX2NoZWNvdW50LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaW5pZCA9ICQodGhpcykuZGF0YSgnaW5pZCcpXHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0Q291bnRDYXJ0ID0gJCgnLl9jaGVjb3VudC1pbnB1dFtkYXRhLWluaWQ9XCInICsgaW5pZCArICdcIl0nKS52YWwoKVxyXG5cclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLXBsdXMnKSAmJiBwcm9kdWN0Q291bnRDYXJ0IDwgMTAwMDApIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudENhcnQrK1xyXG4gICAgICAgICAgICB9ZWxzZSBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tbWludXMnKSAmJiBwcm9kdWN0Q291bnRDYXJ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50Q2FydC0tXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJy5fY2hlY291bnQtaW5wdXRbZGF0YS1pbmlkPVwiJyArIGluaWQgKyAnXCJdJykudmFsKHByb2R1Y3RDb3VudENhcnQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAkKCdbZGF0YS1mYW5jeWJveD1cImRvY3VtZW50c1wiXScpLmZhbmN5Ym94KHtcclxuICAgICAgICAgICAgdGh1bWJzIDoge1xyXG4gICAgICAgICAgICAgICAgYXV0b1N0YXJ0IDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcInpvb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcucXVlc3Rpb25fX2Jsb2NrX19oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0NvbnRhaW5lciA9ICQodGhpcykuc2libGluZ3MoJy5xdWVzdGlvbl9fYmxvY2tfX2NvbnRlbnQnKVxyXG4gICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb25fX2Jsb2NrJylcclxuXHJcbiAgICAgICAgICAgIHRoaXNCbG9jay50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICB0aGlzQ29udGFpbmVyLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdfX3Bob21lbWFzaycpO1xyXG5cclxuICAgICAgICBpZihwaG9uZUlucHV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBob25lSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgSU1hc2soXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnB1dHNbaV0sIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrOiAnK3s3fSg5MDApMDAwLTAwLTAwJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsInZhciBtYXA7XHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1My4wMDMzMTgsIDM2LjEzODI2MyksXHJcbiAgICB6b29tOiAxNSxcclxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2U5ZTllOVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDI5XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IDAuMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMThcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDIxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZGVkZWRlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMjFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogMzZcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmVmZWZlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmVmZWZlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMTdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogMS4yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbiAgfSk7XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19tb2JpbGVfX2ljb24gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJ2hlYWRlcicpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGdldE5hdmJhcigpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldE5hdmJhcigpIHtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywgaGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICQoJyNvdmVybGF5JykuY3NzKCd0b3AnLCBoZWlnaHQgKyAncHgnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXROYXZiYXIpXHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzZXRTaGFkb3dGb3JOYXZiYXIoJCh0aGlzKS5zY3JvbGxUb3AoKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRTaGFkb3dGb3JOYXZiYXIoJCh3aW5kb3cpLnNjcm9sbFRvcCgpKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRTaGFkb3dGb3JOYXZiYXIoaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmKGhlaWdodCA+ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpIC8gMikge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNsaWRlciA9ICQoJy5jYXRhbG9nX19jYXJvdXNlbF9fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzODAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIENMQVNTRVMgPSB7XHJcbiAgICAgICAgICAgIHRhcmdldDogJy5fdGFiLXRhcmdldCcsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJy5fdGFiLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogJ2lzLS1hY3RpdmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXJnZXRzID0gJChDTEFTU0VTLnRhcmdldCksXHJcbiAgICAgICAgYWN0aXZlSWQsIGFjdGl2ZVRhcmdldCwgYWN0aXZlVGFiXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZVRhcmdldCA9ICQoQ0xBU1NFUy50YXJnZXQgKyAnLicgKyBDTEFTU0VTLmFjdGl2ZSlcclxuICAgICAgICAgICAgYWN0aXZlSWQgPSBhY3RpdmVUYXJnZXQuZGF0YSgndGFiaWQnKVxyXG4gICAgICAgICAgICBzaG93VGFiKGFjdGl2ZUlkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd1RhYihpZCkge1xyXG4gICAgICAgICAgICAkKENMQVNTRVMuY29udGFpbmVyKS5yZW1vdmVDbGFzcyhDTEFTU0VTLmFjdGl2ZSlcclxuICAgICAgICAgICAgYWN0aXZlVGFiID0gJChDTEFTU0VTLmNvbnRhaW5lciArICcjJyArIGlkKVxyXG4gICAgICAgICAgICAvLyBhY3RpdmVUYWIuY3NzKCdvcGFjaXR5JywgJzAnKVxyXG4gICAgICAgICAgICBhY3RpdmVUYWIuYWRkQ2xhc3MoQ0xBU1NFUy5hY3RpdmUpXHJcblxyXG4gICAgICAgICAgICAkKENMQVNTRVMudGFyZ2V0KS5yZW1vdmVDbGFzcyhDTEFTU0VTLmFjdGl2ZSlcclxuICAgICAgICAgICAgJChDTEFTU0VTLnRhcmdldCArICdbZGF0YS10YWJpZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcyhDTEFTU0VTLmFjdGl2ZSlcclxuICAgICAgICAgICAgaWYoJCgnLmNhdGFsb2dfX2Nhcm91c2VsX19zbGlkZXInKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2F0YWxvZ19fY2Fyb3VzZWxfX3NsaWRlcicpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKENMQVNTRVMudGFyZ2V0KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHRvcEggPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICBhY3RpdmVJZCA9ICQodGhpcykuZGF0YSgndGFiaWQnKVxyXG4gICAgICAgICAgICBzaG93VGFiKGFjdGl2ZUlkKVxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGxUb3AodG9wSClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuY2F0YWxvZ19fY2Fyb3VzZWxfX2Fycm93cyBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZXIgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcuY2F0YWxvZ19fY2Fyb3VzZWxfX2NvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1uZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIuc2xpY2soJ3NsaWNrTmV4dCcpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1wcmV2JykpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIuc2xpY2soJ3NsaWNrUHJldicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
