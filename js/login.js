var $overlay = $('<div id="overlay"></div>');
var $login = $('<div class="login"><div id="login-close"><span><a href="#" id="login-close">X</a></span></div><div id="login-header"><h1>Login</h1><p>To gain acess to all the awesome location information please login with your username / email address and password.</p></div><div id="login-content"><input type="text" id="login-inputUsername" value="&nbsp;Username or Email"><br><input type="password" id="login-inputPassword" value="Password"><br><input type="checkbox" name="login-checkboxRememberMe"><span>&nbsp;Remember me?</span><br></div><div><button id="login-buttonLogin">Login</button></div><nav id="login-reg-forgot"><a href="#">Register</a><a href="#">Forgotten Password?</a></nav></div>');


//Add overlay
$("body").append($overlay);
$("body").append($login);

//Capture the click event on a link to an image
$("#js-LoginCapture").click(function (event) {
  event.preventDefault();
  
  //Show the overlay
  $overlay.show();
  $login.show();

});


//Close Overlay and Login box when clicking X within Login Box
$("#login-close").click(function () {
  $overlay.hide();
  $login.hide();
});

//Close Overlay and Login box when clicking on Overlay
$("#overlay").click(function () {
  $overlay.hide();
  $login.hide();
});