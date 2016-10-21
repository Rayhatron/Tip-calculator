
var billAmount;
var services;
var peopleSharing;

//Get data from form
function getData(){
	billAmount =  document.getElementById("billInput").value;
	services =  document.getElementById("serviceRating").value;
	peopleSharing =  document.getElementById("peopleInput").value;

	if(peopleSharing == ""){
		peopleSharing = 1;
	}

	return true;
	alert("Bill: " + billAmount + "Service: " + services + "People: " + peopleSharing );
}


function calculateTip(){
	getData();
	

}