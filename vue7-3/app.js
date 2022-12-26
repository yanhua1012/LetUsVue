
axios.get("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do", {
    params: {
        method: "doFindTypeJ",
        category: 8
    },
}).then(resp => {
    console.log(resp);
}).catch(error => {
    console.log(error);
});