gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



for(var i=1;i<=10;i++){
    var tl=gsap.timeline();
tl.from("#page3",{
    opacity:1,
    duration:1,
    delay:6,
})
.to("#page3",{
    opacity:0,
    duration:1,
    
})
.from("#page2",{
    opacity:1,
    duration:1,
    delay:6,
})
.to("#page2",{
    opacity:0,
    duration:1,
})
.from("#page1",{
    opacity:1,
    duration:1,
    delay:6,
})
.to("#page3",{
    opacity:1,
    duration:1
})

}