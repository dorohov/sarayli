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
