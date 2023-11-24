// var crsr = document.querySelector(".cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  // crsr.style.top = dets.y - 15 + "px";
  // crsr.style.left = dets.x - 15 + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((item) => {
  item.addEventListener("mouseenter", () => {

    crsr.style.scale = 2;
    crsr.style.border="1px solid #fff"
    crsr.style.backgroundColor="transparent"
    
    item.addEventListener("mouseleave", () => {
    
      crsr.style.scale = 1;
      crsr.style.border="none"
      crsr.style.backgroundColor="#95c113"
    
    });
  });
});




gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});


gsap.from("#about-us img,#text",{
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 55%",
    scrub:2,
  }

})


gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  },
});
