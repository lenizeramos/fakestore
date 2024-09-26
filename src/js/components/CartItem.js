import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";

const BASE_CLASS = "cart";

export class CartItem extends Component {
  constructor(parentElement, product) {
    super(parentElement, product, { cart: ProductContext.getInstance() });
  }

  render() {
    const { title, price, image, quantity, id,  } = this.props;
    const totalPrince = price * quantity;

    const item = $(`
    <li class="${BASE_CLASS}-item">
      <div class="${BASE_CLASS}-item__img">
        <img src="${image}" alt="${title}" />
      </div>
      <div class="${BASE_CLASS}-item__contents">
        <h4>${title}</h4>
        <div class="${BASE_CLASS}-item__details">
          <p class="${BASE_CLASS}-item__price">$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p class="${BASE_CLASS}-item__quantity">x ${quantity}</p>
          <p class="${BASE_CLASS}-item__price">$${totalPrince.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
        <button class="button button--remove">Remove</button>
      </div>
    </li>
    `);

    gsap.to(item, {
      duration: 1,
      ease: "bounce.out",
      y: 2
    })

    item.find("button").on("click", () => {
      this.context.cart.removeItem(id);
    });

    this.parentElement.append(item);
  }
}
