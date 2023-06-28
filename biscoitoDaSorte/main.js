const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector(".screen1 img")
const sentence = document.querySelector(".screen2 p")
const reopenBtn = document.querySelector(".screen2 button")

const frases = [
  "A vida trará coisas boas se tiver paciência.",
  "A maior de todas as torres começa no solo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Siga os bons e aprenda com eles.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "Acredite em milagres, mas não dependa deles.",
]

let randomSentence = frases[Math.round(Math.random() * (frases.length - 1))]
console.log(randomSentence)

let openCookie = () => {
  randomSentence = frases[Math.round(Math.random() * (frases.length - 1))]
  sentence.innerText = randomSentence
  toggleScreens()
}

let toggleScreens = () => {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

cookie.addEventListener("click", openCookie)
reopenBtn.addEventListener("click", toggleScreens)
