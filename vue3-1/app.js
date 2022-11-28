var vm = new Vue({
    el: "#app",
    data: {
        count: 0
    },
    methods: {
        addCounter: function() {
            this.count++;
        }
    }
});