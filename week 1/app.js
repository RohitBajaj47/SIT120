const app = Vue.createApp({
    data() {
        return {
            todos: [
                { id: 0, text: "Learn Vue", checked: false }
            ]
        }
    },

    methods: {
        toogle(todo) {
            todo.checked = !todo.checked
        }
    }
}).mount('#right');

let n = 0;

function add() {
    n = n + 1;
    var texty = document.getElementById("item2").value;
    app.todos.push({ id: n, text: texty, checked: false });
    document.getElementById("item2").value = '';
}