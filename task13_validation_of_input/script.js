'use strict'

var choosed = document.querySelector("#input_type_select");
var container = document.querySelector('#container');
var inputed_data = document.querySelector("#inputed_data");

let desc_el = document.createElement('div');
desc_el.innerText = "Выберите тип ввода";
container.appendChild(desc_el);

choosed.onchange = function () {
    desc_el.innerText = "";
    console.log(container);
    console.log(container.children.length);

    inputed_data.style.display = 'block';
    // if (container.children.length > 3) {
    //     container.removeChild(container.lastChild);
    // }
    // desc_el.style.display = 'none';

    const valid = new validCheck();
    valid.validate();
}

class validCheck {
    constructor() {
        this.text = document.querySelector("#inputed_data").value;
        this.choosed = document.querySelector("#input_type_select").value;
        this.window = document.querySelector("#inputed_data");
        this.container = document.querySelector("#container");
    }
    validate() {
        //this.spl = this.text.split('');
        //console.dir(spl);
        let fl = 0;
        // console.log(this.text);
        console.log(this.choosed);
        for (let i = 0; i < this.text.length; i++) {
            console.log(this.text.charCodeAt(i));
            switch (this.choosed) {
                case 'digits':
                    if ((this.text.charCodeAt(i) < 48) || (this.text.charCodeAt(i) > 57)) {
                        fl = 1;
                    }
                    break;
                case 'words':
                    if ((this.text.charCodeAt(i) >= 0) && (this.text.charCodeAt(i) <= 64)
                        || (this.text.charCodeAt(i) >= 91) && (this.text.charCodeAt(i) <= 96)
                        || (this.text.charCodeAt(i) >= 123)) {
                        fl = 1;
                    }
                    break;
                default:
                    if (((this.text.charCodeAt(i) >= 0) && (this.text.charCodeAt(i) <= 47)
                        || (this.text.charCodeAt(i) >= 58) && (this.text.charCodeAt(i) <= 64)
                        || (this.text.charCodeAt(i) >= 91) && (this.text.charCodeAt(i) <= 96)
                        || (this.text.charCodeAt(i) >= 123))
                        && (this.text.charCodeAt(i) !== 44)
                        && (this.text.charCodeAt(i) !== 46)) {
                        fl = 1;
                    }
                    break;
            }

        }
        console.log(fl);
        if (fl) {
            if (this.window.classList.contains("blue")) {
                this.window.classList.remove("blue");
            }
            if (!this.window.classList.contains("red")) {
                this.window.classList.add("red");
                let tip = document.createElement('div');
                tip.innerText = 'Allowed only ' + this.choosed;
                this.container.appendChild(tip);
            }
        }
        else {
            if (this.window.classList.contains("red")) this.window.classList.remove("red");
            if (!this.window.classList.contains("blue")) {
                this.window.classList.add("blue");
                this.container.removeChild(this.container.lastChild);
            }
        }
    }
}


inputed_data.style.display = 'none';
var input_type_select = document.querySelector("#input_type_select");
console.log(inputed_data);
inputed_data.oninput = function () {
    // var text = inputed_data.value;
    const valid = new validCheck();
    valid.validate();
}

inputed_data.onblur = function () {
    if (inputed_data.classList.contains("blue")) {
        inputed_data.classList.remove("blue");
    }
    if (inputed_data.classList.contains("red")) inputed_data.classList.remove("red");
}

// inputed_data.onfocus = function () {
//     // var text = inputed_data.value;
//     const valid = new validCheck();
//     valid.validate();
// }