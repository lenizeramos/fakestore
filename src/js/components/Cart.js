import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";
import { CartItemList } from "./CartItemList.js";

const BASE_CLASS = "cart";

export class Cart extends Component {
  constructor(parentElement) {
    super(parentElement, {}, { cart: ProductContext.getInstance() });

    this.context.cart.addStateChangeListener(() => this.render());
  }

  getTotalItems() {
    return this.context.cart.items.reduce(
      (totalItems, product) => totalItems + product.quantity,
      0
    );
  }

  getTotalPrice() {
    return this.context.cart.items.reduce(
      (totalPrice, product) => totalPrice + product.quantity * product.price,
      0
    );
  }

  render() {
    let totalCartItems = this.getTotalItems();
    let totalPrice = this.getTotalPrice();
    let cartContainer = this.parentElement.find("#cartId");

    let divCartContainer = $(`<div id="cartId" class="${BASE_CLASS}"></div>`);

    if (cartContainer.length === 0) {
      cartContainer = $(`
      <h1>Cart <span class="${BASE_CLASS}__total-indicator">${totalCartItems}</span></h1>
      <div class="${BASE_CLASS}__summary">
        <h2>Summary</h2>
        <div class="${BASE_CLASS}__total-price">
          <h3>Total Price:</h3>
          <h3 id="totalPrice">$${totalPrice}</h3>
        </div>
      </div>
      <ul class="${BASE_CLASS}-items"><li>Your cart is empty. Add some items!</li></ul>
    `);
    } else {
      cartContainer.find("span").text(totalCartItems);
      cartContainer.find("#totalPrice").text(`$${totalPrice}`);
      //cartContainer.find("ul").empty();
    }

    divCartContainer.append(cartContainer);
    this.parentElement.append(divCartContainer);

    new CartItemList(cartContainer.find(`.${BASE_CLASS}-items`));
  }

}
