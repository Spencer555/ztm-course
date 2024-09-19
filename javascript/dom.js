// // Dom Selectors
// document.getElementByTagName("")
// document.getElementByClassName("")
// document.getElementById("")


// document.querySelector("")
// document.querySelectorAll("li, h1") // li and h1 to select multiple elements
// document.querySelectorAll("li") // li a o select  elements

// document.getElementById("img").getAttribute("src") //can be use to get the attribute of anything
// document.getElementById("img").setAttribute("width", '200px')

// className
// className
// classList
// properties for a class html
// classList.add
// classList.remove
// classList.toogle

// learn to cache selectors in variables for efficiency
// parentElement
// children

// grabbing by id is way faster

console.log('red')


var button = document.getElementById('enter');
var input = document.getElementById('input');
var ul = document.getElementById('ul');


button.addEventListener("click", function() {

    if (input.value.length > 0) {
        console.log('i have been clicked');
        console.log(input)

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li)
        input.value = ""
    }
});