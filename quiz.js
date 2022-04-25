
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "O que significa a sigla “www” na internet?",
    alternativaA : "World wide web",
    alternativaB : "Web world wide",
    alternativaC : "Web wide world",
    alternativaD : "Window wide web",
    correta      : "World wide web",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Em que ano foi lançado o primeiro iPhone da Apple?",
    alternativaA : "2007",
    alternativaB : "2008",
    alternativaC : "2005",
    alternativaD : "2006",
    correta      : "2007",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual foi o primeiro tweet da história?",
    alternativaA : "Olá, amigos",
    alternativaB : '"Estou preparando meu twitter"',
    alternativaC : '"Olá, twitter"',
    alternativaD : '"Olá, mundo"',
    correta      : '"Estou preparando meu twitter"',
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "De 2017 em diante, quantos caracteres podem ter os tweets?",
    alternativaA : "200",
    alternativaB : "300",
    alternativaC : "250",
    alternativaD : "280 ",
    correta      : "280",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o nome do clássico jogo de arcade de 1972 baseado no tênis de mesa?",
    alternativaA : "Zen Pinball",
    alternativaB : "Virtua Tennis",
    alternativaC : "Pong",
    alternativaD : "Golden Axe",
    correta      : "Pong",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o nome do cientista da computação britânico que inventou a World Wide Web em 1989?",
    alternativaA : "Alan Turing",
    alternativaB : "Tim Berners-Lee",
    alternativaC : "Charles Babbage",
    alternativaD : "John von Neumann",
    correta      : "Tim Berners-Lee",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual foi a primeira rede social da história da internet?",
    alternativaA : "Classmate",
    alternativaB : "MySpace",
    alternativaC : "Orkut",
    alternativaD : "MSN",
    correta      : "Classmate",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Em que ano foi criada a primeira versão do Windows?",
    alternativaA : "20 de Dezembro de 1985",
    alternativaB : "20 de Novembro de 1985",
    alternativaC : "16 de Julho de 1982",
    alternativaD : "14 de Junho de 1872",
    correta      : "20 de Novembro de 1985",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual sistema está presente na maioria dos SmartPhones presentes no mundo?",
    alternativaA : "iOS",
    alternativaB : "Windows Phone",
    alternativaC : "Android",
    alternativaD : "Java",
    correta      : "Android",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Quantos núcleos possuem um processador Octa-Core?",
    alternativaA : "7 Núcleos",
    alternativaB : "2 Núcleos",
    alternativaC : "12 Núcleos",
    alternativaD : "8 Núcleos",
    correta      : "8 Núcleos",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
/*alternativas.addEventListener('dblclick', () => {
    console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})*/

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}


function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        //somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        //somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 200);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')
    aviso.classList.add('altura')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        aviso.classList.remove('altura')
        progresso.value = 0
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
