'use strict'

var cont = document.querySelector('#cont');
console.log(cont);

cont.style.transition = '3s';
cont.style.transitionTimingFunction = 'ease-in-out';

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(cont.offsetWidth);
console.log(cont.offsetHeight);

cont.style.left = (window.innerWidth - cont.offsetWidth) / 2 + 'px';
cont.style.top = (window.innerHeight - cont.offsetHeight) / 2 + 'px';

function left(){
    console.log('to_left');
    console.log(cont.style.left);
    var am = 0;
    let timerId;

    var offset = cont.style.left.substring(0, cont.style.left.length - 2);
    console.log('in_do');
 
    cont.style.transform = 'translateX(-' + offset + 'px)';console.log(am);

    console.log('stop_left');
}

function right(){
    console.log('to_right');
    console.log(cont.style.left);

    var offset = window.innerWidth - cont.offsetLeft - cont.offsetWidth;
    cont.style.transform = 'translateX(' + offset + 'px)';

    console.log('stop_right');
}

function center(){
    console.log('to_center');
    cont.style.transform = 'translate(0px, 0px)';
    console.log('stop_center');
}

function to_top(){
        console.log('to_top');
        console.log(cont.style.top);

        var offset = cont.style.top.substring(0, cont.style.top.length - 2);
        cont.style.transform = 'translateY(-' + offset + 'px)';
        console.log('stop_top');
}

function to_botton(){
    console.log('to_botton');
    console.log(cont.style.top);

    var offset = window.innerHeight - cont.offsetTop - cont.offsetHeight;
    cont.style.transform = 'translateY(' + offset + 'px)';
    console.log('stop_botton');
}


var leftButton = document.querySelector('#left');
var rightButton = document.querySelector('#right');
var centerButton = document.querySelector('#center');
var topButton = document.querySelector('#up');
var downButton = document.querySelector('#down');
leftButton.onclick = function () { center(); setTimeout(left, 3000);};
rightButton.onclick = function () { center(); setTimeout(right, 3000); };
// centerButton.onclick=center;
topButton.onclick = function () { center(); setTimeout(to_top, 3000); };
downButton.onclick = function () { center(); setTimeout(to_botton, 3000); };