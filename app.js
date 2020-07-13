var lambda = null
var mu = null
var Ro = null
var Ls = null
var Ws = null
var Lq = null
var Wq = null
var Pcero = null
var sendBtn = null
var listRo = null
var listLs = null
var listWs = null
var listLq = null
var listWq = null
var listP0 = null


var sendForm = function (evt) {

    evt.preventDefault()
    if (lambda.value > 0 && mu.value > 0) {
        Ro = parseFloat(lambda.value) / parseFloat(mu.value)
        if (Ro < 1) {
            Ls = parseFloat(lambda.value) / (parseFloat(mu.value) - parseFloat(lambda.value))
            Ws = 1 / (parseFloat(mu.value) - parseFloat(lambda.value))
            Lq = (parseFloat(lambda.value) * parseFloat(lambda.value)) / (parseFloat(mu.value) * (parseFloat(mu.value) - parseFloat(lambda.value)))
            Wq = parseFloat(lambda.value) / (parseFloat(mu.value) * (parseFloat(mu.value) - parseFloat(lambda.value)))
            Pcero = 1 - Ro

            listRo.innerHTML = Ro
            listLs.innerHTML = Ls
            listWs.innerHTML = Ws
            listLq.innerHTML = Lq
            listWq.innerHTML = Wq
            listP0.innerHTML = Pcero

            console.log(Ro)
            console.log(Ls)
            console.log(Ws)
            console.log(Lq)
            console.log(Wq)
            console.log(Pcero)
        } else {
            listRo.innerHTML = Ro
            window.alert('SERVIDOR SATURADO. No se pueden calcular medidas de desempeño')
        }

    }

}



window.onload = function () {

    lambda = document.getElementById('lambda')
    mu = document.getElementById('mu')

    listRo = document.getElementById('listRo')
    listLs = document.getElementById('listLs')
    listWs = document.getElementById('listWs')
    listLq = document.getElementById('listLq')
    listWq = document.getElementById('listWq')
    listP0 = document.getElementById('listP0')

    sendBtn = document.getElementById('send')
    sendBtn.onclick = sendForm
}
