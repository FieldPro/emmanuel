// Hides the close icon when pages loads
$(function() {
    $('#mobileNav, #close')
        .hide();
});

// when hamburger icon is clicked 
$("#icon").click(function(){
    $("#mobileNav").show();
    $("#icon").hide();
    $("#close").show();
});

// when close icon is clicked 
$("#close").click(function(){
    $("#mobileNav").hide();
    $("#icon").show();
    $("#close").hide();
});
