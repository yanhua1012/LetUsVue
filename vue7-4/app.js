function get(url, params = {}) {
    var urlObj = new URL(url);
    urlObj.search  = new URLSearchParams(params);

    return fetch(new Request(urlObj, {
        method: "GET",
    }))
    .then(resp => {
        return resp.json();
    })
    .catch(error => {
        console.log(error);
    }); // 回傳一個 promise 物件
}

get("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do", 
{
    method: "doFindTypeJ",
    category: 8
}).then(resp => {
    console.log(resp);
}).catch(error => {
    console.log(error);
});