var vm = new Vue({
    el: "#app",
    data: {
      buyList:[],
      showList: [],
      totalPrice: 0,
      selectProduction: "",
      productions: [
         { id: 1, name: "紅茶", price: 30},
         { id: 2, name: "綠茶", price: 25},
         { id: 4, name: "奶茶", price: 40},
         { id: 5, name: "珍珠奶茶", price: 50},
         { id: 5, name: "咖啡", price: 35},
      ]
    },
    methods: {
      buy: function() {
         if (this.selectProduction !== "") {
            this.buyList.push(this.selectProduction);
            this.selectProduction = "";
         }
      }
    },
    watch: {
       buyList: function(changeList, oldList) {
            let totalPrice = 0;
            let showList = [];
            const prods = this.productions;
            changeList.forEach(productionId => {
               const selectProd = prods.find(production => 
                  {
                     return production.id == productionId;
                  });

               if (selectProd.price !== undefined) {
                  totalPrice += selectProd.price;
                  showList.push(selectProd);
               }
            });

            this.showList = showList;
            this.totalPrice = totalPrice;
       }
    }
});