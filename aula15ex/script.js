let numero = prompt("Digite um número: ")//prompt retorna string!
numero = Number(numero)

let numeroTitulo = document.getElementById("num")
let texto = document.getElementById("text")

numeroTitulo.innerHTML = numero

texto.innerHTML = ''
texto.innerHTML += `A raiz quadra do seu número é: ${Math.sqrt(numero)}.<br>`
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br>`
texto.innerHTML += `É NaN: ${Number.isNaN(numero)} <br>`
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} <br>`
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)} <br>`
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br>`