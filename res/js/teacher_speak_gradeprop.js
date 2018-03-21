$(() => {
    let selectOption1 = ['所有', '班级1', '班级2', '班级3', '班级4', '班级5', '班级6', '班级7']
    let html1 = "";
    selectOption1.map(function (val) {
        let li = `<li>${val}</li>`;
        html1 += li;
    })
    $('.selectCj1 ul').html(html1);

    let selectOption2 = [5, 10, 15, 20, 25, 30, 35, 40,45,50,55,60,65,70,75,80,85,90,95,100]
    let html2 = "";
    selectOption2.map(function (val) {
        let li = `<li>${val}</li>`;
        html2 += li;
    })
    $('.selectCj2 ul').html(html2);
    $('[data-prop=kaosi]').on('click',function(){
        let html=$(this).html();
        console.log(html);
        $('#testStart').show();
    })
    $('[data-prop=reset]').on('click',function(){
        $('#testStart').show();
    })
    $('[data-start=quxiao').on('click',function(){
        $('#testStart').hide();
    })
   
})