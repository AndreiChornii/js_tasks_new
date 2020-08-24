'use strict'

let check_boxes = document.querySelectorAll('.checkbox');

// console.dir(check_boxes);

function CreateDescr(clickedcheckbox) {
    this.clickedcheckbox = clickedcheckbox;
    this.check_boxes_local = document.querySelectorAll('.checkbox');
    this.show_checkbox = document.querySelector('#show_checkbox');

    this.turnCheckbox = function () {
        for (let index = 0; index < this.check_boxes_local.length; index++) {
            const element = this.check_boxes_local[index];
            if (element.id !== this.clickedcheckbox.id) element.checked = false;
        }
        console.dir(this.show_checkbox);
        this.show_checkbox.disabled = false;
        this.show_checkbox.readOnly = false;
        this.show_checkbox.type = "text";
        switch (this.clickedcheckbox.id) {
            case "block_checkbox":
                this.show_checkbox.disabled = true;
                break;
            case "read_checkbox":
                this.show_checkbox.readOnly = true;
                break;
            case "digits_checkbox":
                this.show_checkbox.type = "number";
                break;
            case "hidden_checkbox":
                this.show_checkbox.type = "password";

        }
    }
}

function init() {
    // console.dir(this);
    let descr_obj = new CreateDescr(this);
    descr_obj.turnCheckbox();
}

check_boxes.forEach(function (el) {
    // el.checked = true; 
    el.onclick = init;
});