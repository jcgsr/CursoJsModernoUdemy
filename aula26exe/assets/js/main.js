//capturar evento
let form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let inputPeso = e.target.querySelector('#peso')
    let inputAlt = e.target.querySelector('#alt') 
    
    let peso = Number(inputPeso.value)
    let altura = Number(inputAlt.value)

    if (!peso){
        setResul("Peso inválido", false)
        return
    }
    if (!altura){
        setResul("Altura inválida", false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    
    const msg = `Seu IMC é ${imc} ${nivelImc}.`
    setResul(msg, true)

    function getNivelImc(imc){
        const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
                        'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

        if (imc >= 39.9) return nivel[5]                
        if (imc >= 34.9) return nivel[4]                
        if (imc >= 29.9) return nivel[3]                
        if (imc >= 24.9) return nivel[2]                
        if (imc >= 18.5) return nivel[1]                
        if (imc < 18.5) return nivel[0]                
    }  

})

function getImc(peso, altura){
    const imc = peso / altura**2
    return imc.toFixed(2)
}

function criaP(){
    let p = document.createElement('p')
    return p
}

function setResul(msg, isValid){
    let resultado = document.querySelector('#resIMC')
    resultado.innerHTML = ''    
    
    let p = criaP()

    if (isValid) {
        p.classList.add('parag-res')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)

}