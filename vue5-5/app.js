var vm = new Vue({
    el: "#app",
    data: {
         phone: "0952285558",
         tel: "0223668995",
         name: "AbCdEfG"
    },
    filters: {
      phoneFormater(originPhone) {
         let formatNumber = "";
         formatNumber += originPhone.substr(0, 4);
         formatNumber += "-";
         formatNumber += originPhone.substr(4, 3);
         formatNumber += "-";
         formatNumber += originPhone.substr(7, 3);

         return formatNumber;
      },
      telFormater(originTel) {
         let formatNumber = "";
         formatNumber += originTel.substr(0, 2);
         formatNumber += "-";
         formatNumber += originTel.substr(3, 4);
         formatNumber += "-";
         formatNumber += originTel.substr(6, 4);

         return formatNumber;
      },

      upperCase(originName) {
         return originName.toUpperCase();
      },

      lowerCase(originName) {
         return originName.toLowerCase();
      },
    }
});