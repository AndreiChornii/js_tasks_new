'use strict'

var names = ['vasa', 'pitya', 'anya', 'vera', 'alex'];

function render(data, containerId) {
    
    console.log(container);

    container.innerHTML = '<ul></ul>';

    var res = '';
    for(const item of data){
        res+= `<li>${item}</li>`;
    }
    container.lastChild.innerHTML = res;
    console.log(res);
}

function renderList(containerId){
    console.log(containerId);
    console.log(containerId.children);

    for(const item of containerId.children){
        console.log(item);
        item.onclick = function(){
            alert('Вы выбрали имя ' + item.innerText)
        };
    }
}

var container = document.querySelector('body');
render(names, container);

var containerLi = document.querySelector('ul');
renderList(containerLi);

