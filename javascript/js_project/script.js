var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li')
var del = document.getElementsByClassName('del')


function changeClass() {
    console.log(this.classList)
    this.classList.toggle('done')

}


function deleteList() {

    ul.removeChild(this.parentElement)
}



function inputLength() {
    return input.value.length;
}

function createListElement() {
    var span = document.createElement("span");
    var button = document.createElement("button");
    var li = document.createElement("li");


    li.appendChild(document.createTextNode(input.value));
    button.appendChild(document.createTextNode("Del"))
    button.className = 'del'
    span.appendChild(li);

    span.appendChild(button);
    ul.appendChild(span);
    addDoneTag()
    addDeleteTag()
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



function addDoneTag() {
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", changeClass)
    }
}

function addDeleteTag() {
    for (var i = 0; i < del.length; i++) {
        del[i].addEventListener("click", deleteList)
    }

}


addDoneTag()
addDeleteTag()
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);