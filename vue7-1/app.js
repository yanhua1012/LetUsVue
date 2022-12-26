function numberVAlidator(value) {
    return new Promise(function(resolve, reject){
        console.log(value);
        setTimeout(function() {
            if (typeof(value) === "number") {
                resolve("已成功");
            }
            else {
                reject("已失敗");
            }
        }, 3000);
    });
}

numberVAlidator(3).then(value => {
    console.log(value);   
}).catch(reason => {
    console.log(reason);
});