import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
    static tipo = 'Mago';
    static desc = 'O mago é implacável!';

    constructor(nome, mana, elementoMagico, levelMagico, inteligencia) {
        super(nome, 100, mana, Mago.tipo, Mago.desc);
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    }

    obterInsignia() {
        if (this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`;
        } else {
            return super.obterInsignia();
        }
    }
}