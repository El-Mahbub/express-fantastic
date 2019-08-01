$(document).ready(function(){
    var slideSide = function(side,main) {
            if(typeof $(side) !== 'undefined' && typeof $(main) !== 'undefined'){
                if (window.matchMedia('(max-width:768px)').matches) {
                    if (!$(side).is(':hidden')) {
                        $(side).css({display:'none',width:'0px'});
                        $(main).css({left:'0px'});
                    }
                    else {
                        $(side).css({display: 'block',width:'260px'});
                        $(main).css({left:$(side).width()});
                    }
                }
                else {
                    if ($(side).is(':hidden') === false) {
                        $(side).css({display:'none',width:'0px'});
                        $(main).css({left:'0px',position:'initial',width:'100%'});
                    }
                    else {
                        $(side).css({display:'block',width:'260px'});
                        $(main).css({left:$(side).width(),position:'absolute',width:$(main).width()-$(side).width()});
                    }
                }
            }
        }
        $('.navbar-brand').on('click',function(e){
            e.preventDefault();
            slideSide($('#sidebar'),$('.main'));
        });
    slideSide($('#sidebar'),$('.main'));
});