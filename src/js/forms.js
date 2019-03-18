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