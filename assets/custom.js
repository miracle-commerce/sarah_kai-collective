$('.slide_slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

$('.your-class').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.about__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

$('.welcome_logo').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

setTimeout(function(){ 
  $(".product-options-style-radio .option-value-input").removeAttr("disabled");
  $(".product-options-style-radio .option-value-input").click(function(){
    setTimeout(function(){ 
      $(".product-options-style-radio .option-value-input").removeAttr("disabled");
    }, 500);   
  });
}, 500);  


$(".main_pop > h2").click(function(){
  $(this).next(".main_pop_child").toggle();
});    
$(".main_pop .hide_pop").click(function(){
  $(".main_pop_child").hide();
}); 

if(window.location.href.indexOf("sort_by") > -1){           
  $('select#product_grid_sort option[value="Sort"]').removeAttr('selected');
}else{ 
  $('select#product_grid_sort option').removeAttr('selected');
  $('select#product_grid_sort option[value="Sort"]').attr('selected' , 'selected');
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(document).ready(function () {
  $(".accordion_product").click(function () {
    var e = $(this);
    e.hasClass("active")
    ? (e.removeClass("active"), e.next().slideUp(350))
    : (e.parent().parent().find(".accordion-title").removeClass("active"), e.parent().parent().find(".accordion-description").slideUp(350), e.toggleClass("active"), e.next().slideToggle(350));
  });
  
  $(document).on("click", ".product-gallery--media-thumbnail:last-child", function(ee){
    ee.preventDefault();
    $(".product-gallery--navigation").scrollTop($('.product-gallery--navigation')[0].scrollHeight);
  });

  
});

