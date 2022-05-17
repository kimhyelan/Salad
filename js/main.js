$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed : 1000,
        slidesToShow : 1,
      });

    $(".variable").slick({
        dots: false,
        infinite: true,
        //variableWidth: true,
        slidesToShow : 3,
        slidesToScroll : 1,
        autoplay : false,
        autoplaySpeed : 2000,
        asNavFor: '.slider-for'

      });
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.variable'
      });

     /* $('#panel1-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false
      }); */

      $('.tabSet').each(function(){       
        var anchor = $(this).find('.tabs a');
        var anchor_on = $(this).find('.tabs a.on');
        var phref_on =  anchor_on.attr('phref');
        var this_panel = $(this).find('.panel')
      
     //   $('.panel').hide()
        $(phref_on).css({display:'flex'});
        anchor.each(function(){
             var phref = $(this).attr('phref');
         
              $(this).click(function(){
                  this_panel.hide();
                anchor.removeClass('on'); //$('.tabs a')
                $(phref).css({display:'flex'});
                $(this).addClass('on');
  
            }) //click
         }) //anchor
       })  //tabSet
})