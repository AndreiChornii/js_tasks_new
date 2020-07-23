var container = document.querySelector('#container');
var add_button = document.querySelector('#add');
var block_name_id = document.querySelector('#block_name_id');

var i = 0;

add_button.onclick = function(){
    var h3 = document.createElement("h1");
    h3.innerHTML = "№" + ++i + ' ' + block_name_id.value;
    h3.style.border = "1px solid black";
    h3.style.margin = "5px";
    container.appendChild(h3);
}