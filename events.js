var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listElement = document.querySelector("ul").children;


function inputLength() {
	return input.value.length;
}

function createListElement() {
  // create the list element with the value of the user input
	var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  // add the new list element to the ul
  ul.appendChild(li);
  // clear the input value to be ready for a new input
  input.value = "";
  // create the button element
  var newBtn = document.createElement("button");
  // create the label of the btn
  newBtn.appendChild(document.createTextNode("remove"));
  // add the button to each element of the list
  li.appendChild(newBtn);
  // add the event onClick to the created button, that is going to execute the removeParent function
  newBtn.onclick = removeParent;
}

function removeParent(i){
	i.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function strikeThrough(e) {
  if (e.target.tagName === "LI") {
      e.target.classList.toggle("done");
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeThrough);