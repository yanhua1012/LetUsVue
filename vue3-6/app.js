var vm = new Vue({
    el: "#app",
    data: {
       show: true,
    },
    methods: {
       counter: function() {
            console.log(this.$refs.count.innerText)
            const num = parseInt(this.$refs.count.innerText, 10) + 1;
            this.$refs.count.innerText = num;
            this.$el.style.color = "red";
       },
       setShow: function() {
            this.show = !this.show;
       },
       test: function() {
            console.log(this.$el);
       }
    }
});