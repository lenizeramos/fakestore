export class ProductContext {
  static instance;
  #items;
  #stateChangeListeners;

  constructor() {
    this.#items = [];
    this.#stateChangeListeners = [];
  }
  static getInstance() {
    if (!ProductContext.instance) {
        ProductContext.instance = new ProductContext();
    }
    return ProductContext.instance;
  }

  get items() {
    return this.#items;
  }

  addStateChangeListener(func) {
    this.#stateChangeListeners.push(func);
  }

  addToCart(product) {
    const existingProduct = this.#items.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
      this.#items.push({ ...product, quantity: 1 });
    }
    this.#notify();
  }

  #notify() {
    this.#stateChangeListeners.forEach((callback) => callback());
  }

  removeItem(id) {
    this.#items.forEach((product, index) => {
      if (product.id === id) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
          this.#items.splice(index, 1);
        }
      }
    });
    this.#notify();
  }
}
