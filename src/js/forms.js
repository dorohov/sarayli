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