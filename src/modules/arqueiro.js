import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro';
    static desc = 'Você tem o meu arco!';

    constructor(nome,  mana, destreza) {
        super(nome, mana, Arqueiro.tipo, Arqueiro.desc);
        this.destreza = destreza;
        this.mana = mana;
    }

    obterInsignia() {
        if (this.destreza >= 5) {
            return `${this.tipo} Domador de Flechas`;
        }
        return super.obterInsignia();
    }
}