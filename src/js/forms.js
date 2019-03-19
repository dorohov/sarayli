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