const paragrafos = document.querySelector('.paragrafos')//seleciona a div
const ps = paragrafos.querySelectorAll('p')//seleciona todos os paragrafos da div

const estilosBody = getComputedStyle(document.body)//selecionar todos estilos css do body
const bgColorBody = estilosBody.backgroundColor //selecionar o bg
console.log(bgColorBody)

//rgb(17, 86, 102)

for (let p of ps){
    p.style.backgroundColor = bgColorBody
    p.style.color = 'white'
}
console.log('#############')

for (let i in ps){
    console.log(ps[i])
}
console.log('#############')

for (let index = 0; index < ps.length; index++) {
    const element = ps[index];
    console.log(element)    
}

