var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li')


function changeClass() {
    console.log(this.classList)
        // this.classList.toogle('done')

}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
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


for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", changeClass)
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);