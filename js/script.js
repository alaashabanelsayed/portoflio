
let aboutSection =$("#about").offset().top;

$(window).scroll(function (){
    let windowScroll =$(window).scrollTop();
    if (windowScroll > aboutSection -50) {
        $("#backTop").show(600);
        
    } else {
        $("#backTop").fadeOut(500);
    }
})

$("#backTop").click(function () {
   
    $("html,body").animate({scrollTop:0},1000);
});




window.addEventListener("load",function () {
    $(".loader").fadeOut( 1000,function () {
        $("#loading").remove()
        $("body").css("overflow-y","auto")
        
    })
    
})