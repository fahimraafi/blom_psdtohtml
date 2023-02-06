// BANNER PART SLICK SLIDER START
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
// BANNER PART SLICK SLIDER END


// BACK TO TOP BUTTON FUNCTION START
  //==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 400){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
// BACK TO TOP BUTTON FUNCTION END

// STICKY HEADER START
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_header');
    }
    else {
         $('.navbar').removeClass('sticky_header');
    }
    });  
  // STICKY HEADER END

// PORTFOLIO SLICK SLIDER START
$(function(){
    $('.portfolio_slick').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<i class="fa-solid fa-arrow-left-long portfolioprev"></i>',
      nextArrow: '<i class="fa-regular fa-circle-right scroll_right portfolionext"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        } 
      ]
    });
  })
  // PORTFOLIO SLICK SLIDER END

  // TEAMS SLICK SLIDER START
  $('.team_slick').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-arrow-left-long teamprev"></i>',
    nextArrow: '<i class="fa-regular fa-circle-right scroll_right portfolionext"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // TEAMS SLICK SLIDER END

  // WEB DESIGN MENU ITEM DROPDOWN JS START
  $(function(){
    var dropdown = document.getElementsByClassName("dropdown_btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
  }) 
  // WEB DESIGN MENU ITEM DROPDOWN JS END 

  // HEADER BANNER SLICK SLIDER START
  $('.banner_slick').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    fade: true,
    fadeSpeed: 2000,
    cssEase: 'linear',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<i class="fa-solid fa-angles-left bannerprev"></i>',
    nextArrow: '<i class="fa-solid fa-angles-right bannernext"></i>',
  });
  // HEADER BANNER SLICK SLIDER END