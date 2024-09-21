import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";

const BASE_CLASS = "cart";

export class CartItem extends Component{
  constructor(parentElement, product) {
    super(parentElement, product, { cart: ProductContext.getInstance() });
  }

  removeItem(id) {
    this.context.cart.removeItem(id);
  }

  render() {
    const { title, price, image, quantity, id,  } = this.props;

    const item = $(`
    <li class="${BASE_CLASS}-item">
      <div class="${BASE_CLASS}-item__img">
        <img src="${image}" alt="${title}" />
      </div>
      <div class="${BASE_CLASS}-item__contents">
        <h4>${title}</h4>
        <div class="${BASE_CLASS}-item__details">
          <p class="${BASE_CLASS}-item__price">$${price}</p>
          <p class="${BASE_CLASS}-item__quantity">x ${quantity}</p>
          <p class="${BASE_CLASS}-item__price">$${price * quantity}</p>
        </div>
        <button class="button">Remove</button>
      </div>
    </li>
    `);

    item.find("button").on("click", () => {
      this.removeItem(id);
    });

    this.parentElement.append(item);
  }
}
