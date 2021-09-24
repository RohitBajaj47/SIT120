// this component contains the task name and a checkbox and enables the viewing and completion of tasks
Vue.component('task', {
    props: ['t'],
    template: `
    <section class="flex-row" id="displaytask">
        <h2 @click="$emit('view',t.id)">{{t.name}}</h2><span></span>
        <input type="checkbox" v-model="t.done" @click="$emit('done',t.id)">
    </section>`
})

// this component displays the key details of the selected task
Vue.component('taskview', {
    props: {
        t: Object
    },
    template: `
          <div id="view">
            <h1>{{t.name}}</h1>
            <br>
            <p>{{t.dis}}</p>
            <br>
            <h1>Due in {{t.duein}} days</h1>
            <br>
            <h2>Due on {{t.date}}</h2>
            <br>
            <h3>Importance: {{t.imp}}</h3>
      </div>`
})

// this component is a form where user input thier task details
Vue.component('add-new', {
    props: {
        unique: Number
    },
    data: function () {
        return {
            name: '',
            discription: '',
            duedate: '',
            taskimp: '',
            importance: ['High', 'medium', 'Low'],
            isdone: false,
        }
    },
    template: `
    <section id="addnew">
        <div class="flex-col">
          <label for="taskname">Name</label>
          <input type="text" id="taskname" v-model="name" /><br />
          <label for="taskdisc">Description</label>
          <textarea id="taskdisc" cols="10" rows="5"  v-model="discription" ></textarea>
          <br />
          <select style="width: max-content" v-model="taskimp">
            <option value="" disabled>select importance</option>
            <option v-for="imp in importance">{{imp}}</option>
          </select> 
          <br />
          <label>Add Date</label>
          <input type="date" id="dateinput"  v-model="duedate" />
          <br />
          <h3>Due in {{ duein }} days</h3>
          <br />
          <div class="flex-row" style="justify-content: space-evenly;">
            <button @click="$emit('add',maketask)">Add Task</button>
            <span></span>
            <button @click="$emit('close')">Cancel</button>
          </div>
        </div>
    </section>`,
    computed: {
        duein: function () {
            var date1 = new Date(this.duedate);
            var date2 = new Date();
            var Difference_In_Time = date1.getTime() - date2.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            var due = parseInt(Difference_In_Days) + 1;
            return due;
        },
        maketask: function () {
            var taskarr = { name: this.name, dis: this.discription, date: this.duedate, imp: this.taskimp, done: this.isdone, id: this.unique, duein: this.duein };
            return taskarr;
        }
    }
})

// the main app instance (root) that contains the information about  all the tasks
var app = new Vue({
    el: '#app',
    data: {
        showtasks: true,
        showmenu: false,
        newtask: false,
        viewit: false,
        currenttab: 'All Tasks',
        currentview: '',
        tasks: [{ "name": "Hello 👋 from All Tasks", "dis": "hello from description", "date": "2021-09-24", "imp": "High", "done": false, "id": 1, "duein": 0 },
        { "name": "Click me to view my details 😎", "dis": "i am the described  one", "date": "", "imp": "High", "done": false, "id": 2, "duein": 0 },
        { "name": "Use menu to switch pages 📃", "dis": "nothing here", "date": "2021-09-25", "imp": "", "done": false, "id": 3, "duein": 1 },
        { "name": "i am done 👍🏻", "dis": "i was described ", "date": "", "imp": "High", "done": true, "id": 4, "duein": "" }],
        id: 5,
    },
    methods: {
        addtask: function (task) {
            this.tasks.push(task);
            this.newtask = false;
            this.id = this.id + 1
        },
        close: function () {
            this.newtask = false;
        },
        donetask: function (doneid) {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == doneid) {
                    this.tasks[i].done = true;
                }
            };
        },

        viewtask: function (taskid) {
            this.viewit = true;
            this.currentview = taskid;
        }

    },
})