function insere(){
	let cod = document.forms["cadastrar"]["codigo"].value;
	let dat = document.forms["cadastrar"]["data"].value;
	let tit = document.forms["cadastrar"]["titulo"].value;
	let dir = document.forms["cadastrar"]["diretor"].value;
	let ato = document.forms["cadastrar"]["ator"].value;
	let not = document.forms["cadastrar"]["nota"].value;
	let rad = document.forms["cadastrar"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${cod}</th>`;
	inserir.innerHTML += `<td>${tit}</td>`;
	inserir.innerHTML += `<td>${dir}</td>`;
	inserir.innerHTML += `<td>${dat}</td>`;
	inserir.innerHTML += `<td>${rad}</td>`;				
	inserir.innerHTML += `<td>${ato}</td>`;				
	inserir.innerHTML += `<td>${not}</td>`;						
}


function validaForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;
	let validaDat = document.forms["cadastrar"]["data"].value;
	let validaTit = document.forms["cadastrar"]["titulo"].value;
	let validaDir = document.forms["cadastrar"]["diretor"].value;
	let validaAto = document.forms["cadastrar"]["ator"].value;
	let validaNot = document.forms["cadastrar"]["nota"].value;
	let validaRad = document.forms["cadastrar"]["radio"].value;

	if(validaCod == ""){
		alert("O código deve ser preenchido!");
		return false; //o return false é para o formulário não enviar as informações pq está errado
	}
	if(validaDat == ""){
		alert("A data deve ser preenchida!");
		return false; 
	}
	if(validaTit == ""){
		alert("O título deve ser preenchido!");
		return false; 
	}
	if(validaDir == ""){
		alert("O diretor(a) deve ser preenchido!");
		return false; 
	}
	if(validaAto == ""){
		alert("O ator/atriz principal deve ser preenchido!");
		return false; 
	}
	if(validaNot == ""){
		alert("A nota IMDb deve ser preenchida!");
		return false; 
	}
	if(validaRad == ""){
		alert("O gênero deve ser selecionado!");
		return false; 
	}
}
