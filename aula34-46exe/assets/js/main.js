const elementos = [
    {tag: 'p', texto: 'Frase 1.'},
    {tag: 'div', texto: 'Frase 2.'},
    {tag: 'section', texto: 'Frase 3.'},
    {tag: 'footer', texto: 'Frase 4'}
]

const container = document.querySelector('.container') //selecionar container html
const div = document.createElement('div') //criar div

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i] // atribuição via desestruturação
    let tagCriada = document.createElement(tag) //cria as tags com a iteração do for 
    tagCriada.innerHTML = texto // pega os textos lá dos elementos (tb poderia ser 'innerText')
    div.appendChild(tagCriada) // adiciona os textos na div 
}
//tudo isso acima está na memória
container.appendChild(div) // agora pegamos os dados na memória e adicionamos no container 