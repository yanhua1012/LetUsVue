var vm = new Vue({
    el: "#app",
    data: {
        isActive: true,
        isChild: true,
        textColor: "white",
        bgColor: "pink",
        colorList: ["pink", "gray", "skyblue", "orange"]
    },
    methods: {
        changeColor: function() {
            const i = Math.floor(Math.random() * 4); // 0 ~ 3
            this.bgColor = this.colorList[i];
        }
    }
});