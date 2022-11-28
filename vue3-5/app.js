var vm = new Vue({
    el: "#app",
    data: {
        name: "",
        age: "",
        list: [
            { name: "王小明", age: 25},
            { name: "劉小花", age: 31},
            { name: "歐陽大大", age: 27},
        ]
    },
    methods: {
       add() {
            this.list.push({
                name: this.name,
                age: this.age
            });
       },
       remove(index) {
            this.list.splice(index, 1);
       }
    }
});