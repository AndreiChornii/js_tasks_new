'use strict'
var UserManager = {
    data : [],
    btnFind : document.querySelector('#btnFind'),
    btnList : document.querySelector('#btnList'),
    btnClear : document.querySelector('#btnClear'),
    name : document.querySelector('#name'),
    block : document.querySelector('#block')
};
// console.log(UserManager);

UserManager.findUser = function(){
    // console.log('look');
    // console.log(this);
    // console.log(this.name.value);
    var found = 0;
    for(var i = 0; i < this.data.length; i++){
        if(this.data[i] === this.name.value) found = 1;
    }
    if (found) {
        this.block.innerText = 'User exists';
    }else{
        this.data.push(this.name.value);
        this.block.innerText = 'User was added';
    }
}

UserManager.listUser = function(){
    var discribe = '';
    for(var key in this.data){
        discribe += this.data[key] + '\n';
    }
    this.block.innerText = discribe;
}

UserManager.clearBlock = function(){
    this.block.innerText = '';
}

UserManager.init = function(){
    this.btnFind.onclick = this.findUser.bind(this);
    this.btnList.onclick = this.listUser.bind(this);
    this.btnClear.onclick = this.clearBlock.bind(this);
}

UserManager.init();