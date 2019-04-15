$(document).ready(function(){
    var slideIndex = 0;
    carousel();
   
    function carousel(){
        var slides_arr = $("div#slider").children("div.slide");
        
        for(var i = 0; i < slides_arr.length; i++){
            $(slides_arr[i]).css('display', 'none');
        }
        slideIndex++;
        
        if (slideIndex > slides_arr.length) {slideIndex = 1}
        
        $(slides_arr[slideIndex-1]).css('display', 'block');
        setTimeout(carousel, 4000);
    }
});
