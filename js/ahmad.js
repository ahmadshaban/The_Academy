$(window).scroll(function(){
  var sc = $(window).scrollTop();
  if(sc>150){
   $("#navtwo").addClass("ahmad");
   
     }else{
    $("#navtwo").css('transition','all 1s');
    $("#navtwo").removeClass("ahmad");
   
   
  }
  
  });

//* -------------------------------------------------//* 

$(document).ready(function(){
  
  $('.tlt').textillate({ 
    
   
    // in animation settings

    in: { effect: 'fadeIn', delay:100},
   
    out: { effect: 'rollOut'  },

    loop: true,

  }); //*end-function**/

  }); //*end start  //* 



        // table //
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// -----------------------**/

 /*
===================================================================================
                     preload   
===================================================================================
 */
var preloader = document.getElementById('load');
function myfunction(){
  $(".load").fadeOut("slow");
  $(".wrapper").fadeOut("slow");
}
 /*
===================================================================================
                     preload   
===================================================================================
 */
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  



  



  




  
  



  





  
  

  