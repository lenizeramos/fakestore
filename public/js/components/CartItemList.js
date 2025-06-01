import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";
import { CartItem } from "./CartItem.js";

export class CartItemList extends Component {
  constructor(parentElement) {
    super(parentElement, {}, { cart: ProductContext.getInstance() });

    this.context.cart.addStateChangeListener(() => this.render());
  }
  render() {
    this.parentElement.empty();
    if (this.context.cart.items.length === 0) {
      this.parentElement.append(
        `<li>Your cart is empty. Let’s add some items!</li>`
      );
    } else {
      this.context.cart.items.forEach((product) => {
        new CartItem(this.parentElement, product);
      });
    }
  }
}
