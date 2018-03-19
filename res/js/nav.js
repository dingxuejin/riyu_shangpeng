$(".nav2").on("click", function () {
    let $ul = $(this).siblings('.nav1');
    let $li=$ul.children("li");
    let height = $ul.children("li").css("height");
    if (height === "0px") {
        $(".nav1").css({border:'1px solid transparent'})
        $('.nav7').css( 'transform', 'rotateX(0deg)')
        $('.nav1>li').animate({ height: 0}, 300)
        $li.animate({ height: 40 ,}, 300)
        $(this).find('.nav7').css( 'transform', 'rotateX(180deg)')
        $ul.css({border:'1px solid #B9DFFB'})
    } else {
        $(".nav1").css({border:'1px solid transparent'})
        $('.nav7').css( 'transform', 'rotateX(0deg)')
        $li.animate({ height: 0 }, 300,function(){
        })
    }
})