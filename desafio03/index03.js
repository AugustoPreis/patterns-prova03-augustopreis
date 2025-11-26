// Padrão GRASP: Creator
// A classe Order é responsável por criar objetos OrderItem,
// pois ela os agrega e faz uso direto deles.

// Objeto representando um item de pedido
class OrderItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Order é o "Creator": ela cria seus itens
class Order {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    const item = new OrderItem(name, price); // Criado pelo Creator
    this.items.push(item);
  }
}

const order = new Order();

order.addItem("Mouse", 50);
order.addItem("Teclado", 100);
order.addItem("Monitor", 800);

console.log("Itens do pedido:", order.items);

order.items.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item.name} - R$ ${item.price}`);
});
