function traitement() {
    console.log("Stop1")
}

let traitement1 = () => {
    console.log("Stop2")
}

(() => {
    console.log("Stop2")
})()

traitement()
traitement1()
console.log("terminé", traitement1, traitement)