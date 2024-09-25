import { Component } from "../common/component.js";
export class Header extends Component {
  render() {
    const children = $(`
      <header class="header"><h1>Fake <span> <img src="https://cdn-icons-png.flaticon.com/128/80/80807.png" alt="logo"> </span>  Store</h1></header>`);

    this.parentElement.append(children);
  }
}
