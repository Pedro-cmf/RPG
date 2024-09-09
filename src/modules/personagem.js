export class Personagem {
    #level;
    constructor(nome, vida, mana, tipo, desc) {
        this.nome = nome;
        this.vida = vida;
        this.mana = mana;
        this.#level = 1;
        this.tipo = tipo;
        this.desc = desc;
    }

    get level(){
        return this.#level;
    }

    set level(novoLevel){
        if(novoLevel >= 1 && novoLevel <=10){
            this.#level = novoLevel;
        }
    }

    aumentarLevel(){
        this.level +=1;
    }
    diminuirLevel(){
        this.level -=1;
    }


    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacável ${this.tipo}`;
        } else {
            return `${this.tipo} Iniciante`;
        }
    }

    atacar(outroPersonagem) {
        if (this.#level > outroPersonagem.level) {
            outroPersonagem.vida = 0;
            console.log(`${this.nome} matou ${outroPersonagem.nome}`);
        } else {
            console.log(`${this.nome} falhou em atacar`);
        }
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.level === personagem2.level) {
            return 'Empate!!!'
        }

        if (personagem1.level > personagem2.level) {
            return `${ personagem1.constructor.tipo } ${personagem1.nome} é o vencedor!`
        }

        return `${ personagem2.constructor.tipo } ${personagem2.nome} é o vencedor!`
    }

}