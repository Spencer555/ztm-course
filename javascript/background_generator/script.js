var color1 = document.getElementById('color1')
var color2 = document.getElementById('color2')
var h3 = document.querySelector('h3')
var body = document.getElementById('gradient')


function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    h3.textContent = `Linear Gradient to Right Left: ${color1.value} Right: ${color2.value}`
}




color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)