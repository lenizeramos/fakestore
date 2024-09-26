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

    totalPrice = totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let string = totalPrice.split(".");
    let dollars = string[0];
    let cents = string[1];
    // console.log(string);



    if (cartContainer.length === 0) {
      cartContainer = $(`<div id="cartId" class="${BASE_CLASS}"></div>`);
    } else {
      cartContainer.empty();
    }

    let cartImage = $(
      `<h1 id="cartImage"><img src="media/shopping-cart-371980_1280.png" alt="" class="cart-img"><span class="${BASE_CLASS}__total-indicator">${totalCartItems}</span></h1>`
    );

    let divModal = $(`<div id="myModal" class="modal"></div>`);

    let divModalContainer = $(`<div class="modal-content"></div>`);

    let btnClose = $(`<span class="close">&times;</span>`);

    let divCartSummary = $(`<div class="${BASE_CLASS}__summary">
        <h2>Summary</h2>
        <div class="${BASE_CLASS}__total-price">
          <h3>Total Price:</h3>
          <h3 id="totalPrice">CAD$${dollars} <span id="cents">.${cents}</span></h3>
        </div>
      </div>`);
    let ulCartItems = $(`<ul class="${BASE_CLASS}-items"></ul>`);

    cartContainer.find("span").text(totalCartItems);
    cartContainer.find("#totalPrice").text(`$${dollars}.`);
    cartContainer.find("#cents").text(`${cents}`);

    if (totalCartItems === 0) {
      ulCartItems.append(`<li>Your cart is empty. Let’s add some items!</li>`);
    } else {
      new CartItemList(ulCartItems);
    }
    cartContainer.append(cartImage);
    /* cartContainer.append(divCartSummary);
    cartContainer.append(ulCartItems); */
    divModalContainer.append(btnClose);
    divModalContainer.append(divCartSummary);
    divModalContainer.append(ulCartItems);
    divModal.append(divModalContainer);
    cartContainer.append(divModal);

    this.parentElement.append(cartContainer);

    cartImage.on("click", () => {
      divModal.css("display", "block");
    });

    btnClose.on("click", () => {
      console.log("XXXXX");
      divModal.css("display", "none");
    });

    $(window).on("click", function (event) {
      if ($(event.target).is(divModal)) {
        $(divModal).css("display", "none");
      }
    });
  }
}
