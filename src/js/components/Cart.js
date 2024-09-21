import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";
import { CartItemList } from "./CartItemList.js";

const BASE_CLASS = "cart";

export class Cart extends Component {
  constructor(parentElement) {
    super(parentElement, {}, { cart: ProductContext.getInstance() });

    this.context.cart.addStateChangeListener(() => this.render());
  }

  getTotalPrice() {}

  render() {
    const totalCartItems = this.context.cart.items.length;
    let cartContainer = this.parentElement.find("#cartId");

    if (cartContainer.length === 0) {
      cartContainer = $(`
    <div id="cartId" class="${BASE_CLASS}">
      <h1>Cart <span class="${BASE_CLASS}__total-indicator">${totalCartItems}</span></h1>
      <div class="${BASE_CLASS}__summary">
        <h2>Summary</h2>
        <div class="${BASE_CLASS}__total-price">
          <h3>Total Price:</h3>
          <h3>$1130</h3>
        </div>
      </div>
      <ul class="${BASE_CLASS}-items"></ul>
    </div>
    `);
    } else {
      cartContainer.find("span").text(totalCartItems);
      cartContainer.find("ul").empty();
    }

    this.parentElement.append(cartContainer);

    new CartItemList(cartContainer.find("ul"));
  }
}
