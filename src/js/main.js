//= ../../bower_components/jquery/dist/jquery.min.js


"use strict";

var headerHeight = $('.header').outerHeight();

function modal(clickItem) {

    var wrap = $('.modal-wrapper, .modal-overlay');

    $(clickItem).on('click', function(e) {
        e.preventDefault();
        wrap.toggleClass('active');
        $('html').toggleClass('overflow');
    })

}

function linkToSrroll() {
    var contentNav = $('.content-nav');

    $('.js-scrollToEl').on('click', function(e) {
        e.preventDefault();

        var to = $($(this).attr('href'));

        contentNav.removeClass('active');

        $('body,html').animate({
            scrollTop: to.offset().top - headerHeight,
        }, 800);

    });
}

function fixedHeader() {
    var mainContent = $('.main');
    var header = $('.header');

    if ($(window).scrollTop() >= headerHeight) {
        header.addClass('fixed');
        mainContent.css('padding-top', headerHeight);
    } else {
        header.removeClass('fixed');
        mainContent.css('padding-top', 0);
    }
}

function toggleMenu() {
    var hamb = $('.hamburger');

    hamb.on('click', function() {
        $(this).toggleClass('is-active');
        $('html').toggleClass('overflow');
        $('.wrapper').toggleClass('open-sidebar');
        $('.header__nav').toggleClass('active');
    });
}

function togglePoints() {
    var points = $('.points');
    var navMenu = $('.content-nav');
    var navMenuClose = $('.content-nav__close');

    points.on('click', function() {
      toggle();
    });

    navMenuClose.on('click', function(){
      toggle();
    });

    function toggle(){
        navMenu.toggleClass('active');
        $('html').toggleClass('overflow');
    }
}

$(function() {

    modal('.btn-open-modal-js');
    modal('.modal__close');
    linkToSrroll();
    fixedHeader();
    toggleMenu();
    togglePoints();

});

$(window).scroll(function() {
    fixedHeader();
});

$(window).resize(function() {
    fixedHeader();
});




//= partials/video.js
