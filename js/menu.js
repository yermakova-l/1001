$(document).ready(function() {
    var menu_icon = $('#menu_collapsed');
    var main_menu = $('#main_header nav');
    
    $('#menu_collapsed').click(function(e) {
        $('#main_header nav ul').toggleClass('active');
        e.preventDefault();
    });
    $('#main_header nav').click(function(e){
        $('#main_header nav ul').addClass('active');
    });
});