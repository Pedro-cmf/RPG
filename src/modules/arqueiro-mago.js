import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago';
    static desc = 'Detentor de lanças e flechas mágicas!';

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, 100, 100, ArqueiroMago.tipo, ArqueiroMago.desc);
        this.ladoArqueiro = new Arqueiro(nome, 100, destreza);
        this.ladoMago = new Mago(nome, 100, elementoMagico, levelMagico, inteligencia);
    }
    
    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
    }
}