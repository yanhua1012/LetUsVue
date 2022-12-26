$.ajax({
    // API 連結
    url: "./test.json",
    // 要送出的資料
    data: {
        value: "test"
    },
    type: "GET",
    dataType: "json",
})
// 執行成功
.done(json => {
    console.log("done");
    console.log("json");
})
// 執行失敗
.fail((xhr, status, errorThrown) => {
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
})
// 成功或失敗都會執行
.always((xhr, status) => {
    console.log("always done!");
})
;