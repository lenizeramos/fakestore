import { Component } from "../common/component.js";
export class Header extends Component {
  render() {
    console.log(this.parentElement);
    const children = $(`
      <header class="header"><h1>Fake Store</h1></header>`);

      console.log(children);

    this.parentElement.append(children);
  }
}
