function enviar(){
	
	let form = document.getElementById("form")
	let res = document.querySelector(".res")
	let dados = []

	function enviar_denovo(e){
		e.preventDefault()

		let nome = form.querySelector("#nome")
		let sobrenome = form.querySelector("#sobrenome")
		
		dados.push({
			nome: nome.value,
			sobrenome: sobrenome.value 
		})
		console.log(dados)

		res.innerHTML = `${nome.value} ${sobrenome.value}`
	}

	form.addEventListener('submit', enviar_denovo)

	
}

enviar()
