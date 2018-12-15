$(document).ready(function(){
	console.log('loaded main js');
	setInterval(backgroundcolor,100);
});
function backgroundcolor(){
	console.log("js loaded ");
	var colorR = Math.floor((Math.random() * 256));
	var colorG = Math.floor((Math.random() * 256));
	var colorB = Math.floor((Math.random() * 256));
	var colorR1 = Math.floor((Math.random() * 256));
	var colorG1 = Math.floor((Math.random() * 256));
	var colorB1 = Math.floor((Math.random() * 256));
	$("h1").css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
	$("p").css("color", "rgb(" + colorR1 + "," + colorG1 + "," + colorB1 + ")");
}
