
$(() => {
    $('.selectDiv').on('click', function () {
        event.stopPropagation();
        let disp = $(this).find('ul').css('display');
        $('.selectDiv ul').hide();
        if (disp === 'none') {
            $(this).find('ul').show();
        }
    })
    $('.selectDiv li').on("click", function () {
        event.stopPropagation();
        let html = $(this).html();
        $(this).parent().siblings().children('input').val(html);
        $('.selectDiv ul').hide();
    })
    $('body').on('click', function () {
        $('.selectDiv ul').hide();
    })
})