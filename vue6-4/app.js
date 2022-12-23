Vue.component("example", {
    template: `
    <button @click="handleClick">觸發事件</button>
    `,
    methods: {
        handleClick: function() {
            // alert("OK");
            this.$emit("child-event", "test-data"); // 觸發子元件自訂義事件, 參數為 test-data
        }
    }
});

var vm = new Vue({
    el: "#app",
    methods: {
        parentClick: function(value) {
            alert("value from component:" + value);
        }
    }
});