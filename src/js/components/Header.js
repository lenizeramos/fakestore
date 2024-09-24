import { Component } from "../common/component.js";
export class Header extends Component {
  render() {
    const children = $(`
      <header class="header"><h1>Fake Store</h1></header>`);

    this.parentElement.append(children);
  }
}
