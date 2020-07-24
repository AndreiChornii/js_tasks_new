var container = document.querySelector('#container');
var add_button = document.querySelector('#add');
var clear_button = document.querySelector('#clear');
var block_name_id = document.querySelector('#block');

var i = 0;
var arr = [];

add_button.onclick = function(){
    var h3 = document.createElement("h1");
    let val = block_name_id.value;
    h3.style.border = "1px solid black";
    h3.style.margin = "5px";

    let pr = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element);
        console.log(val);
        if(element === val) pr = 1;
    }
    
    console.log(pr);
    if(!pr){
        arr.push(val);
        let number = arr.length;
        h3.innerHTML = "№" + number + ' ' + val;
        container.appendChild(h3);
    }
    // console.dir(arr);
}

clear_button.onclick = function(){
    arr = [];
    container.innerHTML = '';
}