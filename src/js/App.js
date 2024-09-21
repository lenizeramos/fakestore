import { Component } from "./common/component.js";
import { Header } from "./components/Header.js";
import { Product } from "./components/Product.js";

export class App extends Component {
  render() {
    new Header(this.parentElement);

    const children = $(`
      <main></main>
    `);

    new Product(children);

    this.parentElement.append(children);
  }
}
