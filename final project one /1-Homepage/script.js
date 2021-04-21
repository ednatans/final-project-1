//hamburger menu
$("#hamburger").click(function(){
    $("#hamburgerMenu").addClass("menu-view");
});

$(".close").click(function(){
    $("#hamburgerMenu").removeClass("menu-view");
});
/////////////////


//search bar
$(".searchBar").hide()

$("#searchIcon").click(function(){
    $(".searchBar").slideToggle();
});
/////////////////


//locationbar
$(".locationBar").hide()

$("#locationIcon").click(function(){
    $(".locationBar").slideToggle();
});
/////////////////


//scroll to top
function scrollTopAnimated() {
    $("html, body").animate(
        { scrollTop: "0" }, 500);
}
/////////////////


//hover change image
$('.imslaunch').on('mouseover', function() {
    $(this).find('img').toggle("fast",function(){$(this).attr('src', '../csm_MGP_teaser-treatments-MMM_900x900px_587dc6546b.jpg');
    });
});

/////////////////
