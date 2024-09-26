import { Component } from "../common/component.js";
import { ProductContext } from "../context/productContext.js";

let notyf = new Notyf({
  duration: 2500,
  position: {
    x: "center",
    y: "top",
  },
  types: [
    {
      type: "success",
      background: "#47af2b",
      className: "custom-success", 
    },
  ],
});

export class ProductItem extends Component {
  constructor(parentElement, props) {
    super(parentElement, props, { product: ProductContext.getInstance() });
  }

  render() {
    const { title, price, image, description } = this.props.product;
    let prices = price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    let string = prices.split(".");
    let dollars = string[0];
    let cents = string[1];

    const item = $(`
      <li class="product">
      <div id='title_price'>
      <h4>${title}</h4>
      <button class="button">Quick Add <span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjEzZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiI+Cgk8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTUwNC43MTcgMzIwSDIxMS41NzJsNi41NDUgMzJoMjY4LjQxOGMxNS40MDEgMCAyNi44MTYgMTQuMzAxIDIzLjQwMyAyOS4zMTlsLTUuNTE3IDI0LjI3NkM1MjMuMTEyIDQxNC42NjggNTM2IDQzMy44MjggNTM2IDQ1NmMwIDMxLjIwMi0yNS41MTkgNTYuNDQ0LTU2LjgyNCA1NS45OTRjLTI5LjgyMy0uNDI5LTU0LjM1LTI0LjYzMS01NS4xNTUtNTQuNDQ3Yy0uNDQtMTYuMjg3IDYuMDg1LTMxLjA0OSAxNi44MDMtNDEuNTQ4SDIzMS4xNzZDMjQxLjU1MyA0MjYuMTY1IDI0OCA0NDAuMzI2IDI0OCA0NTZjMCAzMS44MTMtMjYuNTI4IDU3LjQzMS01OC42NyA1NS45MzhjLTI4LjU0LTEuMzI1LTUxLjc1MS0yNC4zODUtNTMuMjUxLTUyLjkxN2MtMS4xNTgtMjIuMDM0IDEwLjQzNi00MS40NTUgMjguMDUxLTUxLjU4Nkw5My44ODMgNjRIMjRDMTAuNzQ1IDY0IDAgNTMuMjU1IDAgNDBWMjRDMCAxMC43NDUgMTAuNzQ1IDAgMjQgMGgxMDIuNTI5YzExLjQwMSAwIDIxLjIyOCA4LjAyMSAyMy41MTMgMTkuMTlMMTU5LjIwOCA2NEg1NTEuOTljMTUuNDAxIDAgMjYuODE2IDE0LjMwMSAyMy40MDMgMjkuMzE5bC00Ny4yNzMgMjA4QzUyNS42MzcgMzEyLjI0NiA1MTUuOTIzIDMyMCA1MDQuNzE3IDMyME00MDggMTY4aC00OHYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNmgtMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBoLTQ4Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djE2YzAgOC44MzcgNy4xNjMgMTYgMTYgMTZoNDh2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNmgxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGg0OGM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di0xNmMwLTguODM3LTcuMTYzLTE2LTE2LTE2IiAvPgo8L3N2Zz4=" alt="cart"></span></button>
      </div>
        <div class="product__img">
          <img src="${image}" alt="${title}">
        </div>
        <div class="product__contents">
          <div class="product__details">
            <p id="description">${description}</p>
            <p class="product__price">$${dollars} <span id="cents">.${cents}</span></p>
          </div>
        </div>
      </li> 
    `);

    item.find("button").on("click", () => {
      this.context.product.addToCart(this.props.product);
      notyf.success(`${title} has been added to cart`);
    });
    this.parentElement.append(item);
  }
}
