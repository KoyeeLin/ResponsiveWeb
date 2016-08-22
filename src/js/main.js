
/*var $=function(id){
    return document.getElementById(id);
}

function pauseAndplay(){

   $("audio-control").click(function() {
       if($("audio").paused){
            $("audio").play();
       }else{
            $("audio").pause();
       }

   });
}
 function init(){
    pauseAndplay();
 }
init();*/
window.onload=function(){

    /*控制music的播放和停止*/
    var audio=$("#audio")[0];
    /*$("#audio-control").click(function() {
        if(audio.paused){
            audio.play();
            $(this).toggleClass('play');
        }else{
            audio.pause();
            $(this).toggleClass('');
        }
    });*/
    $("#audio-control").click(function(){
        $(this).toggleClass('play');

        if($(this).hasClass('play')){
            audio.play();
        }else{
            audio.pause();
        }
    })

    /*调用滚动广告*/
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoHeightClass: true,
        dots: true,
        //nav: true
    });
}


