$('[data-myclick=checkbox]').on("click", function () {
    if ($(this).prop("checked")) {
        $(this).css("opacity", 0);
    } else {
        $(this).css("opacity", 1);
    }
})