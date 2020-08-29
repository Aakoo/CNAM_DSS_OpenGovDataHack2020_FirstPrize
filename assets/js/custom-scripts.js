$(document).ready(function(){
  'use strict';

  //===== Wow Animation Setting =====//
  var wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  });

  wow.init();

  //===== Display Image Script =====//
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#rslt-img').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#upld-file").change(function(){
    readURL(this);
  });

  //===== To DO List Add Task Field =====//
  $('.ad-tsk-btn').on('click', function(){
    $('div.add-tsk').slideToggle();
    return false;
  });

  //===== To Do List Deleted =====//
  $('.td-lst > li > a').on('click', function () {
    $(this).parent('li').slideUp();
    return false;
  });

  var counter = 0;
  var skns = ['grn-td','blu-td','red-td','ylw-td'];
  $('.add-tsk form > button').on('click', function () {
    var task_list = $('ul.td-lst');
    var task_item = $('.add-tsk form > input').val();
    var date = new Date();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul',
    'Aug','Sep','Oct','Nov','Dec'];
    var current_date = date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear();
    if (task_item !== '' && task_item !== 'undefined') {
      if(counter == skns.length){
        counter = 0;
      }
      $(task_list).prepend('<li><h6>' + task_item + '</h6> <span>' + current_date + '</span> <a href="#" title=""><i class="icon ion-android-delete"></i></a></li>');
      $('.td-lst > li').on('click', function () {
        $(this).toggleClass('active');
      });
      $('.add-tsk form > input').addClass('null');
      $('.add-tsk form > input').val('');
      $('.add-tsk form > input').focus();
      var attribute = $('ul.td-lst').eq(0).children('li');
      $(attribute).attr('class', skns[counter]);
      counter++;
      return false;
    }
    return false;
  });

  //===== Topbar Links =====//
  $('.topbar-lists > li > a').on('click', function () {
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== TypeIt =====//
  if ($('.explr-inf > h4 span').length) {
    new TypeIt('.explr-inf > h4 span', {
      strings: ['You want this', 'You will get this'],
      speed: 200,
      breakLines: false,
      loop: true,
      waitUntilVisible: true
    }).go();
  }

  //===== Vector Map =====//
  if ($.isFunction($.fn.vectorMap)) {
    $('#vc-map').vectorMap({
      map: 'world_en',
      backgroundColor: false,
      hoverOpacity: 0.7,
      selectedColor: '#7fc4e5',
      color: '#999999',
      borderColor: '#bcbcbc',
      enableZoom: true,
      showTooltip: true,
      scaleColors: ['#C8EEFF', '#006491'],
    });
  }

  //===== Sidepanel Script =====//
  $('.sidebanel-btn').on('click',function(){
    $('.sidepanel').toggleClass('active');
    return false;
  });

  //===== Sidepanel Options Script =====*/
  $('.option-list a').on('click', function () {
    $('.option-list a').removeClass('applied');
    $(this).addClass('applied');
    return false;
  });

  //===== Theme Options Script =====*/
  $('.light-btn').on('click', function () {
    $('header, body').removeClass('dark-bg');
    return false;
  });

  $('.semi-dark-btn').on('click', function () {
    $('header').addClass('dark-bg');
    return false;
  });

  $('.dark-btn').on('click', function () {
    $('body').addClass('dark-bg');
    return false;
  });

  //===== Side Header Options Script =====*/
  $('.mini-header-btn').on('click', function () {
    $('main').removeClass('header-expand');
    $('.usr-inf').slideUp('slow');
    return false;
  });

  $('.full-header-btn').on('click', function () {
    $('main').addClass('header-expand');
    $('.usr-inf').slideDown('slow');
    return false;
  });

  //===== Search Script =====//
  $('.srch-btn').on('click',function(){
    $('.hdr-srch-bx').addClass('active');
    return false;
  });

  $('.srch-cls-btn').on('click',function(){
    $('.hdr-srch-bx').removeClass('active');
    return false;
  });

  //===== Refresh Content =====//
  $('.refrsh-btn').on('click', function(){
    $(this).parent().parent().find('div.wdgt-ldr').addClass('active').delay(3000).queue(function(next){
      $(this).removeClass('active');
      next();
    });
    return false;
  });

  //===== Expand Content =====//
  $('.expnd-btn').on('click', function(){
    $(this).parent().parent().toggleClass('ful-wdgt');
    return false;
  });

  //===== Pricing Plan Script =====//
  $('.prc-pln').on('mouseenter', function(){
    $(this).toggleClass('active');
    $(this).children().find('ul.prc-pln-lst').slideToggle();
  });

  //===== Menu Script =====//
  $('.mnu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.mnu-wrp').toggleClass('fadin');
    $('html').toggleClass('mnu-actv');
    return false;
  });

  //===== Header =====//
  $('.menu-btn').on('click', function () {
    $('main').toggleClass('header-expand');
    $('.usr-inf').slideToggle('slow');
    return false;
  });
  $('nav li.menu-item-has-children > a').on('click', function () {
    $(this).parent().siblings().children('ul').slideUp();
    $(this).parent().siblings().removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== ToolTip =====//
  if ($.isFunction($.fn.tooltip)) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  //===== Popover =====//
  if ($.isFunction($.fn.popover)) {
    $('[data-toggle="popover"]').popover();
  }

  //===== Weather =====//
  if ($.isFunction($.fn.ideaboxWeather)) {
    $('#weather').ideaboxWeather({
      location    :'Lahore, Pakistan'
    });
  }

  //===== Scrollbar =====//
  if ($.isFunction($.fn.slimscroll)) {
    $('nav, .td-wrp, .msgs-lst-wrp, .sal-lst-wrp, .cmnts-wrp').slimscroll({});
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.fancybox)) {
    $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
  }

  //===== Text Editor =====//
  if ($.isFunction($.fn.Editor)) {
    $("#text-editor").Editor();
  }

  //===== Select =====//
  if ($('select').length > 0) {
    $('select').selectpicker();
  }

  //===== TouchSpin =====//
  if ($.isFunction($.fn.TouchSpin)) {
    $('.qnty > input').TouchSpin();
  }

  //===== Count Down =====//
  if ($.isFunction($.fn.downCount)) {
    $('.cmng-tim').downCount({
      date: '12/12/2019 12:00:00',
      offset: +5
    });
  }

  //===== Count Down =====//
  if ($.isFunction($.fn.circliful)) {
    $("#upld").circliful({
      animationStep: 5,
      foregroundBorderWidth: 10,
      backgroundBorderWidth: 10,
      backgroundColor: 'rgba(255,255,255,.2)',
      foregroundColor: '#ff6966',
      fontColor: '#fff',
      textStyle: 'font-size: 40px;font-family: Barlow;font-weight: 300;',
      percent: 35,
      halfCircle: 1,
    });
  }

  //===== Accordion =====//
  $('#acordn .acrdn-cnt').hide();
  $('#acordn h4:first').addClass('active').next().slideDown(500).parent().addClass('activate');
  $('#acordn h4').on('click', function() {
    if ($(this).next().is(':hidden')) {
      $('#acordn h4').removeClass('active').next().slideUp(500).parent().removeClass('activate');
      $(this).toggleClass('active').next().slideDown(500).parent().toggleClass('activate');
    }
  });

  $('#acordn2 .acrdn-cnt').hide();
  $('#acordn2 h4:first').addClass('active').next().slideDown(500).parent().addClass('activate');
  $('#acordn2 h4').on('click', function() {
    if ($(this).next().is(':hidden')) {
      $('#acordn2 h4').removeClass('active').next().slideUp(500).parent().removeClass('activate');
      $(this).toggleClass('active').next().slideDown(500).parent().toggleClass('activate');
    }
  });

  $('#acordn3 .acrdn-cnt').hide();
  $('#acordn3 h4:first').addClass('active').next().slideDown(500).parent().addClass('activate');
  $('#acordn3 h4').on('click', function() {
    if ($(this).next().is(':hidden')) {
      $('#acordn3 h4').removeClass('active').next().slideUp(500).parent().removeClass('activate');
      $(this).toggleClass('active').next().slideDown(500).parent().toggleClass('activate');
    }
  });

  //===== Owl Carousel =====//
  if ($.isFunction($.fn.owlCarousel)) {

    //=== Comments Carousel ===//
    $('.cmnts-car').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 15000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      navText: [
      "<i class='fa fa-angle-up'></i>",
      "<i class='fa fa-angle-down'></i>"
      ]
    });
    
  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {
    //===== Product Image Carousel =====//
    $('.prd-img-car').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      slide: 'li',
      fade: true,
      asNavFor: '.prd-thumb-car'
    });
    $('.prd-thumb-car').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.prd-img-car',
      dots: false,
      arrows: false,
      slide: 'li',
      vertical: true,
      centerPadding: '0px',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      ]
    });
  }

});//===== Document Ready Ends =====//


