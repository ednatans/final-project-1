//Hamburger Menu
$("#hamburger").click(function(){
    $("#hamburgerMenu").addClass("menu-view");
});

$(".close").click(function(){
    $("#hamburgerMenu").removeClass("menu-view");
});
/////////////////



//Search Bar
$(".searchBar").hide()

$("#searchIcon").click(function(){
    $(".searchBar").slideToggle();
});
/////////////////



//Location Bar
$(".locationBar").hide()

$("#locationIcon").click(function(){
    $(".locationBar").slideToggle();
});
/////////////////



//Animate location icon
$(document).ready(function(){
    $("button").on('mouseover', function() {
      $("#locationicon").animate(  {
        left: '100px',
        opacity: '0',
        height:'250px',
        width:'250px',
        speed: '600'
        });
    });
});
/////////////////



//Validate email required field
$(".alert").hide();

$(".submitbuton").click(function(){
    if ($("#nolett").val()=="" || $("#nolett").val().length < 8 || $("#nolett").val().length > 8) {
    $(".alert").show();
    }
    setTimeout(function(){ $(".alert").hide(); }, 3000);
});

/////////////////



//Scroll To Top
function scrollTopAnimated() {
    $("html, body").animate(
        { scrollTop: "0" }, 1000);
}
/////////////////
