/*1. Crie uma classe que represente um Círculo. Esta classe deve possuir as propriedades de um ponto central 
(coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculo e do comprimento 
da circunferência. Escreva um bloco de código para testar a implementação do círculo.
*/

import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

class Circulo{
    private x: number;
    private y:number;
    private raio:number;

    constructor(x:number,y:number,raio:number){
        this.x=x;
        this.y=y;
        this.raio=raio;
    }

    get getX(){ return this.x; }
    get getY(){ return this.y; }
    get getraio(){ return this.raio; }
    set setX(x:number){ this.x=x; }
    set setY(y:number){ this.y=y; }
    set setraio(raio:number){ this.raio=raio; }
    
    areaCirculo(): number {
        return Math.PI* Math.pow(this.raio,2) ;
    }
   
    comprimentoCirculo(): number {
        return 2 * Math.PI * this.raio;
    }
}

let C1:Circulo= new Circulo(2,3,5);
console.log(C1.areaCirculo());
console.log(C1.comprimentoCirculo());


/*2. Sejam os seguintes objetos representados em um diagrama de classes UML:
a) Implemente as classes correspondentes em TypeScript. Você pode implementar os métodos get
apresentados na classe Moeda como: campos somente de leitura, métodos de acesso ou propriedades 
de leitura. Utilize uma coleção adequada para implementar a coleção de moedas na classe Cofrinho.
b) Escreva um bloco de código para testar a implementação.
c) Utilize um código para serializar um objeto Cofrinho em JSON e procure entender o formato de 
string que foi construído.*/
/*
class Moeda {
    constructor(
        private valor: number,
        private nome: string
    ) {}
    get valorDaMoeda() {
        return this.valor;
    }
    get nomeDaMoeda() {
        return this.nome;
    }
}

class Cofrinho {
    private moedas: Moeda[] = [];
    adicionar(moeda: Moeda) {
        this.moedas.push(moeda);
    }
    calcularTotal() {
        let total = 0;
        this.moedas.forEach(moeda => {
            total = total + moeda.valorDaMoeda;
        });
        return total;
    }
}

let cofre = new Cofrinho();
cofre.adicionar(new Moeda(1, 'Um Real'));
cofre.adicionar(new Moeda(0.5, '50 centavos'));
cofre.adicionar(new Moeda(0.25, '25 centavos'));
console.log(cofre.calcularTotal());
console.log(JSON.stringify(cofre));
*/

////////////////////////////////////////////////////////////


class Moeda {
    constructor(
        private valor: number,
        private nome: string
    ) {}
    get valorDaMoeda() {
        return this.valor;
    }
    get nomeDaMoeda() {
        return this.nome;
    }
}

class Cofrinho {
    private moedas: Moeda[] = [];
    adicionar(moeda: Moeda) {
        this.moedas.push(moeda);
    }
    calcularTotal() {
        let total = 0;
        this.moedas.forEach(moeda => {
            total = total + moeda.valorDaMoeda;
        });
        return total;
    }
    menorValorMoeda(): number {
        let menor = this.moedas[0].valorDaMoeda;
        this.moedas.forEach(moeda => {
            if (moeda.valorDaMoeda < menor) {
                menor = moeda.valorDaMoeda;
            }
        });
        return menor;
    }
    menorValorMoedaV2(): number {
        return this.moedas.reduce((menor, moeda) => {
            if (moeda.valorDaMoeda < menor) {
                return moeda.valorDaMoeda;
            }
            return menor;
        }, this.moedas[0].valorDaMoeda);
    }
    menorValorMoedaV3(): number {
        return Math.min(...this.moedas.map(moeda => moeda.valorDaMoeda));
    }
    menorMoeda(): Moeda {
        let menor = this.moedas[0];
        this.moedas.forEach(moeda => {
            if (moeda.valorDaMoeda < menor.valorDaMoeda) {
                menor = moeda;
            }
        });
        return menor;
    }
    frequencia(): Map<string, number> {
        let map = new Map<string, number>();
        map.set('1 real', 0);
        map.set('50 centavos', 0);
        map.set('25 centavos', 0);
        map.set('10 centavos', 0);
        map.set('5 centavos', 0);
        map.set('1 centavo', 0);
        this.moedas.forEach(moeda => {
            map.set(moeda.nomeDaMoeda, map.get(moeda.nomeDaMoeda)! + 1);
        });
        return map;
    }
}

let cofre = new Cofrinho();
cofre.adicionar(new Moeda(1, '1 real'));
cofre.adicionar(new Moeda(0.5, '50 centavos'));
cofre.adicionar(new Moeda(0.25, '25 centavos'));
console.log(cofre.calcularTotal());
console.log(JSON.stringify(cofre));
console.log(cofre.frequencia());

//4. Seja a seguinte hierarquia de herança representada em um diagrama e classes UML:

abstract class Cliente {
    constructor(
       private _nome: string 
    ) {}
    get nome() {
        return this._nome;
    }
    abstract get mensalidade(): number;
    toString(): string {
        return `Nome: ${this.nome} - Mensalidade: ${this.mensalidade}`;
    }
}

class ClienteFisico extends Cliente {
    constructor (
        nome: string,
        public idade: number,
        public salario: number
    ) {
        super(nome);
    }
    get mensalidade(): number {
        if (this.idade < 60) {
            return this.salario * 0.1;
        } else {
            return this.salario * 0.15;
        }
    }
}

class ClienteJuridico extends Cliente {
    constructor (
        nome: string,
        private _mensalidade: number
    ) {
        super(nome);
    }
    get mensalidade(): number {
        return this._mensalidade;
    }
    set mensealidade(valor: number) {
        this._mensalidade = valor;
    }
}

class CadastroClientes {
    private _clientes: Cliente[] = [];
    adiciona(cliente: Cliente): void {
        this._clientes.push(cliente);
    }
    toString(): string {
        return this._clientes.join('\n');
    }
}

let cadastroClientes = new CadastroClientes();
cadastroClientes.adiciona(new ClienteFisico('João', 20, 1000));
cadastroClientes.adiciona(new ClienteFisico('Maria', 50, 2000));
cadastroClientes.adiciona(new ClienteJuridico('Empório', 1000));
console.log(cadastroClientes.toString());