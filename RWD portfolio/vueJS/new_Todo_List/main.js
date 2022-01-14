const vm = Vue.createApp({
    data() {
        return {
            newTodo: '',
            newContent: '',
            newDate: '',
            newTime: '',
            todos: [],
        };
    },
    methods: {
        createTodo(newContent, newDate, newTime){
            if(newContent!='' || newDate!='' || newTime!=''){
                let newTodo = {
                    id: this.todos.length +1,
                    content: this.newContent,
                    postTime: this.newDate + ' ' + this.newTime,
                    complete: false,
                };
    
                this.todos.unshift(newTodo);
                // this.todos.push(newTodo);
    
                this.newContent = '';
                this.newDate = '';
                this.newTime = '';                
            }
        },
        deleteTodo(todo,index){
            let result = confirm(`Delete todo: "${ todo.content }" ?`)
            if(result){
                this.todos.splice(index, 1)
            }
        },
    },
}).mount('#app');