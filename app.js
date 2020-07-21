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

var lambda2 = null
var mu2 = null
var Ro2 = null
var Ls2 = null
var Ws2 = null
var Lq2 = null
var Wq2 = null
var Pcero2 = null
var sendBtn2 = null
var listRo2 = null
var listLs2 = null
var listWs2 = null
var listLq2 = null
var listWq2 = null
var listP02 = null

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




var sendForm2 = function (evt) {

    evt.preventDefault()
    if (lambda2.value > 0 && mu2.value > 0) {
        Ro2 = parseFloat(lambda2.value) / parseFloat(mu2.value)
        if (Ro2 < 1) {
            Lq2 = (Ro2 * Ro2) / (2 * (1 - Ro2))
            Wq2 = Lq2 / (parseFloat(lambda2.value))
            Ws2 = Wq2 + (1 / (parseFloat(mu2.value)))
            Ls2 = (parseFloat(lambda2.value)) * Ws2
            Pcero2 = 1 - Ro2

            listRo2.innerHTML = Ro2
            listLs2.innerHTML = Ls2
            listWs2.innerHTML = Ws2
            listLq2.innerHTML = Lq2
            listWq2.innerHTML = Wq2
            listP02.innerHTML = Pcero2

            console.log(Ro2)
            console.log(Ls2)
            console.log(Ws2)
            console.log(Lq2)
            console.log(Wq2)
            console.log(Pcero2)
        } else {
            listRo2.innerHTML = Ro2
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

    lambda2 = document.getElementById('lambda2')
    mu2 = document.getElementById('mu2')

    listRo2 = document.getElementById('listRo2')
    listLs2 = document.getElementById('listLs2')
    listWs2 = document.getElementById('listWs2')
    listLq2 = document.getElementById('listLq2')
    listWq2 = document.getElementById('listWq2')
    listP02 = document.getElementById('listP02')

    sendBtn2 = document.getElementById('send2')
    sendBtn2.onclick = sendForm2
}
