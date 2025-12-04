/*//ici on attend stop
function traitement() {
    console.log("start");
    return new Promise(function (resolv, reject) {
        setTimeout(function () {
            resolv("Stop")
        }, 3000);
    })
}

async function jattend() {
    let ret = await traitement()
    console.log(ret)
}

jattend()
console.log("terminé")
*/


//ici avec les lambdas
const traitement = () => {
    console.log("start");
    return new Promise((resolv, reject) => {
        setTimeout(() => {
            resolv("Stop")
        }, 3000);
    })
}

const jattend = async () => {
    let ret = await traitement()
    console.log(ret)
}

jattend()
console.log("terminé")