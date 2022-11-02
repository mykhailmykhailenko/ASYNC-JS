const h1 = document.querySelector('h1');

let id = setTimeout(tick, 1000);
let counter = 0;

function tick(){
    h1.textContent = ++counter;
    id = setTimeout(tick, 1000);

}

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    debugger;
   clearTimeout(id);
})