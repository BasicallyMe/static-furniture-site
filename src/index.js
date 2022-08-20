const tl = gsap.timeline();
const designerInfo = document.querySelector(".designer-info");
const cityLocation = document.querySelector(".location");
const nav = document.getElementsByClassName("nav");
const carouselCounter = document.querySelector(".carousel-counter");
const [navOne, navTwo] = nav;

document.addEventListener("readystatechange", (e) => {
  if (document.readyState === "complete") {
    animateElements();
  }
});

// window.onload = () => {
//   animateElements();
// }

function animateElements() {
  tl.from('.logo', { y: -50, opacity: 0, duration: 0.3});
  tl.from(navOne.children, {
    y: -50,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  })
  tl.from(navTwo.children, { y: -50, opacity: 0, stagger: 0.2 })
  tl.from('.menu', { y: -50, opacity: 0, duration: 0.3}, 1.5);
  tl.from(
    ".picture-container",
    {
      x: 200,
      opacity: 0,
      duration: 0.7,
    },
    1.7
  );
  tl.from(designerInfo.children, {
    x: -200,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
  }, 1.7);
  tl.from(cityLocation.children, { x: -20, opacity: 0, duration: 0.7, stagger: 0.2 });
  tl.from(carouselCounter.children, { y: 100, opacity: 0, duration: 0.7, stagger: 0.2}, 2.5);
  console.log(tl.duration());
}
