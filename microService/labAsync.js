async function traitement() {
    console.log("start");
    await setTimeout(function () {
    }, 2000);
    return ("stop");
}

let ret = traitement()
console.log(ret)
console.log("terminé", ret)