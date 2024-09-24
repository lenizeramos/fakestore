import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";

export class ProductItem extends Component {
  constructor(parentElement, props) {
    super(parentElement, props, { product: ProductContext.getInstance() });
  }
  addToCart() {
    this.context.product.addToCart(this.props.product);
  }
  render() {
    const { title, price, image, description } = this.props.product;
    const item = $(`
      <li class="product">
        <div class="product__img">
          <img src="${image}" alt="${title}">
        </div>
        <div class="product__contents">
          <div class="product__details">
            <h4>${title}</h4>
            <p>${description}</p>
            <p class="product__price">$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          <button class="button">Quick Add</button>
        </div>
      </li> 
    `);
    item.find("button").on("click", () => {
      this.addToCart();
    });
    this.parentElement.append(item);
  }
}
