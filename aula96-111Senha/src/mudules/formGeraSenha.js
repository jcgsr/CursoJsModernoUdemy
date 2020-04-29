import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada')
const qntC = document.querySelector('.qnt-c')
const chkMaius = document.querySelector('.chk-M')
const chkMinus = document.querySelector('.chk-m')
const chkN = document.querySelector('.chk-n')
const chkS = document.querySelector('.chk-s')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera(){
    const senha = geraSenha(
        qntC.value,
        chkMaius.checked,
        chkMinus.checked,
        chkN.checked,
        chkS.checked
    )
    return senha || 'Nada selecionado'
}