$(window).on('load',function(){
  'use strict';

  var topbar_height = $('.topbar').innerHeight();
  $('main').css({'padding-top': topbar_height});
  $('header').css({'top': topbar_height});

  var header_width = $('header').innerWidth();
  $('main').css({'padding-left': 125, 'padding-right': topbar_height - 30});

  //===== Isotope =====//
  if (jQuery('.fltr-itm').length > 0) {
    if (jQuery().isotope) {
      var jQuerycontainer = jQuery('.masonry, .msonry'); // cache container
      var jQuerycontainer2 = jQuery('.msonry2'); // cache container
      jQuerycontainer.isotope({
        itemSelector: '.fltr-itm',
        columnWidth: 1,
        layoutMode: 'fitRows',
      });
      jQuerycontainer2.isotope({
        itemSelector: '.fltr-itm',
        columnWidth: 1
      });
      jQuery('.fltr-btns a, .fltr-lnks a').click(function () {
        var selector = jQuery(this).attr('data-filter');
        jQuery('.fltr-btns li, .fltr-lnks li').removeClass('active');
        jQuery(this).parent().addClass('active');
        jQuerycontainer.isotope({ filter: selector });
        jQuerycontainer2.isotope({ filter: selector });
        return false;
      });
      jQuerycontainer.isotope('layout'); // layout/layout
      jQuerycontainer2.isotope('layout'); // layout/layout
    }

    jQuery(window).resize(function () {
      if (jQuery().isotope) {
        jQuery('.masonry, .msonry, .msonry2').isotope('layout'); // layout/relayout on window resize
      }
    });
  }
});//===== Window onLoad Ends =====//

//===== Sticky Header =====//
$(window).on('scroll',function () {
  'use strict';

  var menu_height3 = $('.sticky-header').innerHeight();
  var scroll = $(window).scrollTop();
  if (scroll >= menu_height3) {
    $('body').addClass('sticky-active');
  } else {
    $('body').removeClass('sticky-active');
  }
});//===== Window onScroll Ends =====//
