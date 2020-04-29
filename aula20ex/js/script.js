function meuEscopo(){
    let form = document.querySelector(".form")
    let res = document.querySelector('.res')
    let pessoas = []

    function eventoForm(e){
        e.preventDefault() // prevenir recarregar página automaticamente

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        res.innerHTML += `${nome} ${sobrenome} ${peso} ` +
        `${altura}`
        
    }

    form.addEventListener('submit', eventoForm)
}

meuEscopo()

/*
form.onsubmit = function(e){
        e.preventDefault()//prevenir recarregar browser automaticamente
    }
*/