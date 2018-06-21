
var f2eResult=null;
function f2efilechange()
{
	var mime = document.getElementById("f2emime");
	var file = document.getElementById("f2e_file");
	mime.value = file.files[0].type;
}
function f2eUpdatepre()
{
	document.getElementById("f2epre").src = document.getElementById("f2eres").value;
}
function f2e()
{

	var input, file, fr;
	if (typeof window.FileReader !== 'function') {
		alert("The file API isn't supported on this browser yet.");
		return;
	}

	input = document.getElementById('f2e_file');
	if (!input) {
	alert("Um, couldn't find the fileinput element.");
	}

	else if (!input.files) {
	alert("This browser doesn't seem to support the `files` property of file inputs.");
	}
	else if (!input.files[0]) {
	alert("Please select a file before clicking 'Load'");
	}
	else {
	file = input.files[0];
	fr = new FileReader();
	
	fr.onload = receivedBinary;
	fr.readAsBinaryString(file);
	//fr.onload = receivedText;
	//fr.readAsText(file);
	}


	function receivedBinary() {
		f2eResult = fr.result;
		var b64 = btoa(f2eResult);
		var mime = document.getElementById("f2emime").value;
		document.getElementById("f2eres").value = "data:"+mime+";base64,"+b64;
	}
}


function heimup()
{
	var src = document.getElementById("heimin").value;
	document.getElementById("heim").src = src;
}
    
	