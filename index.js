const nome = prompt("Qual seu nome?") 
const nasceu = prompt ("Qual ano você nasceu?")
const anoAtual = prompt ("Qual ano a gente está?")

console.log("Nome:", nome)
console.log("Idade", anoAtual - nasceu)
console.log("Maior de idade ?", anoAtual - nasceu >= 18)
console.log("Idade em 2050", 2050 - nasceu)


