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

function agua()
{
	var grama_h2 =2; 
	var grama_O2 =16;
	var grama_H2O =18;
	var valor = document.getElementById("valor").value;
	valor =  parseFloat(valor);
	var reagente = document.getElementById("reagente").value;
	var reagente2 = document.getElementById("reagente2").value;
	var relacao = document.getElementById("relacao").value;
	var resultado = "";
	if(reagente == "H2O" && reagente2 == "H2")
	{
		var conta1 = valor * grama_h2;
		var result=  conta1 / grama_H2O; 
		
		resultado = valor + " gH2O - xgH2" + " <br> 18gH2O - 2gH2" +  
		"<br> <br> " + valor + " gH2O * 2gH2" + " <br> 18gH2O * XgH2 <br> <br> O resultado é: " + valor + " gH2O - " + result + " gH2" ;
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "H2O" && reagente2 == "H2O")
	{
		resultado = "Entrada inválidada selecionar as correlações H2OG - H2G , O2G - H2OG ";
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "O2" && reagente2 == "H2O")
	{
		var conta1 = valor * grama_H2O;
		var result=  conta1 / grama_O2; 
		
		resultado = valor + " gO2 - xgH2O" + " <br> 16gO2 - 18gH2O" +  
		"<br> <br> " + valor + " gO2 * 18gH2O" + " <br> XgH2O * 16gO2 <br> <br> O resultado é: " + valor + " gO2 - " + result + " gH2O" ;
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "O2" && reagente2 == "H2")
	{
		var conta1 = valor * grama_h2;
		var result=  conta1 / grama_O2; 
		
		resultado = valor + " gO2 - xgH2" + " <br> 16gO2 - 2gH2" +  
		"<br> <br> " + valor + " gO2 * 2gH2" + " <br> XgH2 * 16gO2 <br> <br> O resultado é: " + valor + " gO2 - " + result + " gH2" ;
		document.getElementById("conta").innerHTML = resultado;
	}


}