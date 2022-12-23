Vue.component("example", {
    template: ` // template 只能有一個組成的 tag
    <div>
        <header>
            <slot name="slotHead">標頭</slot>
        </header>
        <section>
            <slot>內容區域</slot>
        </section>
        <footer>
            <slot name="slotFoot">頁尾</slot>
        </footer>
    </div>
    `
    
});


var app = new Vue({
    el: "#app", // 定義 render 區域
    data: {

    },
    methods: {
    }
});
