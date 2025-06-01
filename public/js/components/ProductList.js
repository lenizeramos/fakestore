import { Component } from "../common/component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(parentElement) {
    super(parentElement);
    this.getProducts();
  }
  
  async getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("something went wrong while getting product data");
    }

    const {products } = await response.json();
    const productData = products.filter((product) => product.images.length != 0 ).map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        description: product.description,
      };
    })
    console.log(productData, "productData");
  
    this.setState({ productData });
  }

  render() {
    (this.state.productData || []).forEach((product) => {
      new ProductItem(this.parentElement, { product });
    });
  }
}