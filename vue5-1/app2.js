var vm = new Vue({
    el: "#app",
    data: {
      money: 0,
      usdRate: 31.22,
      jpnRate: 0.2788
    },
    methods: {
       
    },
    computed: {
        usd: function() {
            return Math.round(this.money / this.usdRate * 100) / 100;
        },
        jpn: function() {
            return Math.round(this.money / this.jpnRate * 100) / 100;
        }
    }
});