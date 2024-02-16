let imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      let isIntersecting = el.isIntersecting;
      let target = el.target;

      console.log(target);

      if (isIntersecting) {
        target.classList.add("active");
        console.log(target);
      } else {
        target.classList.remove("active");
      }
    });
  },
  {
    root: document,
    threshold: 0.8,
  }
);

imgs.forEach((el) => {
  observer.observe(el);
});
