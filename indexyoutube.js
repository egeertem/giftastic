
var pageCounter = 1;

$("#btn").on("click", function (event) {
 event.preventDefault();

var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-"+pageCounter+".json");
ourRequest.onload = function () {


var ourData = JSON.parse(ourRequest.responseText);	
renderHTML(ourData);

}

ourRequest.send();

pageCounter ++;


});


function renderHTML (data) {
	var htmlString = "";

	for (var i = 0; i < data.length; i++) {
		
		htmlString += "<p>" + data [i].name + "is a " + data[i].species + "</p>";



	}

$("#animal-info").append(htmlString);



}


