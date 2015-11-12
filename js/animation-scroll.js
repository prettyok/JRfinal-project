$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 2200) {

            $('#find-me').addClass('animated slideInLeft');
        }

    });
});