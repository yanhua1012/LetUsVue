var vm = new Vue({
    el: "#app",
    data: {
        fullName: "",
        title: "",
        tel: "",
        email: "",
        company: "",
        content: "",
        type: "",
        typeName: "",
        isShow: false,
        typeList: [
            { id: 1, name: "服務報價" },
            { id: 2, name: "問題回報" },
            { id: 3, name: "行銷服務" },
            { id: 4, name: "技術支援" },
            { id: 5, name: "財務會計" }
        ]
    },
    methods: {
          onSubmit: function() {
            if (this.type == "") {
                this.typeName = "";
            }
            else {
                this.typeList.forEach(item => {
                    if (this.type == item.id) {
                        this.typeName = item.name;
                    }
                });
            }
            this.isShow = true;
          },
          onClear: function() {
            this.isShow = false;
            this.fullName = "";
            this.title = "";
            this.tel = "";
            this.email = "";
            this.company = "";
            this.content = "";
            this.type = "";
            this.typeName = "";
          }
    }
});