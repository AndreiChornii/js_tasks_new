'use strict'

function prev(){
    var color = container.style.backgroundColor;
    // console.log(color);
    var idx = names.indexOf(color);
    // console.log(idx);
    if (idx ===  names.length -1 ) {
        idx = 0;
        console.log("ravno");
        console.log(names[idx]);
    }else{
        idx++;
        console.log("ne_ravno");
        console.log(names[idx]);
    }
    
    container.style.backgroundColor = names[idx];
}

function next(){
    var color = container.style.backgroundColor;
    var idx = names.indexOf(color);
    // console.log(idx);
    if (idx ===  0 ) {
        idx = names.length -1;
        console.log("ravno");
        console.log(names[idx]);
    }else{
        idx--;
        console.log("ne_ravno");
        console.log(names[idx]);
    }
    
    container.style.backgroundColor = names[idx];
}

var names = ['red', 'blue', 'green', 'maroon', 'orange', 'olive', 
             'yellow', 'aqua', 'purple', 'teal'];

console.log(names.length);

var container = document.querySelector('#output_div');
// console.dir(container);
container.style.backgroundColor = names[0];

var prev_btn = document.querySelector('#prev');
prev_btn.onclick = prev;
var next_btn = document.querySelector('#next');
next_btn.onclick = next;
