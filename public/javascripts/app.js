$(document).ready(function() {

console.log('connected');

$("#about_button").click(function() {
  scrollTime('about')
})

$("#projects_button").click(function() {
  scrollTime('show-up')
})

$("#contact_button").click(function() {
  scrollTime('footer')
})



})//end of document.ready

function scrollTime(did) {
  var aTag = $("div[id='" + did + "']");
  $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}
