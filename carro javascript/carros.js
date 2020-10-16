var carros = ['fox', 'preto', 2016, 'volkswagem'];
var numero01 = 100;
var carro = {
	 carros: {
		primeiro: 'fox',
		ultimo: 'volkswagem',
	},
	ano : 2016,
	cor: 'preto',
	combustivel: ['etanol', 'gasolina', 'flex'],
	carro() {
		console.log(`Ano  ${this.ano}
    cor ${this.cor}
    combustivel ${this.combustivel[1]}`);
	},
	nome() {
		console.log(`nome ${this.carros.primeiro} ${this.carros.ultimo}`);
	},
};


console.log(carros[0]);
console.log(carro.carros.primeiro);
console.log(carro.combustivel[2]);
carro.carro();
carro.nome();