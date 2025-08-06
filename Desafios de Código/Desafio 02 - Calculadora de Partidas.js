//definindo o nome do herói e quantas partidas já jogou
let nomeHeroi="Justiceiro Fantasma de Ferro";
let vitorias=84;
let derrotas=21;

//definindo a função que vai calcular o saldo e classificar o nível do herói
function calcularNivel(vitorias,derrotas){
    let saldo=vitorias-derrotas;
    let nivel="";

    if(saldo<10){
        nivel="Ferro";
    }else if (saldo>=11 && saldo<=20){
        nivel="Bronze";
    }else if (saldo>=21 && saldo<=50){
        nivel="Prata";
    }else if (saldo>=51 && saldo<=80){
        nivel="Ouro";
    }else if (saldo>=81 && saldo<=90){
        nivel="Diamante";
    }else if (saldo>=91 && saldo<=100){
        nivel="Lendário";
    }else if (saldo>=101){
        nivel="Radiante";
    }
    return {saldo,nivel};
}

//chamando a função e capturando o retorno
let resultado=calcularNivel(vitorias,derrotas);

//exibindo a mensagem final
console.log(`O Herói de nome ${nomeHeroi} tem o saldo de ${resultado.saldo} e está no nível ${resultado.nivel}`)

