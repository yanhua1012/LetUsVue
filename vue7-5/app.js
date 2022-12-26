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

async function printValidResult(value) {
    try {
        const result = await numberVAlidator(value);
        console.log(result);
    } catch (error) {
        console.log("error:", error);
    }
}

printValidResult(5);
