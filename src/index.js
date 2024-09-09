import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoPedro = new Mago('Pedro', 4, 100, 'fogo', 7, 8);
const magoBabi = new Mago('Babi', 7, 100, 'Gelo', 6, 7);
const arqueiroJose = new Arqueiro('Jose', 100, 6, 10);
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroJoel = new Guerreiro('Joel',7, 5, 100)

const personagens = [magoPedro, magoBabi, arqueiroJose, arqueiroMagoChico, guerreiroJoel];

new PersonagemView(personagens).render()


