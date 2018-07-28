var Jogador = true; //Serve para identificar em que jogador esta, se for true X false O, só vale para JxJ
var FimDeJogo = false; // Verificar se o jogo acabou, false 
var celula = [0,0,0,0,0,0,0,0,0]; //array para identificar a jogada dos players, tendo o número de celula no tabuleiro, sendo 1 para X e 2 para O
var CPU = true; 
var mostrarJogador = true; // Mostrar no Display quem esta jogando, se é X ou O, só vale para JxJ
var Jogada = 0; // Serve para dividir os turnos de cada jogada da maquina

var CPUX = 0;//Número de vezes que a CPU Joga 
var tipoDeJogo; // Modo de jogo selecionado pelo usuário
var velha = 0; // verificar se deu velha, se for maior que 9 da empate
var contadorX = 0; //conta o pontos da jogador X
var contadorO = 0; // Conta os pontos do Jogador O

function JogadorXJogador(){
	for (i = 0; i<9; i++ ){ //reseta todas imagens das celulas
		document.getElementById(i).src=("imagens/branco.png");
	}
	//Zera todas as variáveis do jogo
	tipoDeJogo = "JxJ";
	celula = [0,0,0,0,0,0,0,0,0];
	FimDeJogo = false;
	Jogador=true;
	velha = 0;
	contadorX = 0;
	contadorO = 0;
	document.getElementById("contadorX").innerHTML = contadorX;//Zerar o contador de pontos X
	document.getElementById("contadorO").innerHTML = contadorO;;//Zerar o contador de pontos O
	document.getElementById("vitoria").innerHTML = "";//Limpar a linha que mostrar quem ganhou
	document.getElementById("mostrarX").innerHTML = "X";
	document.getElementById("mostrarO").innerHTML = "";//limpar a linha do ultimo a joga
}
function JogadorXComputador(){
	for (i = 0; i<9; i++ ){
		document.getElementById(i).src=("imagens/branco.png");
	}
	Jogada = 0;
	tipoDeJogo = "JxC";
	celula = [0,0,0,0,0,0,0,0,0];
	FimDeJogo = false;
	Jogador=true;
	velha = 0;
	contadorX = 0;
	contadorO = 0;
	CPUX = 0;
	tipoDeJogo = "JxC";
	dificulade = document.getElementById("comboBox").options[document.getElementById("comboBox").selectedIndex].value;//recebe a dificuldade escolhida pelo player no comboBox
	document.getElementById("contadorX").innerHTML = contadorX;//Zerar o contador de pontos X
	document.getElementById("contadorO").innerHTML = contadorO;;//Zerar o contador de pontos O
	document.getElementById("vitoria").innerHTML = "";//Limpar a linha que mostrar quem ganhou
	document.getElementById("mostrarX").innerHTML = "";//limpar a linha do ultimo a joga
	document.getElementById("mostrarO").innerHTML = "";//limpar a linha do ultimo a joga
}
function marca(id){
	if(!FimDeJogo){//quando fim de jogo for true, o jogo para 
		if (tipoDeJogo == "JxJ"){
			
			if(celula[id] == 0){
				velha++;
				if (Jogador){
					document.getElementById(id).src = "imagens/x.png";
					celula [id] = 1;
					Jogador = false;
					mostrarJogador = false;
				}
				else{
					mostrarJogador = true;
					celula [id] = 2;
					Jogador = true;
					document.getElementById(id).src = "imagens/o.png";
					
				}
				if(mostrarJogador){
					document.getElementById("mostrarX").innerHTML = "X";
					document.getElementById("mostrarO").innerHTML = "";
					
				}else{
					
					document.getElementById("mostrarO").innerHTML = "O";
					document.getElementById("mostrarX").innerHTML = "";
				}
				verificarVitoria();	
			}
		}	
		else if(tipoDeJogo == "JxC"){

			if(dificulade == "facil"){
				if(celula [id] == 0){// só é possivel jogar onde a celula vale 0 
					velha = velha + 2; 
					if(Jogador){
						celula [id] = 1;
						document.getElementById(id).src = "imagens/x.png";
						Jogador = false;
					}if(!Jogador){
						facil();//Chama a função da IAfacil
						verificarVitoria();	
						Jogador = true;
					}
					
					
				}
			}
			else if(dificulade == "Intermediario"){
				if(celula [id] == 0){// só é possivel jogar onde a celula vale 0 
					velha = velha + 2; //
					celula [id] = 1;
					document.getElementById(id).src = "imagens/x.png";
					Intermediario();
					verificarVitoria();
				}
			}
			else if(dificulade == "Dificil"){
				if(celula [id] == 0){// só é possivel jogar onde a celula vale 0 
					velha = velha + 2; //
					celula [id] = 1;
					document.getElementById(id).src = "imagens/x.png";
					Dificil();
					verificarVitoria();
				}
			}
		}
		else{
			alert ("Nenhum modo de jogo selecionado")
		}
	}
}

