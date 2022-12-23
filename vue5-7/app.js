var vm = new Vue({
    el: "#app",
    data: {
         list: []
    },
    methods: {
      
    },
    watch: {
        list: function(newList, oldList) {
            console.log("render 前的值:", this.$refs.ulist.offsetHeight); // render 前的值
            this.$nextTick(function() {
                console.log("render 後的值:", this.$refs.ulist.offsetHeight); // render 後的值
            });
        }
    }
});