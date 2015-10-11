$(document).ready(function(){

  ///// City Select ///////////////////////////////////////

    $('#city-sel').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.push-body').removeClass('pushed-left');
        $('#filters-desktop').removeClass('pushed-left');
        $('.push-body').toggleClass('pushed-right');
        $('#cities').toggleClass('pushed-right');
    })
    $('#cities > .menu-close').on('click',function(e){
        e.preventDefault();
        $('#city-sel').removeClass('active');
        $('.push-body').removeClass('pushed-right');
        $('#cities').removeClass('pushed-right');
    })
    
    $('.date-container > .item').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    })
    
    
  ///// Filtering: Mobile /////////////////////////////////
    
    $('#filter-sel').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.push-body').removeClass('pushed-right');
        $('#cities').removeClass('pushed-right');
        $('.push-body').toggleClass('pushed-left');
        $('#filters-desktop').toggleClass('pushed-left');
    })
    $('#filters-desktop > .menu-close').on('click',function(e){
        e.preventDefault();
        $('#filter-sel').removeClass('active');
        $('.push-body').removeClass('pushed-left');
        $('#filters-desktop').removeClass('pushed-left');
    })

  ///// Filtering: Desktop ////////////////////////////////

    $('.filter').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });


    
    if($(window).width() < 420){
        
        $('.timeline').find('.item').each(function(){
            var object = $(this).find('.value'),
                text = object.text(),
                newtext = text.split(':')[0];
            object.html(newtext);
        })
        
        
    }
    

});