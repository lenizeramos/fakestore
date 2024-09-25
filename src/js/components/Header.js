import { Component } from "../common/component.js";
export class Header extends Component {
  render() {
    const children = $(`
      <header class="header"><h1>Fake <span> <img src="https://cdn-icons-png.flaticon.com/128/80/80807.png" alt="logo"> </span>  Store</h1></header>`);

    this.parentElement.append(children);
    gsap.from(".title1", {
      duration:2,
      ease: "bounce.in",
      x: 800
      });
      gsap.from(".title6", {
        duration:2.5,
        ease: "back.in(1.7)",
        y: 500
      });
      gsap.from(".title3", {
        duration:4,
        ease: "elastic.inOut(1,0.3)",
        y: 550
      });
      gsap.from(".title4", {
        duration:3,
        ease: "steps(12)",
        x: 900
      });
      gsap.from(".title5", {
        duration:3,
        ease: `rough({
        template:none.out,
        strength: 1,
        points:20,
        taper:none,
        randomize:true,
        clamp:false
        })`,
        y:550
      });
      gsap.from(".title2", {
        duration: 2,
        ease: "none",
        repeat: 1,
        rotation: 360,
      })
      gsap.to(".title7", {
        duration: 2,
        ease: "none",
        repeat: 1,
        rotation: 360,
      })
  }
}
