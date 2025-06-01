import { Component } from "../common/component.js";
export class Header extends Component {
  render() {
    const children = $(`
          <header class="header">
            <h1>
    <span class="fake-text">Fake</span>
    <span class="shoe-container">
        <img src="https://cdn-icons-png.flaticon.com/128/80/80807.png" alt="logo" id="shoe">
    </span>
    <span class="store-text">Store</span>
</h1>
          </header>
    `);

    this.parentElement.append(children);

    const title = document.querySelector(".header h1");
    const fakeText = document.querySelector(".fake-text");
    const shoeContainer = document.querySelector(".shoe-container");
    const storeText = document.querySelector(".store-text");

    gsap.set([fakeText, shoeContainer, storeText], {
      y: 20,
      opacity: 0,
    });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(title, { duration: 0.5, opacity: 1 })
      .to(fakeText, { duration: 0.5, y: 0, opacity: 1 })
      .to(shoeContainer, { duration: 0.5, y: 0, opacity: 1 }, "-=0.3")
      .to(storeText, { duration: 0.5, y: 0, opacity: 1 }, "-=0.3");

    tl.to(
      "#shoe",
      {
        duration: 0.3,
        rotation: -25,
        ease: "elastic.out(1, 0.3)",
        scale: 1.4,
      },
      "-=0.2"
    );

    tl.to(".fake-text", {
      x: -22.5,
      scale: 1.2,
      ease: "elastic.out(1, 0.3)",
      duration: 0.5,
    });

    tl.to(".store-text", {
      x: 22.5,
      scale: 1.2,
      ease: "elastic.out(1, 0.3)",
      duration: 0.5,
    });
  }
}
