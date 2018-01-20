$(window).ready(function() {

    ///// SMOOTH PAGE LOADING /////

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 300);

    ///// BURGER /////

    $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('nav ul').toggleClass('active');
    });

    ///// PHONE-NUMBER MOVEMENT /////

    if($(window).width() <= 768) {
        $('header .phone-number').appendTo('nav ul');
    }

    $(window).resize(function() {
        if($(window).width() <= 768) {
            $('header .phone-number').appendTo('nav ul');
        } else {
            $('nav .phone-number').prependTo('header .phone-area');
        }
    });

    ///// SMOOTH SCROLL TO ANCHOR /////

    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - $('header').height()}, 700);
    });

    ///// MODAL CALL /////

    $('.get-modal-call').click(function () {
        $('.modal-call').fadeIn(400).css('display', 'flex');
    });

    $('.modal-call').click(function (event) {
        var clickedElement = event.target;
        if (!$(clickedElement).closest('.modal-inner').length) {
            $('.modal-call').fadeOut(400);
        }
        if ($(clickedElement).hasClass('close-modal')) {
            $('.modal-call').fadeOut(400);
        }
    });

    ///// MODAL MORE /////

    $('.get-modal-more').click(function () {
        $('.modal-more').fadeIn(400).css('display', 'flex');
    });

    $('.modal-more').click(function (event) {
        var clickedElement = event.target;
        if (!$(clickedElement).closest('.modal-inner').length) {
            $('.modal-more').fadeOut(400);
        }
        if ($(clickedElement).hasClass('close-modal')) {
            $('.modal-more').fadeOut(400);
        }
    });

});