'use strict'

var names = ['Kiev', 'Lviv', 'Odesa', 'Dnepr', 'Harkiv'];

function render(data, containerId) {
    
    console.log(container);

    container.innerHTML = '<ul></ul>';

    var res = '';
    for(const item of data){
        res+= `<li>${item}</li>`;
    }
    container.lastChild.innerHTML = res;
    // console.log(res);
}

function addButton(containerId) {
    var index = 0;
    for(const item of containerId.children){
        var button = document.createElement('button');
        button.id = index;
        index++;
        button.innerText = 'X';
        item.appendChild(button);
    }
}

function renderList(containerId){
    console.log(containerId);
    console.log(containerId.children);

    var div2 = document.querySelector('#block2');
    div2.innerHTML = '<ul></ul>';

    for(const item of containerId.children){
        console.log(item);
        item.children[0].onclick = function(){
            // alert('Вы выбрали имя ' + item.innerText)
            if (item.parentNode.parentElement.id == 'block1') {
                item.remove();
                console.log(item);
                div2.lastChild.appendChild(item);
            } else {
                item.remove();
                console.log(item);
                container.lastChild.appendChild(item);
            }
        };
    }
}

var container = document.querySelector('#block1');
render(names, container);

var containerLi = document.querySelector('ul');
addButton(containerLi);

renderList(containerLi);

