var tipAmount;
var billAmount;
var tipPercentage;
var peopleSharing;
var outputMessage;

//Get and set data from form
function getData(){
	billAmount =  document.getElementById("billInput").value;
	tipPercentage =  document.getElementById("serviceRating").value;
	peopleSharing =  document.getElementById("peopleInput").value;

	if(peopleSharing == ""){
		peopleSharing = 1;
	}
}

//Calculate tip and share if there is more than 1 person
function calculateTip(){
	getData();
	
	tipAmount = (tipPercentage/100) * billAmount;

	if(peopleSharing > 1){
		tipAmount /= peopleSharing;
		document.getElementById("amount").innerHTML = "$" + tipAmount + " each";
		return false;
	}

	document.getElementById("amount").innerHTML = "$" + tipAmount;
	document.getElementById("result").style = "visibility: visible;";
	return false;
}