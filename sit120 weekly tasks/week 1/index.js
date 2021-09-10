// Vue component registration
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

// vue app for random color generator
var app = new Vue({
    el: '#app',
    data: {
        rnd: '#86e13a',
    }
})

// function for random color generator
function changeBack() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("view").style.backgroundColor = "#" + randomColor;
    app.rnd = "#" + randomColor;
}