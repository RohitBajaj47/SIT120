// vue component description
Vue.component('todo-item', {
    data: function () {
        return {
            todos: [
                { name: "Todo item 1" },
                { name: "Todo item 2" },
                { name: "Todo item 3" }
            ],
            checked: true,
        }
    },

    template: '<div><ol><li v-for="todo in todos"><input type="checkbox" name="" id="" v-model="checked"> {{ todo.name }}</li></ol></div>'
})

// vue app
var app = new Vue({
    el: '#app',
    data: {
        rnd: '#86e13a',
    }
})

// color generator function
function changeBack() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("view").style.backgroundColor = "#" + randomColor;
    app.rnd = "#" + randomColor;
}


// string : length
var strings;
function len() {
    strings = document.getElementById("input").value;
    strings = strings.toString();
    document.getElementById("output").innerText = strings.length;
}

// string : uppercase
function upperk() {
    let text = document.getElementById("input").value;
    document.getElementById("output").innerText = text.toUpperCase();
}

// string : lowercase
function lowerk() {
    let text = document.getElementById("input").value;
    document.getElementById("output").innerText = text.toLowerCase();
}

// string : replace
function rep() {
    let text = document.getElementById("input").value;
    text = text.toString();
    let old = prompt("enter the string  replace from [" + text + "]");
    let new_one = prompt("enter a new string : ");
    document.getElementById("output").innerHTML = text.replace(
        old,
        new_one
    );
}

// string : slice
function sli() {
    let text = document.getElementById("input").value;
    text = text.toString();
    let start = prompt("slice from which index number ?");
    let end = prompt("slice to which index number : ");
    document.getElementById("output").innerHTML = text.slice(start, end);
}

// string : charAt
function charati() {
    let text = document.getElementById("input").value;
    text = text.toString();
    let idx = prompt("index number ? ");
    document.getElementById("output").innerHTML = text.charAt(idx);
}

// numbers : toExponential
function expo() {
    let num = document.getElementById("input_n").value;
    num = Number(num.toString());
    document.getElementById("output_n").innerHTML = num.toExponential(2);
}

// numbers : toFixed
function fix() {
    let num = document.getElementById("input_n").value;
    num = Number(num.toString());
    document.getElementById("output_n").innerHTML = num.toFixed(3);
}

// numbers : toPrecision
function prec() {
    let num = document.getElementById("input_n").value;
    num = Number(num.toString());
    document.getElementById("output_n").innerHTML = num.toPrecision(3);
}

// arrays : toString
function tostr() {
    const fruits = ["apple", "banana", "mango"];
    document.getElementById("output_a").innerHTML = fruits.toString();
}

// arrays : join
function jo() {
    const fruits = ["apple", "banana", "mango"];
    document.getElementById("output_a").innerHTML = fruits.join(" * ");
}

// arrays : length
function arrlen() {
    const fruits = ["apple", "banana", "mango"];
    document.getElementById("output_a").innerHTML = fruits.length;
}

// set current date and time
const d = new Date();
document.getElementById("output_gh").innerHTML = d;

// set : full year
function setfu() {
    const d = new Date();
    d.setFullYear(2037, 9, 7);
    document.getElementById("output_gh").innerHTML = d;
    document.getElementById("output_g").innerHTML = d.getFullYear();
}

// set : month
function setmo() {
    const d = new Date();
    d.setMinutes(50);
    document.getElementById("output_gh").innerHTML = d;
    document.getElementById("output_g").innerHTML = d.getMinutes();
}

// get : date
function getda() {
    const d = new Date();
    document.getElementById("output_g").innerHTML = d.getDate();
}

// get : month
function getmo() {
    const d = new Date();
    document.getElementById("output_g").innerHTML = d.getMonth();
}

