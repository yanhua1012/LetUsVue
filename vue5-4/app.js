var vm = new Vue({
    el: "#app",
    data: {
         mainId: "",
         subId: "",
         currentSubList: [],
         typeList:[
            {
               id: 1,
               name: "飲料",
               sub:[
                  { id:1, name: "紅茶" },
                  { id:2, name: "綠茶" },
                  { id:3, name: "麥茶" },
               ]
            },
            {
               id: 2,
               name: "蛋糕",
               sub:[
                  { id:1, name: "蜂蜜蛋糕" },
                  { id:2, name: "起士蛋糕" },
                  { id:3, name: "巧克力蛋糕" },
               ]
            },
            {
               id: 3,
               name: "麵包",
               sub:[
                  { id:1, name: "吐司" },
                  { id:2, name: "肉鬆麵包" },
               ]
            },
         ]
    },
    methods: {
      
    },
    watch: {
      mainId: function(newId, oldId) {
         if (newId == "") {
            this.currentSubList = [];
         }
         else {
            const tempItem = this.typeList.find(typeItem => typeItem.id == newId);
            this.currentSubList = tempItem.sub;
         }
      }
    }
});