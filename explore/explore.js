$(function(){
    $(".toggle").on("click", function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        } else{
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    });
});

/*---Gallery move icin----*/
var counter=1;
setInterval(function(){
    document.getElementById('radio'+ counter).checked=true;
    counter++;
    if(counter > 8){
        counter=1;
    }
}, 5000);