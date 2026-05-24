const produtos = [
  { nome: "Mouse Gamer", preco: 89.9, estoque: 12, promocao: true },
  { nome: "Teclado Mecânico", preco: 249.9, estoque: 0, promocao: true },
  { nome: "Headset", preco: 159.9, estoque: 5, promocao: false },
  { nome: "Mousepad", preco: 39.9, estoque: 20, promocao: true },
  { nome: "Monitor", preco: 799.9, estoque: 3, promocao: false }
];

const produtosDisponiveisEmPromocao = produtos.filter(produto => produto.promocao === true && produto.estoque > 0);

console.log("Produtos em promoção disponíveis no estoque:");
console.log(produtosDisponiveisEmPromocao);