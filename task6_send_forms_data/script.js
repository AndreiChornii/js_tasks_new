'use strict'
var showsecond = document.querySelector("#showsecond");
var second = document.querySelector("#second");

var showthird = document.querySelector("#showthird");
var third = document.querySelector("#third");

var show_rez = document.querySelector("#show_rez");

function showSecondForm(){
    second.style.display = "flex";
}

function showThirdForm(){
    third.style.display = "flex";

    var body = document.querySelector('body');
    var div = document.createElement('div');
    
    var input_data = document.getElementsByClassName('input_data');
    //console.log(input_data);
}

function showRez(){
    var body = document.querySelector('body');
    var div_rez = document.createElement('div');
    
    var input_data = document.getElementsByClassName('input_data');
    //console.log(input_data);

    var arr_of_data = [];
    for (let index = 0; index < input_data.length; index++) {
        var div = input_data[index];
        for (let i = 0; i < div.children.length; i++) {
            const field = div.children[i];
            // console.log(field);
            if (field.type == 'text') {
                const par = field.id;
                const was_input = field.value;
                var p = document.createElement('p');
                p.style.marginTop = '0px';
                p.style.marginBottom = '0px';
                p.innerText = par + ' : ' + was_input;
                div_rez.appendChild(p);

                // let elem_to_arr = [par, was_input];
                // arr_of_data.push(elem_to_arr);
                dataWasInput[par] = was_input;
                }
        }
        // console.log(input_data[index]);
        input_data[index].style.display = "none";
    }
    // Object.entries(dataWasInput) = arr_of_data;
    console.log(dataWasInput);

    var but_send = document.createElement('button');
    but_send.id = "send";
    but_send.innerText = 'Send';
    div_rez.appendChild(but_send);
    
    body.appendChild(div_rez);

    but_send.onclick = send_data;
}

async function send_data(){
    console.log(document.URL);
    let response = await fetch(document.URL + 'be.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            'mode': 'no-cors'
        },
        body: JSON.stringify(dataWasInput)
    });

    if (response.ok) {
        let result = await response.json();
        alert(result)
    }
    else{
        alert('Error HTTP: ' + response.status);
    }
}

showsecond.onclick = showSecondForm;
second.style.display = "none";

showthird.onclick = showThirdForm;
third.style.display = "none";

show_rez.onclick = showRez;

var dataWasInput = {};

