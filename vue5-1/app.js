var vm = new Vue({
    el: "#app",
    data: {
       lastName: "",
       firstName: "",
       postNumber: "",
       city: "",
       area: "",
       address: ""
    },
    methods: {
       
    },
    computed: {
        fullName: function() {
            return this.lastName + " " + this.firstName;
        },

        fullAddress: function() {
            return `${this.postNumber} ${this.city} ${this.area} ${this.address}`;
        }
    }
});