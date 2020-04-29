//atribuição por desestruturação

let a = "A"
let b = "B"
let c = "c"

const letras = [b, c, a]
[a, b, c,] = letras

console.log(a, b, c)

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const [um, dois, ...resto] = num
const[um, , tres, , cinco] = num //para pular as casas

console.log(resto)
console.log(um, tres, cinco)

//				  0	         1          2
//			   0  1  2    0  1  2    0  1  2		
const num = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(num[1][2])//output = 6
const [, [, , seis]] = num // outout = 6
const [l1, l2, l3] = num
l2[2] = num//output = 6