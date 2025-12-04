

//ici avec les lambdas
const traitement = () => {
    console.log("start");
    return new Promise((resolv, reject) => {
        setTimeout(() => {
            resolv("Stop")
        }, 3000);
    })
}

traitement().then((ret) => {
    console.log(ret)
})
traitement()
    .then(d => d + "*")
    .then(d => {
        return d + "*"
    })
    .then(d => {
        console.log(d)
    })


