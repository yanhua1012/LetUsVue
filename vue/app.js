var vm = new Vue({
    el: "#app",
    data: {
        message: "Hello World!",
        list: ["王大明", "劉小花", "歐陽大大"],
        isShow: false
    },
    methods: {
        test() {
            alert("Hi");
        }
    }
});