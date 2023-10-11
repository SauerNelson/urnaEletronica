function urnaEletronica() {
    // Aqui vai todo o codigo do programa... 

    console.log('Iniciando o Programa');
    
    let 
        totalVotosCandidato1 = 0,
        totalVotosCandidato2 = 0,
        totalVotosCandidato3 = 0,
        totalVotosBranco = 0,
        totalVotosNulo = 0,
        nomeVotador = 0;
        
console.log("Bem Vindo") 

let voto;
do {
    //Instruções
    console.clear(); // limpa o console
    console.log('1|Candidaot1');
    console.log('2|Candidaot2');
    console.log('3|Candidaot3');
    console.log('5|Voto NULO');
    console.log('8|Voto em Branco');
    console.log('0|Encerrar votação');

    voto = parseInt(prompt('Digite seu voto aqui!'));



switch (voto) {
    case 1:
        totalVotosCandidato1++; //equivalente totalVotosCandidato1 +=1
        console.log('O candidato 1 recebeu um voto');
        break;

    case 2:       
        totalVotosCandidato2++;
        console.log('O candidato 2 recebeu um voto');
        break;
        
    case 3:       
        totalVotosCandidato3++;
        console.log('O candidato 3 recebeu um voto');
        break;
        default:
            return;}
}while (voto !==0);


let resultado;

do {
    if(totalVotosCandidato1 > totalVotosCandidato2 && totalVotosCandidato1 > totalVotosCandidato3) {
    console.log("O candidato 1 é o eleito"); { 
    }ç
    }
}



// Estrutura switch-case equivalente a:
// if (voto === 1) {
//    totalVotosCandidato1++;
//  console.log('O candidato 1 recebeu um voto');
// } else if (voto) === 2) {
//    totalVotosCandidato2++;
//    console.log('O candidato 2 recebeu um voto');
// } else {
//   return;  
//}




// apresentar as estatisticas da votação

//determinar um ganhador
}



function resultado(){
    return 'resultado';
}

console.log(resultado());