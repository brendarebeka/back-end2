//Desafio: declarar 5 variáveis de um produto de uma loja. participant4es: Brenda, Yuri, Maria, Thays

const loja = "SuperMercado";
const produto = "Vassoura";
const categoria = "Limpeza";
let preco = 20.00;
let desconto = 0.10;
let precoFinal = preco - (preco * desconto);

console.log(`Venha conferir nosso incrível produto: ${produto}, que foi de ${preco} para ${precoFinal}! É a melhor ferramenta para sua ${categoria}.`)