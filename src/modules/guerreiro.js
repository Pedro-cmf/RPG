import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem{
    static tipo = 'Guerreiro';
    static desc = 'Você será esmagado pela fúria do Guerreiro!'
    constructor(nome,mana, forca, vida){
        super(nome, vida, mana, 'Guerreiro', Guerreiro.desc)
        this.nome = nome;
        this.forca = forca;
        this.vida = vida;
        this.mana = mana;

    }

    obterInsignia() {
        if (this.level >= 7 && this.forca >= 5) {
            return `Guerreiro furioso`;
        }
        return super.obterInsignia();
    }


}