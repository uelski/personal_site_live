$(document).ready(function() {

console.log('connected');

$("#about_button").click(function() {
  scrollTime('about');
  $("#about").show('slow');
})

$("#projects_button").click(function() {
  scrollTime('show-div')
})

$("#contact_button").click(function() {
  scrollTime('footer')
})

$('#about').hide();




})//end of document.ready

function scrollTime(did) {
  var aTag = $("div[id='" + did + "']");
  $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}
