//send a message to the console
// console.log("Is this page loading?");

//alert("this is a function!");

//boolean to toggle states
var title_showing = true;

//add event listener to element, event is click, displayElement is the function that will
//be called when the user clicks on the element
document.getElementById("title").addEventListener("click", display_second_element);


//function is being defined here- display element
function display_second_element(){

	//if else statement to determine behavior 
	//if the paragraph is showing, do something
	//else, do something else
	if(title_showing == true){
		document.getElementById("team_usa").style.display="none";

		title_showing = false;
	}
	else{
		document.getElementById("team_usa").style.display="inherit";
		

		title_showing = true;

	}	

}


// ----


//boolean to toggle states
var title_2_showing = false;

//add event listener to element, event is click, displayElement is the function that will
//be called when the user clicks on the element
document.getElementById("title_2").addEventListener("click", displayElement);


//function
function displayElement(){

	//if else statement to determine behavior 
	//if the paragraph is showing, do something
	//else, do something else
	if(title_2_showing == true){
		document.getElementById("gold_medals").style.display="none";

		
		title_2_showing = false;
	}
	else{
		document.getElementById("gold_medals").style.display="inherit";

		title_2_showing = true;

	}	

}