new Vue({
    el: ".nav",
    data: {
        turnOn: false,
        toggleOn: true
    },
    methods: {
        changeState : function(){
            this.turnOn = !this.turnOn;
            this.toggleOn = !this.toggleOn;
        }
    }
})