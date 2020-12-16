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
	var grama_O2 =32;
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
		var result=  conta1 / (grama_O2/2); 
		
		resultado = valor + " gO2 - xgH2O" + " <br> 16gO2 - 18gH2O" +  
		"<br> <br> " + valor + " gO2 * 18gH2O" + " <br> XgH2O * 16gO2 <br> <br> O resultado é: " + valor + " gO2 - " + result + " gH2O" ;
		document.getElementById("conta").innerHTML = resultado;
	}

	if(reagente == "O2" && reagente2 == "H2")
	{
		var conta1 = valor * grama_h2;
		var result=  conta1 / (grama_O2/2); 
		
		resultado = valor + " gO2 - xgH2" + " <br> 16gO2 - 2gH2" +  
		"<br> <br> " + valor + " gO2 * 2gH2" + " <br> XgH2 * 16gO2 <br> <br> O resultado é: " + valor + " gO2 - " + result + " gH2" ;
		document.getElementById("conta").innerHTML = resultado;
	}


}



function limitante()
{
	var o2 = document.getElementById("o2").value;
	var h2 = document.getElementById("h2").value;
	o2 = parseFloat(o2);
	h2 = parseFloat(h2);
	var grama_h2 =2; 
	var grama_O2 =32;

	var conta1 =grama_h2* o2;
	var conta2 = conta1 / (grama_O2/2);
	var resultado ="";
	var temp_excesso = 0;
	
	var conta3 =(grama_O2/2)* h2;
	var conta4 = conta3 / grama_h2;



	if(conta2<h2)
	{
		resultado = "2g H2 - 16g O2 <br>" +  "XgH2 - " + o2 + " g O2 <br><br><br> 2g H2 X = " + o2 +" gO2 = Xg O2 X 16g O2  <br><br> Xg H2 = " + conta2 + " <br> Portanto para " + o2 + " gO2 é necessário " + conta2 + " gH2";
		temp_excesso = h2 - conta2;
		resultado += "<br> <h3>h2 está em excesso e o O2 é o limitante O2 é o limitante, <br> e o excesso de h2g é: " + temp_excesso + " gH2 </h3>";
	

	}


	if(conta2>h2)
	{
		resultado = "2g H2 - 16g O2 <br>" +  h2 + " gH2 -  xg O2 <br><br><br> 2g H2 X XgO2 = " + h2 +" gH2 X 16g O2  <br><br> Xg O2 = " + conta4 + " <br> Portanto para " + h2 + " gH2 é necessário " + conta4 + " gO2";
		temp_excesso = o2 - conta4;
		resultado += "<br> <h3>O2 está em excesso e o O2 é o limitante e o excesso de O2g é: " + temp_excesso + " gO2 </h3>";
		}



	if(h2-conta2==0)
	{
		resultado = "2g H2 - 16g O2 <br>" +  "XgH2 - " + o2 + " g O2 <br><br><br> 2g H2 X = " + o2 +" gO2 = Xg O2 X 16g O2  <br><br> Xg H2 = " + conta2 + " <br> Portanto para " + o2 + " gO2 é necessário " + conta2 + " gH2";
		resultado += "<br> <h3>Não há nenhum elemento em excesso!!!</h3>";
	}

	document.getElementById("conta").innerHTML = resultado;

}

/*


botao.onclick = function retorna()
{
    var inputth2 = document.getElementById('h2').value;
    var inputto2 = document.getElementById('o2').value;
    if(inputth2 == '' || inputth2<=0 || inputto2 == '' || inputto2<=0)
	{
		alert("Insira um valor válido.");
    }
    else
    {
        inputth2 = parseFloat(inputth2);
        inputto2 = parseFloat(inputto2);
        var x = 16*inputth2;
        var x1 = x/2;
        var y = 2*inputto2;
        var y1 = y/16;
        var r = inputto2 - x1;
        var r2 = inputth2 - y1;
        var massa1 = inputto2 + y1;
        var massa = inputth2 + x1;
        x = x.toFixed(2);
        x1 = x1.toFixed(2);
        y = y.toFixed(2);
        y1 = y1.toFixed(2);
        r = r.toFixed(2);
        r2 = r2.toFixed(2);
        massa = massa.toFixed(2);
        massa1 = massa1.toFixed(2);
        if(conta2<o2)
        {
            var excesso = "2g H2 - 16g O2 <br>" + inputth2 + "g H2 - Xg O2 <br><br> 2 . X = " + x +"<br> X = " + x1 + "<br><br>Para " + inputth2 + "g H2 precisa-se de " + x1 + "g O2<br> " + inputto2 +" - " + x1 + " = " + r + "<br><br>O2 está " + r + " g em excesso<br> O agente limitante é o H2 <br> A massa de H2O formada é de " + massa + "g";

        }
        else if(x1>inputto2)
        {
            var excesso = "2g H2 - 16g O2 <br> Xg O2 -" + inputto2 + "g O2 <br><br> 16 . X = " + y +"<br> X = " + y1 + "<br><br>Para " + inputto2 + "g O2 precisa-se de " + y1 + "g H2<br> " + inputth2 +" - " + y1 + " = " + r2 + "<br><br>H2 está " + r2 + " g em excesso<br> O agente limitante é o O2 <br> A massa de H2O formada é de " + massa1 + "g";
        }
        else if(x1 == inputto2)
        {
            excesso = "Nenhum elemento está em excesso.";
        }
        document.getElementById('resultado').innerHTML = excesso;

    }
}

*/