Vue.component("example", {
    template: `
    <div>test component</div>
    `,
    created: function() {
        // 註冊一個監聽的 open 事件
        this.$on('open', function() {
            console.log("執行 open function");
        }); 
    }
});

var app = new Vue({
    el: "#app", // 定義 render 區域
    data: {

    },
    methods: {
        clickEvent: function() {
            this.$refs.myExampleController.$emit("open"); // 觸發子控制項的 open 事件
        }
    }
});