/**
 * 
 */

var myTxtInput;


function getStarted()
{
	myTxtInput = document.getElementById('txtInput');
	myTxtInput.addEventListener('keypress', keyWasPressed, false);
}

function keyWasPressed (e)
{
	var charac = e.which;
	var charCode = String.fromCharCode(charac);
	alert(charCode);
}

function calc(numA, numB)
{
	return numA + numB;
}