function verificarVitoria(){
	//Verificação de vitoria do X
	if (celula [0] == 1 && celula [4] == 1 && celula [8] == 1|| celula [2] == 1 && celula [4] == 1&& celula [6] == 1) { // diagonal X
		mostrarJogador = true;
		FimDeJogo = true; 
		document.getElementById("vitoria").innerHTML = "A vitória é do jogador X!";
		contadorX++;
		document.getElementById("contadorX").innerHTML = contadorX;
		
	}
	else if (celula [0] == 1 && celula [1] == 1 && celula [2] == 1 || celula [3] == 1 && celula [4] == 1 && celula [5] == 1 || celula [6] == 1 && celula [7] == 1 && celula [8] == 1){// Horizontal X
		document.getElementById("vitoria").innerHTML = "A vitória é do jogador X!";
		FimDeJogo = true;
		contadorX++;
		document.getElementById("contadorX").innerHTML = contadorX;
		mostrarJogador = true;
		
	}
	else if (celula [0] == 1 && celula [3] == 1 && celula [6] == 1 || celula [1] == 1 && celula [4] == 1 && celula [7] == 1 || celula [2] == 1 && celula [5] == 1 && celula [8] == 1){//vertical X
		document.getElementById("vitoria").innerHTML = "A vitória é do jogador X!";
		FimDeJogo = true;
		contadorX++;
		document.getElementById("contadorX").innerHTML = contadorX;
		mostrarJogador = true;
	}
	//////////Jogador 2//////////////
	//Verificação de vitoria do O
	else if ( celula [0] == 2 && celula [4] == 2 && celula [8] == 2|| celula [2] == 2 && celula [4] == 2 && celula [6] == 2) { // diagonal O
		document.getElementById("vitoria").innerHTML = "A vitória é do jogador O!";
		FimDeJogo = true;
		contadorO++;
		document.getElementById("contadorO").innerHTML = contadorO;
		mostrarJogador = false;
	}
	else if (celula [0] == 2 && celula [1] == 2 && celula [2] == 2 || celula [3] == 2 && celula [4] == 2 && celula [5] == 2 || celula [6] == 2 && celula [7] == 2 && celula [8] == 2){// Horizontal O
		document.getElementById("vitoria").innerHTML = "A vitória é do jogador O!";
		FimDeJogo = true;
		contadorO++;
		document.getElementById("contadorO").innerHTML = contadorO;
	}
	else if (celula [0] == 2 && celula [3] == 2 && celula [6] == 2 || celula [1] == 2 && celula [4] == 2 && celula [7] == 2 || celula [2] == 2 && celula [5] == 2 && celula [8] == 2){//vertical O
		document.getElementById("vitoria").innerHTML = "A vitória é do jogador O!"
		FimDeJogo = true;
		contadorO++;
		document.getElementById("contadorO").innerHTML = contadorO;
	}
	else if (velha >= 9){//se for maior que nove, significa que deu velha
		document.getElementById("vitoria").innerHTML = "Empate X O";
	}
}
function Aleatorio(){
	while(celula [x] != 0){//caso não seja encontrado nenhuma celula, a jogada é aleatória 
	x = (Math.floor(Math.random() * 9 + 1 ) - 1);
	}

}
function Reiniciar(){//inicia uma nova partida, zerando tudo, menos os pontos
	celula = [0,0,0,0,0,0,0,0,0];
	for (i = 0; i<9; i++ ){
		document.getElementById(i).src=("imagens/branco.png");
	}
	FimDeJogo = false;
	Jogador=true;
	velha = 0;
	CPUX = 0;
	Jogada = 0;
	if(tipoDeJogo == "JxJ"){
		document.getElementById("mostrarX").innerHTML = "X";
	}
	else{
		document.getElementById("mostrarX").innerHTML = "";
	}
	document.getElementById("vitoria").innerHTML = "";//Limpar a linha que mostrar quem ganhou
	document.getElementById("mostrarO").innerHTML = "";//limpar a linha do ultimo a joga
}
function facil(){
	x = (Math.floor(Math.random() * 9 + 1 ) - 1);
	CPUX++;
	if(CPUX < 5){//A CPU só pode joga 4 vezes, se for igual a 4 ela para de joga
		while(celula [x] != 0){// 
			x = (Math.floor(Math.random() * 9 + 1 ) - 1);
		}
		celula [x] = 2;
		document.getElementById(x).src = "imagens/o.png";
	}	
}
function Intermediario(){
	CPUX++;
	Jogada++;
	if(CPUX < 5){//A CPU só pode jogar 4 vezes, se for maior que 5 ela para de jogar
		if(Jogada == 1){
			x = (Math.floor(Math.random() * 9 + 1 ) - 1);
			while(celula [x] != 0){// 
				alert("hh")
			x = (Math.floor(Math.random() * 9 + 1 ) - 1);
			}
		}
		else{
			maquinaDefende();	
		}
		celula [x] = 2;
		document.getElementById(x).src = "imagens/o.png";
	}	
}
function Dificil(){
	CPUX++;
	Jogada++;
	if(CPUX < 5){//A CPU só pode jogar 4 vezes, se for igual a 4 ela para de jogar
		if(Jogada == 1){
			//Possiveis jogadas na primeira partida
			if(celula [0] == 1 || celula [1] == 1 || celula [2] == 1 || celula [3] == 1 ||celula [5] == 1|| celula [6] == 1 ||celula [7] == 1|| celula [8] == 1){
				x = 4
			}
			else if(celula [4] == 1){
				x = 6	
			}				
		}	
		else{
			maquinaGanha();
		}	
		celula [x] = 2;
		document.getElementById(x).src = "imagens/o.png";
	}	
}
function maquinaGanha(){
	if(celula [0] == 2 && celula [1] == 2 && celula [2] == 0){
		x = 2;
	}
	else if(celula [1] == 2 && celula [2] == 2 && celula [0] == 0){
		x = 0;
	}
	else if(celula [0] == 2 && celula [2] == 2 && celula [1] == 0){
		x = 1;
	}
	// Linha 2
	else if(celula [3] == 2 && celula [4] == 2 && celula [5] == 0){
		x = 5;
	}
	else if(celula [4] == 2 && celula [5] == 2 && celula [3] == 0){
		x = 3;
	}
	else if(celula [3] == 2 && celula [5] == 2 && celula [4] == 0){
		x = 3;
	}
	// Linha 3
	else if(celula [6] == 2 && celula [7] == 2 && celula [8] == 0){
		x = 8;
	}
	else if(celula [7] == 2 && celula [8] == 2 && celula [6] == 0){
		x = 6;
	}
	else if(celula [6] == 2 && celula [8] == 2 && celula [7] == 0){
		x = 7;
	}

	//Colunas 
	//Coluna 1
	else if(celula [0] == 2 && celula [3] == 2 && celula [6] == 0){
		x = 6;
	}
	else if(celula [3] == 2 && celula [6] == 2 && celula [0] == 0){
		x = 0;
	}
	else if(celula [0] == 2 && celula [6] == 2 && celula [3] == 0){
		x = 3;
	}
	// Coluna 2
	else if(celula [1] == 2 && celula [4] == 2 && celula [7] == 0){
		x = 7;
	}
	else if(celula [4] == 2 && celula [7] == 2 && celula [1] == 0){
		x = 1;
	}
	else if(celula [1] == 2 && celula [7] == 2 && celula [4] == 0){
		x = 4;
	}
	// Coluna 3
	else if(celula [2] == 2 && celula [5] == 2 && celula [8] == 0){
		x = 8;
	}
	else if(celula [5] == 2 && celula [8] == 2 && celula [2] == 0){
		x = 2;
	}
	else if(celula [2] == 2 && celula [8] == 2 && celula [5] == 0){
		x = 5;
	}
	//Diagonal 

	else if(celula [0] == 2 && celula [4] == 2 && celula [8] == 0){
		x = 8;
	}
	else if(celula [0] == 2 && celula [8] == 2 && celula [4] == 0){
		x = 4;
	}
	else if(celula [4] == 2 && celula [8] == 2 && celula [0] == 0){
		x = 0;
	}
	else if(celula [6] == 2 && celula [4] == 2 && celula [2] == 0){
		x = 2;
	}
	else if(celula [2] == 2 && celula [4] == 2 && celula [6] == 0){
		x = 6;
	}
	else if(celula [2] == 2 && celula [6] == 2 && celula [4] == 0){
		x = 4;
	}
	else{
		maquinaDefende();
	}
}

