function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject(new Error('ERRO'))
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('ERRO: ', e)
    })

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand())
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand())
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3);
        console.log('Terminamos na fase 3', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa()
