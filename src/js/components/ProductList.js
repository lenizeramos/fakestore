import { Component } from "../common/component.js";
import { ProductItem } from "./productItem.js";

export class ProductList extends Component {
  constructor(parentElement) {
    super(parentElement);
    this.getProducts();
  }
  
  async getProducts() {
    const response = await fetch("http://localhost:8000/products");
    if (!response.ok) {
      throw new Error("something went wrong while getting product data");
    }

    const productData = await response.json();
    this.setState({ productData });
  }

  render() {
    console.log(this.state.productData);
    (this.state.productData || []).forEach((product) => {
      new ProductItem(this.parentElement, { product });
    });
  }
}