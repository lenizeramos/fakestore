import { Component } from "./common/component.js"
import { Header } from "./components/Header.js";

export class App extends Component {
  render() {
    new Header(this.parentElement);

    const children = $(`
      <main></main>
    `);

    this.parentElement.append(children);
  }
}
