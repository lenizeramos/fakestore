import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";

export class ProductItem extends Component {
  constructor(parentElement, props) {
    super(parentElement, props, { product: ProductContext.getInstance() });
  }

  render() {
    const { title, price, image, description } = this.props.product;
    let prices = price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let string = new Array;
    string = prices.split(".");
    let dollars = string[0];
    let cents = string[1];


    const item = $(`
      <li class="product">
        <div class="product__img">
          <img src="${image}" alt="${title}">
        </div>
        <div class="product__contents">
          <div class="product__details">
            <h4>${title}</h4>
            <p>${description}</p>
            <p class="product__price">$${dollars} <span id="cents">${cents}</span></p>
          </div>
          <button class="button">Quick Add</button>
        </div>
      </li> 
    `);
    item.find("button").on("click", () => {
      this.context.product.addToCart(this.props.product);
    });
    this.parentElement.append(item);
  }
}
