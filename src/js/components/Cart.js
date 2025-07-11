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

    totalPrice = totalPrice.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    let string = totalPrice.split(".");
    let dollars = string[0];
    let cents = string[1];

    let cartImage;
    let divModal;
    let divModalContainer;
    let btnClose;
    let divCartSummary;
    let ulCartItems;

    if (cartContainer.length === 0) {
      cartContainer = $(`<div id="cartId" class="${BASE_CLASS}"></div>`);
      cartImage = $(
        `<h1 id="cartImage"><img src="media/shopping-cart-371980_1280.png" alt="cart" class="cart-img"><span id="totalCartItems" class="${BASE_CLASS}__total-indicator">${totalCartItems}</span></h1>`
      );

      divModal = $(`<div id="myModal" class="modal"></div>`);

      divModalContainer = $(`<div class="modal-content"></div>`);

      btnClose = $(`<span class="close">&times;</span>`);

      divCartSummary = $(`<div class="${BASE_CLASS}__summary">
          <h2>Summary</h2>
          <div class="${BASE_CLASS}__total-price">
            <h3>Total Price:</h3>
            <h3 id="totalPrice">CAD$${dollars} <span id="cents">.${cents}</span></h3>
          </div>
        </div>`);
      ulCartItems = $(`<ul class="${BASE_CLASS}-items"></ul>`);

      cartContainer.append(cartImage);
      divModalContainer.append(btnClose);
      divModalContainer.append(divCartSummary);
      divModalContainer.append(ulCartItems);
      divModal.append(divModalContainer);
      cartContainer.append(divModal);

      new CartItemList(ulCartItems);

      this.parentElement.append(cartContainer);

      cartImage.on("click", () => {
        divModal.addClass("modal-content-active");
      });

      btnClose.on("click", () => {
        divModal.removeClass("modal-content-active");
      });

      $(window).on("click", function (event) {
        if ($(event.target).is(divModal)) {
          divModal.removeClass("modal-content-active");
        }
      });
    } else {
      let spanCents = cartContainer.find("#cents");
      spanCents.text(`.${cents}`);

      cartContainer.find("#totalCartItems").text(totalCartItems);
      cartContainer
        .find("#totalPrice")
        .text(`CAD$${dollars}`)
        .append(spanCents);

      new CartItemList(cartContainer.find("ul"));
    }
  }
}
