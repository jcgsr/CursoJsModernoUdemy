function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)//transformar milisegundos em segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const rel = document.querySelector('.rel')
    /*
    não precisa selecionar dessa maneira pq os botões já foram selecionados abaixo no "addEventListener"
    const init = document.querySelector('.init')
    const pause = document.querySelector('.pause')
    const zero = document.querySelector('.zero')
    */
    let segundos = 0
    let timer

    function iniciaRel() {
        timer = setInterval(function () {
            segundos++
            rel.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target//'e.target' qual elemento/qualquer elemento, nesse caso, está sendo clicado

        if (elemento.classList.contains('zero')) {
            rel.classList.remove('pausado') //remove classe criada no css
            clearInterval(timer)
            rel.innerHTML = '00:00:00'
            segundos = 0
        }
        if (elemento.classList.contains('init')) {
            rel.classList.remove('pausado') //remove classe criada no css
            clearInterval(timer)
            iniciaRel()
        }
        if (elemento.classList.contains('pause')) {
            rel.classList.add('pausado')//add class - criada no css
            clearInterval(timer)
        }
    })

    /*
    
    init.addEventListener('click', function(e){//pegar o click do botão
        rel.classList.remove('pausado') //remove classe criada no css
        clearInterval(timer)
        iniciaRel()
    })
    
    pause.addEventListener('click', function(e){//pegar o click do botão
        rel.classList.add('pausado')//add class - criada no css
        clearInterval(timer)
    })
    
    
    zero.addEventListener('click', function(e){//pegar o click do botão
        clearInterval(timer)
        rel.innerHTML = '00:00:00'
        segundos = 0
    })
    */
}

relogio()
