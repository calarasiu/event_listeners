var button = document.getElementById("add_new");
var input = document.getElementById("new_task");
var list = document.getElementById("tasks_list");

function inputLength(){
  return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
  if (inputLength() > 0){
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);