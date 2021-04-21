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
        { scrollTop: "0" }, 1000);
}
/////////////////



//fade in change image(doesn't work, need to check how to do)
$('.mplus').on('mouseover', function() {
      $(this).show().fadeIn("fast");
});
/////////////////



//typewriter effect charAt() returns value at specified index
//paragraph 1
var i = 0;
var txt = 'It’s hard to imagine that Jennifer Leng, founder of skincare product line Jyunka, had such a long and winding road to the radiant skin she enjoys now. As a young woman, she lacked the knowledge or money to invest in skincare products, and Singapore’s skincare industry offered few remedies for her sensitive and acne-prone skin. Even after she founded pioneering skincare distribution company Laponie and herself travelled to the UK to study at the London School of Beauty Therapy, her problems were not fully resolved. Her skin gradually improved with access to knowledge and better products, but she continued needing make-up. She chalked it up to genetics.';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter(); // to declare

/////////////////

//paragraph 2
let x = 0;
let letter = 'It wasn’t until 12 years ago that Jennifer met a Japanese scientist who would change her life and her business. The scientist had discovered a way to encapsulate L-ascorbic acid, a derivative of Vitamin C, in a stable form to be delivered to the skin. In testing out the product, Jennifer’s skin was completely changed in just a few months, and eventually she stopped wearing foundation altogether. Together with the scientist, Jennifer developed what became M+ Fluid, the flagship product of Jennifer’s new Jyunka skincare line. Today Jyunka has a small but potent range of 35 products, each thoroughly tested for safety and effectiveness.';
let s = 40;

function countWords() {
  if (x < letter.length) {
    document.getElementById("text-twpg").innerHTML += letter.charAt(x);
    x++;
    setTimeout(countWords, s);
  }
}

countWords();

/////////////////


/////////////////

//paragraph 3
let a = 0;
let alphabet = 'Jyunka now also has two concept centres, at Bedok Point and Pacific Plaza. These concept centres bring together top-of-the-line skincare products with professionally trained consultants, a formula that’s hard to find in a market plagued by hard-sell techniques and customer misinformation.';
let f = 40;

function haveThings() {
  if (a < alphabet.length) {
    document.getElementById("text-stdg").innerHTML += alphabet.charAt(a);
    a++;
    setTimeout(haveThings, f);
  }
}

haveThings();

/////////////////

// JSON 
//don't need click
$(function(){
        $.ajax({
            type: 'GET',
            url: 'file.json',
            dataType: 'JSON',
            success: function(data){
                $.each(data, function(key, value){
                    
                    $("#nameoffounder").prepend(value["first name"] + value["last name"]);
                })
            },//going to keep this just in case there is an error
            error(xhr, status, error){
               console.log(error);
            }
        });
    });
/////////////////

