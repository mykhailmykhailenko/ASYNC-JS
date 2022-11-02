const h1 = document.querySelector('h1');

const id = setInterval(tick, 1000);
let counter = 0;

function tick(){
    h1.textContent = ++counter;
}

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    clearInterval(id);
})