function maquinaDefende(){
	// Linha Horizontal 1
	if(celula [0] == 1 && celula [1] == 1 && celula [2] == 0){
		x = 2;
	}
	else if(celula [1] == 1 && celula [2] == 1 && celula [0] == 0){
		x = 0;
	}
	else if(celula [0] == 1 && celula [2] == 1 && celula [1] == 0){
		x = 1;
	}
	// Linha 2
	else if(celula [3] == 1 && celula [4] == 1 && celula [5] == 0){
		x = 5;
	}
	else if(celula [4] == 1 && celula [5] == 1 && celula [3] == 0){
		x = 3;
	}
	else if(celula [3] == 1 && celula [5] == 1 && celula [4] == 0){
		x = 3;
	}
	// Linha 3
	else if(celula [6] == 1 && celula [7] == 1 && celula [8] == 0){
		x = 8;
	}
	else if(celula [7] == 1 && celula [8] == 1 && celula [6] == 0){
		x = 6;
	}
	else if(celula [6] == 1 && celula [8] == 1 && celula [7] == 0){
		x = 7;
	}

	//Colunas 
	//Coluna 1
	else if(celula [0] == 1 && celula [3] == 1 && celula [6] == 0){
		x = 6;
	}
	else if(celula [3] == 1 && celula [6] == 1 && celula [0] == 0){
		x = 0;
	}
	else if(celula [0] == 1 && celula [6] == 1 && celula [3] == 0){
		x = 3;
	}
	// Coluna 2
	else if(celula [1] == 1 && celula [4] == 1 && celula [7] == 0){
		x = 7;
	}
	else if(celula [4] == 1 && celula [7] == 1 && celula [1] == 0){
		x = 1;
	}
	else if(celula [1] == 1 && celula [7] == 1 && celula [4] == 0){
		x = 4;
	}
	// Coluna 3
	else if(celula [2] == 1 && celula [5] == 1 && celula [8] == 0){
		x = 8;
	}
	else if(celula [5] == 1 && celula [8] == 1 && celula [2] == 0){
		x = 2;
	}
	else if(celula [2] == 1 && celula [8] == 1 && celula [5] == 0){
		x = 5;
	}
	//Diagonal 

	else if(celula [0] == 1 && celula [4] == 1 && celula [8] == 0){
		x = 8;
	}
	else if(celula [0] == 1 && celula [8] == 1 && celula [7] == 0){
		x = 7;
	}
	else if(celula [4] == 1 && celula [8] == 1 && celula [0] == 0){
		x = 0;
	}
	else if(celula [6] == 1 && celula [4] == 1 && celula [2] == 0){
		x = 2;
	}
	else if(celula [2] == 1 && celula [4] == 1 && celula [6] == 0){
		x = 6;
	}
	else if(celula [2] == 1 && celula [6] == 1 && celula [4] == 0){
		x = 4;
	}
	else if(celula [2] == 1 && celula [4] == 1 && celula [8] == 0){
		x = 8;
	}
	else if(celula [0] == 1 && celula [4] == 1 && celula [8] == 0){
		x = 8;
	}
	else if(celula [4] == 1 && celula [6] == 1 && celula [8] == 0){
		x = 8;
	}

	else if (celula[1] == 1 && celula[5] == 1 && celula[2] == 0){
        x = 2;
    }
    else if (celula[1] == 1 && celula[3] == 1 && celula[0] == 0){
     	x = 0;
    }
    else if (celula[5] == 1 && celula[7] == 1 && celula[8] == 0){
       x = 8;
    }
    else if (celula[3] == 1 && celula[7] == 1 && celula[6] == 0){
       x = 6;
    }

    else if (celula[0] == 1 && celula[8] == 1 && celula[7] == 0){
        x = 7;
    }
    else if (celula[2] == 1 && celula[6] == 1 && celula[3] == 0){
       x = 0;
    }
	else{
		Aleatorio();
	}
}

