

var x = window.matchMedia("(max-width:620px)");
if (x.matches) {
function openNavBar() {
	var navBar = document.getElementById('nav');
	navBar.style.left="0%";
	document.getElementById('bars').style.display="none";
}
function closeNavBar() {
	var navBar = document.getElementById('nav');
	navBar.style.left="-100%";
	document.getElementById('bars').style.display="block";
}
}

var _x = window.matchMedia("(min-width:620px)");

if (_x.matches) {

function nav_up() {
	var navBar = document.getElementById('nav');
	navBar.style.top="-5rem";
	var angleUp = document.getElementById('angle_up');
	angleUp.style.display="none";

	var angleDown = document.getElementById('angle_down');
	angleDown.style.display="block";
}
function nav_down() {
	var navBar = document.getElementById('nav');
	navBar.style.top="0";
	var angleDown = document.getElementById('angle_down');
	angleDown.style.display="none";
	var angleUp = document.getElementById('angle_up');
	angleUp.style.display="block";

}

}


function send() {
	alert("Oops! Actually I did't receive your message... but I'm sure that you must've  written something good or helpful... So Thanks for that!")
}