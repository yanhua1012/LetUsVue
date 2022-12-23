Vue.component("example", {
    template: `
        <p>{{ value }}</p>
    `,
    props: {
        value: {
            type: Number,
            default: 100,

        }
    }
});

var vm = new Vue({
    el: "#app",
    data: {
        valueA: "apple"
    },
    methods: {
      
    }
});