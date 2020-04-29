const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const gera_M = () => String.fromCharCode(rand(65, 91))
const gera_m = () => String.fromCharCode(rand(97, 123))
const gera_n = () => String.fromCharCode(rand(48, 58))
const s = ',.;~^[]{}()_-=§!@#$%*£¢|'
const gera_s = () => s[rand(0, s.length)]

export default function geraSenha(qnt, maius, minus, num, simb){
    const senhaArray = []
    qnt = Number(qnt)

    for (let i = 0; i < qnt; i++){
        maius && senhaArray.push(gera_M())
        minus && senhaArray.push(gera_m())
        num && senhaArray.push(gera_n())
        simb && senhaArray.push(gera_s())
    }
    return senhaArray.join('').slice(0, qnt)
}

geraSenha(5, true, true, true)