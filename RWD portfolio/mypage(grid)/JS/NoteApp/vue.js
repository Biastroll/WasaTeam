new Vue({
    el: ".app",
    data: {
        noteText: "123"
        // noteDate: '',
        // noteTime: '',
        // noteContent: ""
        // noteContent: [noteText,noteDate,noteTime]
        // noteContent: [{
        //     noteText: '請輸入記事...'
        // },{
        //     noteDate: '2'
        // },{
        //     noteTime: '3'
        // }]
    }
    // ,
    // methods: {
    //     addNote : function(){
    //         this.noteContent.unshift({
    //             noteText: '',
    //             noteDate: '',
    //             noteTime: ''
    //         })
    //     },
    //     removeNote : function(){
    //         this.noteContent.shift({
    //             noteText: '',
    //             noteDate: '',
    //             noteTime: ''}
    //         )
    //     }
    // }
    // computed: {
    //     render : function(){
    //         return this.noteContent.map(function(content){
    //             return "內容: " + content.noteText + "時間: " +  content.notDate + " " + content.noteTime 
    //         })
    //     }
    // }
})