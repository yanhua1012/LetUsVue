var vm = new Vue({
    el: "#app",
    data: {
        lastName: "",
        firstName: "",
        account: "",
        password: "",
        confirmPassword: "",
        telphoneList: [
            { tel: "" },
        ],
        isShow: false,
        fullName: "",
    },
    methods: {
         addTelphone() {
            this.telphoneList.push({
                tel: ""
            });
         },
         
         removeTelphone(index) {
            this.telphoneList.splice(index, 1);
         },
         
         send() {
            this.fullName = this.lastName + " " + this.firstName;
            if (this.firstName != "" && this.lastName != "" && this.account != "" 
            && this.password != "" && this.confirmPassword != "") {
                if (this.password == this.confirmPassword) {
                    this.isShow = true;
                }
                else {
                    alert("密碼確認錯誤");
                }
            }
            else {
                alert("資料尚未輸入完全");
            }
         }
    }
});