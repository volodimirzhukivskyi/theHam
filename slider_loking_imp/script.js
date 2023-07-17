const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
const slides = document.querySelectorAll("li");
const btns = document.querySelector(".wrapper-btns").children
function slider() {
  let count = 0;
  showSlide(count)
  function showSlide(counter) {
    slides.forEach((el) => {
      const styleSlide = el.dataset.id == counter ? "block" : "none";
      el.style.display = styleSlide;
    });
  }

  function checkCounter() {
    if (count > 3) {
      count = 0;
    } else if (count < 0) {
      count = 3;
    }
    showSlide(count);
  }
  return {
    changeSlide: function (e) {
      const nextBtnBool = e.target.id === "next";
      nextBtnBool ? count++ : count--;
      checkCounter();
    },
    setCounter: function (value) {
      count = value;
      checkCounter();
    },
  };
}
const {changeSlide, setCounter} = slider();
buttonNext.onclick = changeSlide;
buttonPrev.onclick = changeSlide;
for (const btn of btns) {
btn.onclick=()=>setCounter(btn.dataset.id)
}