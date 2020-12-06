function chamaFuncao(){
	var endereco = { 
	 	rua: "Rua dos pinheiros", 
	 	numero: 1293, 
	 	bairro: "Centro", 
		cidade: "São Paulo", 
		uf: "SP"}
		;
	var texto = "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", No bairro " + endereco.bairro + " na rua " + endereco.rua + " com num " + endereco.numero;
	document.getElementById("texto").innerHTML = texto;
	return 0;
}


function chamaMOL()
{
	var n1 = document.getElementById("entrada1").value;
	n1 = parseFloat(n1);
	var massa = 0.0;
	var gramas_carbono = 12;
	massa  =  n1 * gramas_carbono;
	var resultado = "12g - 1 mol C <br> Xg" +  " - " + n1 + " mol C<br> <br> " + gramas_carbono + " X " + n1 + " = Xg x 1 mol C <br> <br> O resultado é: " + massa + " g de Carbono";
	document.getElementById("txt1").innerHTML = resultado;
}

function chamaGRAMA()
{
	var n1 = document.getElementById("entrada2").value;
	n1 = parseFloat(n1);
	var gramas_carbono = 12;
	mol  =  n1/gramas_carbono;
	var resultado = "12g de Carbono - 1 mol C <br> " + n1 + " g de Carbono -  x mol C<br> <br> " + n1 + " g de carbono x 1 mol C " + " = x mol C x 12 g de Carbono <br> <br>" +  n1 + " / " + gramas_carbono +   "<br>O resultado é: " + mol + " mol de carbono";
	document.getElementById("txt2").innerHTML = resultado;
}
