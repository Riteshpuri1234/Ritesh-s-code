$(document).ready(function(){
  console.log("hello there");

$("body").on("click", function(){
  $("div").animate({width:'500px'},2000),
  $("div").animate({height:"300px"},2000),
  $("div").hide(1000);

  });

});
