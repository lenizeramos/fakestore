import { Component } from "../common/component.js";
export class Header extends Component {
  render() {
    const children = $(`
      <header class="header">
      <h1 class="title1">F</h1>
      <h1 class="title2">a</h1>
      <h1 class="title3">k</h1>
      <h1 class="title4">e </h1>
      <span> <img src="https://cdn-icons-png.flaticon.com/128/80/80807.png" alt="logo"> </span>
      <h1 class="title5"> S</h1>
      <h1 class="title6">t</h1>
      <h1 class="title7">o</h1>
      <h1 class="title1">r</h1>
      <h1 class="title3">e</h1>  
      </header>`);
    this.parentElement.append(children);

    var tl = gsap.timeline();
    tl.to(".header", { rotation: 360, duration: 1, ease: "elastic"})
      .to(".header", { rotation: 360, duration: 3, ease: "elastic"});

    gsap.registerPlugin(ScrollTrigger);

      gsap.to(".header", {
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom",
          scrub: 4,
          pin: true,
        },
        x: 880,
        duration: 4
      });

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
