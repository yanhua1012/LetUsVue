Vue.component("example", {
    template: `
        <p>{{ val }}</p>
    `,
    props: ["val"]
});

var vm = new Vue({
    el: "#app",
    data: {
        valueA: "apple"
    },
    methods: {
      
    }
});