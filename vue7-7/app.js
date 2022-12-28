async function get(url, params = {}) {
    var urlObj = new URL(url);
    urlObj.search  = new URLSearchParams(params);

    const response = await fetch(new Request(urlObj, {
        method: "GET",
    }));

    const json = await response.json();
    return json;
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