const listaPerguntaFacil = ["facil1.html", "facil2.html", "facil3.html","facil4.html"]

const listaPerguntaDificil = []

const botaoProximo = document.getElementById("botaoPassar");

botaoProximo.style.display="none"


const resposta1 = document.getElementById("resposta1")
const resposta2 = document.getElementById("resposta2")
const resposta3 = document.getElementById("resposta3")
const resposta4 = document.getElementById("resposta4")

let listaResposta = [resposta1,resposta2,resposta3,resposta4]

function responder(botaoClicado) {

    for (let resposta of listaResposta) {
        if (resposta.value=="certo") {
            resposta.style.backgroundColor = "green"
        }
        else {
            resposta.style.backgroundColor="red"
        }
    }

    botaoProximo.style.display=""

}