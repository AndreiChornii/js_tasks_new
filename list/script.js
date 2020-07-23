'use strict'

var items = [
    'item-1',
    'item-2',
    'item-3',
    'item-4',
    'item-5',
];

function show(event){
     // alert(this.innerText);
     console.log(event.target.innerText);
}

// var blocks = document.querySelectorAll('h1');
// blocks.forEach(function(block, i){
//     console.log(block);
//     block.onmousemove = show;
// })
// blocks.onclick = show;

// var html = '';
// for (const item of items) {
//     console.log(item);
//     html += '<li onclick=show(this)> + item + </li>'
// }

// document.querySelector('#block').innerHTML = html;

var list = document.querySelector('#block');

for (const item of items) {
    var li = document.createElement('li');
    li.onclick = show;
    li.innerHTML = item;
    list.appendChild(li);
}

