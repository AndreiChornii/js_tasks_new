'use strict'

function addName(container){
    // var container = document.querySelector('#output_div');
    // container.innerHTML = '<ul></ul>';
    // console.log(container);
    

    var name = document.querySelector('#name_field_id').value;
    console.log(name);
    // var res = '';
    // res+= `<li>${name}</li>`;
    // console.log(container);
    var li = document.createElement('li');
    li.innerHTML = `${name}`;
    container.lastChild.appendChild(li);
}


function clear(){
    var container = document.querySelector('#output_div');
    container.innerHTML = "";
    isClicked = false;
}

function toggle() {
    var container = document.querySelector('#output_div');
    if (isClicked) {
        addName(container);
    } else {
        var ul = document.createElement('ul');
        container.appendChild(ul);
        addName(container);
        isClicked = true;
    }
}

var btn_inp = document.querySelector('#add_names');
var isClicked = false;
// console.log(btn_inp);
btn_inp.onclick = toggle;

var btn_del = document.querySelector('#delete_names');
btn_del.onclick = clear;