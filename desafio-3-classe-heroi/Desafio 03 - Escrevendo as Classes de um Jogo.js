//Criando uma classe genérica que represente o Herói
class Heroi{
    constructor(nome,idade,tipo){
        this.nome= nome;
        this.idade= idade;
        this.tipo= tipo;
    }

//Criando um método para o ataque
    atacar() {
        let ataque ="";
        
        if(this.tipo === "mago") {
            ataque="magia";
        }else if (this.tipo === "guerreiro") {
            ataque="espada";
        }else if (this.tipo === "monge") {
            ataque="artes marciais";
        }else if (this.tipo === "ninja") {
            ataque="shuriken";
        }else {
            ataque="um ataque desconhecido";
        }
//Mensagem de saída
console.log(`O ${this.tipo} atacou usando ${ataque}`);  
    }
}


//Criando um novo Herói
let heroi1= new Heroi ("Justiceiro Fantasma de Ferro", 32, "guerreiro");
heroi1.atacar();

