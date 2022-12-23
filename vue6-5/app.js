var app = new Vue({
    data: {
        valueA: "apple",
        count: 3170,
    }
});

Vue.component("example", {
    template: `
    <p> appValueA2: {{ appValueA }} count: {{ count }} </p>
    `,
    computed:{
        appValueA: function() {
            return app.$data.valueA;
        },
        count: () => app.$data.count 
    },
    created() {
        app.$on('appEvent', function() {
            this.count++;
        });

        app.$emit('appEvent');
    }
});

var render = new Vue({
    el: "#app", // 定義 render 區域
});