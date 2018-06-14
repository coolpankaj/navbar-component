$(document).ready(()=>{
    $(".box").hover(function(){
        $(this).addClass("box-effect");
    },
function(){
    $(this).removeClass("box-effect");
});
$(".show-menu").hover(function(){
    $(this).addClass("show-menu-effect");
},
function(){
$(this).removeClass("show-menu-effect");
});
$(".show-menu").click(function(){
        $(".box").slideToggle("slow");
    });
   
   
});