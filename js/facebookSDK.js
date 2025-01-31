"use strict";
/**
 * Facebook SDK asynchronous client
 * 2015, by Cesar Anton Dorantes @reicek
 * for https://platzi.com/blog
 * demo: https://googledrive.com/host/0B_RClkFMLkcpdlZfX0pJYjFaUjQ/
 * Github: https://github.com/reicek/Facebook-SDK-asynchronous-client
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. 
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/
 **/
// *******************************************************
//		Variables Globales
// *******************************************************
//	Facebook App ID
var facebookAppID	= 2188707358080653;//document.getElementById('facebook-login-button').getAttribute("appId");
// -------------------------------------------------------
//	Facebook User Data
var facebookUser = {};
//	Child objects:
//		facebookUser.id
//		facebookUser.name
//		facebookUser.first_name
//		facebookUser.last_name
//		facebookUser.link
//		facebookUser.gender
// 		facebookUser.locale
//		facebookUser.timezone
//		facebookUser.updated_time
//		facebookUser.verified
// -------------------------------------------------------
// *******************************************************
//		Callbacks
// *******************************************************
//	Función a llamar cuando el login se realiza correctamente


	function checkLoginState() {
	  FB.getLoginStatus(function(response) {
	    statusChangeCallback(response);
	  });
	}

/*
var Facebook_correctLogin	= function () {
	//	Obtener los datos del usuario
	//window.location="dashboard.html";
	FB.api('/me?fields=id,name,email,first_name,last_name,friends.limit(10){first_name,last_name,name}', function(response) {
		// Guardar los datos en una variable global
		facebookUser = response;
		// Esconder el boton de login
		//document.getElementById('facebook-login-button').style.display = "none";
		// Saludar al usuario
		if (document.getElementById('fbStatus')){
					//window.location="dashborad.html";

			document.getElementById('fbStatus').innerHTML = '¡Bienvenido ' + facebookUser.name + '!'
		}
		// Mostrar los datos en la consola
		console.log('____________________');
		console.log('Bienvenido ' + facebookUser.name);
		console.log('Tus datos:');
		console.log(facebookUser);
		console.log('____________________');
	})
};
*/
//	Función a llamar cuando la persona esta conectada a Facebook, pero no a tu aplicación
var Facebook_notAuthorized	= function () {
	if (document.getElementById('fbStatus')){
		//document.getElementById('fbStatus').innerHTML = 'Es necesario conectarse a la aplicación.'
	}
};

//	Función a llamar si la persona no esta conectada a Facebook
var Facebook_notConnected	= function () {
	if (document.getElementById('fbStatus')){
		//document.getElementById('fbStatus').innerHTML = 'Es necesario estar conectado a Facebook.'
	}
};

//	Iniciada de forma asíncrona por FB.getLoginStatus()
var statusChangeCallback	= function (response) {
	console.log('____________________');
	console.log('statusChangeCallback');
	console.log(response);
	console.log('____________________');
	//	Login y autorización correctas
	if (response.status === 'connected') {
		//Facebook_correctLogin();
		window.location="dashboard.html"
	//	Login correcto, sin autorización
	} else if (response.status === 'not_authorized') {
		Facebook_notAuthorized();
	} else {
	//	Usuario no conectado a Facebook
		Facebook_notConnected();
	}
};



var finished_rendering = function() {
  console.log("finished rendering plugins");
  var spinner = document.getElementById("spinner");
      spinner.removeChild(spinner.childNodes[0]);
      spinner.removeAttribute("style");
      $('#inic').show();

}

// *******************************************************
//		Iniciar la SDK de Facebook de forma asíncrona
// *******************************************************
window.fbAsyncInit	= function() {
	//	Ajuste de opciones
	FB.init({
		appId      : facebookAppID,
		cookie     : true,
		xfbml      : true,
		version    : 'v3.2'
	});
	//	Llamar statusChangeCallback() al iniciar sesión
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	})
	FB.Event.subscribe('xfbml.render', finished_rendering);

};
// *******************************************************
//		Cargar la SDK de Facebook de foma asíncrona
// *******************************************************
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.2&appId=266306016733854&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'))
// *******************************************************