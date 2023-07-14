const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
const slides = document.querySelectorAll("li");

function slider() {
  let count = 0;
  function showSlide(counter) {
    slides.forEach((el) => {
      const styleSlide = el.dataset.id == counter ? "block" : "none";
      el.style.display = styleSlide;
    });
  }
  function checkCounter() {
    console.log(count);
    if (count > 3) {
      count = 0;
    } else if (count < 0) {
      count = 3;
    }
    showSlide(count);
  }
  return [
    function nextSlide() {
      count++;
      checkCounter();
    },
    function prevSlide() {
      count--;
      checkCounter();
    },
  ];
}
const [nextSlide, prevSlide] = slider();
buttonNext.onclick = nextSlide;
buttonPrev.onclick = prevSlide;
