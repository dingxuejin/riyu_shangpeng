
$(()=>{
    $(":radio").parent().removeClass('radioBoxActive');
    $(':radio:checked').parent().addClass('radioBoxActive');
    $(":radio").on('click', function () {
        let name = $(this).attr('name');
        $(`[name=${name}]`).parent().removeClass('radioBoxActive');
        $(this).parent().addClass('radioBoxActive');
    })
})
