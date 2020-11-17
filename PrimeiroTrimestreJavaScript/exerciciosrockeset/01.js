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


function pares()
{
	var n1 = document.getElementById("entrada1").value;
	var n2 = document.getElementById("entrada2").value;
	n1 = parseInt(n1);
	n2= parseInt(n2);
	//vendo qual é o maior para o for
	var a= 0;
	var b= 0;
	var texto ="Os números pares são:"
	if(n1<n2)
	{
		a = n1;
		b = n2;
	}

	else
	{
		b = n1;
		a = n2;
	}
		
	for(a;a<=b;a++)
	{
		if(a%2==0)
			texto+= a+ ",";
	}
	
	alert (texto);
}

function skill()
{
	var skills = ["Javascript", "ReactJS", "React Native"];
	if(skills.indexOf("Javascript") == -1)
	{
		alert("não encontrado");
		return 0;
	}
	else{
		x = 1;	
		alert(" Javascript está no array ");
		return 1;
	}
}

function experiencia()
{
	var n1 = document.getElementById("entrada1").value;
	n1 = parseInt(n1);
	if(n1>=0 && n1<2)
		alert ("Iniciante");
	else if(n1>1 && n1<=3)
		alert ("Intermediário");
	else if(n1>3 && n1<=6)
		alert ("Avançado");	
	else if(n1>=7)
		alert ("Jedi master");
	else if(n1<0)
		alert ("Número invalido");
}




function usuarios()
{
var usuarios = 
[
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

    var diego = 
    {
        nome: "",
        habilidades: [""]
    };
    var gabriel = 
    {
        nome: "",
        habilidades: [""]
    };
    diego=usuarios[0];
    gabriel=usuarios[1];
	var diego_text="O " + diego.nome + " possui as habilidades: " + diego.habilidades;
	var gabriel_text = " O " + gabriel.nome + " possui as habilidades: " + gabriel.habilidades + ".";
	document.getElementById("msg1").innerHTML = diego_text;
	document.getElementById("msg2").innerHTML = gabriel_text;
}

