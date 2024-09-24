import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";
import { CartItemList } from "./CartItemList.js";

const BASE_CLASS = "cart";

export class Cart extends Component {
  constructor(parentElement) {
    super(parentElement, {}, { cart: ProductContext.getInstance() });

    this.context.cart.addStateChangeListener(() => this.render());
  }

  render() {
    let totalCartItems = this.context.cart.getTotalItems();
    let totalPrice = this.context.cart.getTotalPrice();
    let cartContainer = this.parentElement.find("#cartId");

    if (cartContainer.length === 0) {
      cartContainer = $(`<div id="cartId" class="${BASE_CLASS}"></div>`);
    } else {
      cartContainer.empty();
    }

    let h1Cart = $(
      `<h1>Cart <span class="${BASE_CLASS}__total-indicator">${totalCartItems}</span></h1>`
    );
    let divCartSummary = $(`<div class="${BASE_CLASS}__summary">
        <h2>Summary</h2>
        <div class="${BASE_CLASS}__total-price">
          <h3>Total Price:</h3>
          <h3 id="totalPrice">CAD$${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
        </div>
      </div>`);
    let ulCartItems = $(`<ul class="${BASE_CLASS}-items"></ul>`);

    cartContainer.find("span").text(totalCartItems);
    cartContainer.find("#totalPrice").text(`$${totalPrice}`);

    if (totalCartItems === 0) {
      ulCartItems.append(`<li>Your cart is empty. Let’s add some items!</li>`);
    } else {
      new CartItemList(ulCartItems);
    }
    cartContainer.append(h1Cart);
    cartContainer.append(divCartSummary);
    cartContainer.append(ulCartItems);

    this.parentElement.append(cartContainer);
  }
}
