'use strict'

function CreateDescr(bank_name){
    this.container = document.querySelector('#container');
    this.name = bank_name;

    switch(this.name){
        case "privat":
            this.descr = "ПриватБа́нк — найбільший за розмірами активів український банк і лідер роздрібного банківського ринку України, зареєстрований 19 березня 1992 року. Ініціатором створення банку, його першим головою правління був український бізнесмен та політик Сергій Тігіпко. володіє другою за чисельністю мережею відділень та найбільшою мережею банкоматів і терміналів серед банків України. На початок 2018 року в мережі працювало близько 7,2 тис. банкоматів, 13,3 тис. платіжних терміналів та 141 тис.";
        break;
        case "mono":
            this.descr = "український інтернет-банкінг, створений 2017 року. Для роботи використовується банківська ліцензія Універсал Банку, що входить до групи";
        break;
        case "pumb":
            this.descr = "Основанный в 1991 году, ПУМБ обслуживает как частных, так и корпоративных клиентов. Деятельность банка сосредоточена на коммерческих";
    }

    this.showDescr = function(){
        console.log(this.container.children.length);
        if(this.container.children.length > 1) this.container.removeChild(this.container.lastElementChild);
        let desc_el = document.createElement('div');
        desc_el.innerText = this.descr;
        this.container.appendChild(desc_el);
    }

    // console.dir(this);

    return this;
    
}

function init(){
    // console.log(this.value);
    let descr_obj = new CreateDescr(this.value);
    // console.dir(descr_obj);
    descr_obj.showDescr();
};

let banks_select = document.querySelector('#banks_select');
// console.log(banks_select);
banks_select.onchange = init;