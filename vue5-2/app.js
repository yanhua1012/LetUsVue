var vm = new Vue({
    el: "#app",
    data: {
       test: "",
    },
    watch: {
       test: function(newValue, oldValue) {
            alert(`新值:${newValue}  舊值:${oldValue}`);
       }
    }
});