//Problem: When clicking on an image user goes to a dead end
//Soultion: create and overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"><div id="overlay-iframe"><iframe src="login.html" scrolling="no" width="425px" height="365px" frameborder="0"></iframe></div></div>');



//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#js-LoginCapture").click(function (event) {
  event.preventDefault();
  
  //Show the overlay
  $overlay.show();

});

//When overlay is clicked hide overlay
$overlay.click(function () {
  $overlay.hide();
});