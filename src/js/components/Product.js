import { Component } from "../common/component.js";
import { ProductList } from "./ProductList.js";

export class Product extends Component {
  render() {
    const children = $(`
            <div class="shop">
                <ul class="products"></ul>
            </div>`);

    new ProductList(children.find("ul"));
    this.parentElement.append(children);
  }
}

