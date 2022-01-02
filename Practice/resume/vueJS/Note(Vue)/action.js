const vm = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: [
                {
                    id: 1,
                    content: 'lorem 1',
                    complete: true
                },
                {
                    id: 2,
                    content: 'lorem 2',
                    complete: true
                },
                {
                    id: 3,
                    content: 'lorem 3',
                    complete: false
                },
            ],
        };
    },
    methods: {
        createTodo(){
            let newTodo = {
                id: this.todos.length +1,
                content: this.newTodo,
                complete: false,
            };

            this.todos.push(newTodo);

            this.newTodo = '';
        },
    }
}).mount('#app');