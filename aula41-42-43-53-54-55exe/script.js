function maior(x, y){
    if(x > y) return x
    if(y > x) return y
}
/*poderia ser tb:
const max = (x, y) => x > y ? x : y
*/ 

let teste = maior(8, 5)

console.log(teste)

function ePaisagem(larg, alt){
    //poderia ser apenas: return larg > alt ? true : false
    //com arrow function: const ePaisagem (larg, alt) => larg > alt (já é true se larg > que altura)
    if (larg > alt){
        return true
    } else {
        return false
    }
}
let teste2 = ePaisagem(455, 567)
console.log(teste2)

function fizzBuzz(num){
    if(typeof num !== 'number') return num
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if(num % 3 === 0) return 'Fizz'
    if(num % 5 === 0) return 'Buzz'
    return num
}
for(let i = 0; i <= 100;i++){
    console.log(i, fizzBuzz(i));
}