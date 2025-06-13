 const cursor = new Cursor({
    container: "body",
    speed: 0.7,
    ease: "expo.out",
    visibleTimeout: 300,
  });
  $("[data-magnetic]").each(function () {
    new Magnetic(this);
  });
  // let smoother = ScrollSmoother.create({
  //   wrapper: "#wrapper",
  //   content: "#main-content",
  //   smooth: 2.5,
  //   ignoreMobileResize: true,
  //   effects: true,
  // });