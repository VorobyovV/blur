$(document).ready(function () {


    $('.collection-top__names').click(function () {
        if ($(window).width() <= 767) {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('active')
                $(this).removeClass('active')
                $('.drop-mobile__blocks').toggleClass('active')

            } else {
                $('.drop-mobile__blocks').toggleClass('active')
                $(this).toggleClass('active')
            }
        } else {
            return false
        }
    });

    $('body').on('click', '.number-minus, .number-plus', function () {
        var $row = $(this).closest('.modal__counter');
        var $input = $row.find('.number-text');
        var step = $row.data('step');
        var val = parseFloat($input.val());
        if ($(this).hasClass('number-minus')) {
          val -= step;
        } else {
          val += step;
        }
        $input.val(val);
        $input.change();
        return false;
      });


    $('[data-tabs-type]').on('click', function () {
        if (!$(this).hasClass('active')) {
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('[data-tabs-typecontent]').hide().eq(index).fadeIn();
        }
        return false;
    });

    $('[data-tabs-type2]').on('click', function () {
        if (!$(this).hasClass('active')) {
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('[data-tabs-typecontent2]').hide().eq(index).fadeIn();
        }
        return false;
    });
});





