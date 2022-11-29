var vm = new Vue({
    el: "#app",
    data: {
      count: 0
    },
    methods: {
       counter() {
            this.count++;
       },
       counter2(offset) {
            this.count += offset;
       }
    }
});