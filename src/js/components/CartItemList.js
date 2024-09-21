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

    this.context.cart.items.forEach((product) => {
      new CartItem(this.parentElement, product);
    });
  }
}
