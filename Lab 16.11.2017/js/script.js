$(document).ready(function(){
    var i = 0;


    var slider = [
        {
            title: "header 1",
            description: "descripton 1",
            imagUrl : "http://www.menucool.com/slider/prod/image-slider-2.jpg"
        },

        {
            title: "header 2",
            description: "descripton 2",
            imagUrl : "https://www.jssor.com/demos/img/home/02.jpg"
        },

        {
            title: "header 3",
            description: "descripton 3",
            imagUrl : "http://www.menucool.com/slider/prod/image-slider-5.jpg"
        },

        {
            title: "header 4",
            description: "descripton 4",
            imagUrl : "http://www.builtbyevolve.com/images/plugins/nerve-slider/splash.jpg"
        }
    ]


    var n = slider.length;
    var sliderWidth = parseFloat($("#myId").css("width"));
    $("#slider").css("width",sliderWidth*n+"px");


    // Create item-slider
    for(var j=0; j < n; j++){
        $("<div class='item-slider' style='width:"+sliderWidth+"px;background-image:url("+slider[j].imagUrl+")'>"+
            "<h1>"+slider[j].title+"</h1>"+
            "<p>"+slider[j].description+"</p>"+
        "</div>")
            .appendTo("#slider");
    }


    // saga cevirmek
    $("#next").on("click",function(){
        i++;
        if(i > (n-1)){
            i=0;
        }
        $("#slider").animate({
            left: -i*sliderWidth+"px"
        },1000);
    });


    // sola cevirmek
    $("#prev").on("click",function(){
        i--;
        if(i < 0){
            i = n;
        }
        $("#slider").animate({
            left: -i*sliderWidth+"px"
        },1000);
    });

  

});