const buttons = document.querySelectorAll(".tabs-title");
buttons.forEach((btn) => {
  btn.addEventListener("click", clickButton);
});

function clickButton(event) {
  let buttonAtr = this.getAttribute("data-id");
  let text = document.querySelector(`.tabs-content [data-id = ${buttonAtr}]`);
  document.querySelector(".show").classList.remove("show");
  text.classList.add("show");
  document.querySelector(".tabs-title.active").classList.remove("active");
  this.classList.add("active");
}

///////////////////////////////////////////////////////////////////////
const buttonsImg = document.querySelectorAll(".tabs-title-img");
buttonsImg.forEach((btn) => {
  btn.addEventListener("click", clickButtonImg);
});

function clickButtonImg(event) {
  let buttonAtr = this.getAttribute("data-id");
  document.querySelector(".tabs-title-img.active").classList.remove("active");
  this.classList.add("active");
  printSearchElements(buttonAtr);
}

function creatArrsUrl(category, lengs) {
  const changeStr = category.split("-").join(" ");
  let result = [];
  for (let i = 1; i <= lengs; i++) {
    result.push({
      url: `./img/${category}/${category}${i}.jpg`,
      name: changeStr,
    });
  }
  return result;
}

const data = [
  {
    dataId: "GraphicDesign",
    arr: creatArrsUrl("graphic-design", 6),
  },
  {
    dataId: "All",
    arr: [
      ...creatArrsUrl("graphic-design", 6),
      ...creatArrsUrl("landing-page", 6),
    ],
  },
  {
    dataId: "LandingPages",
    arr: creatArrsUrl("landing-page", 6),
  },
  {
    dataId: "AllPics",
    arr: [
      ...creatArrsUrl("graphic-design", 6),
      ...creatArrsUrl("landing-page", 6),
      ...creatArrsUrl("wordpress", 6),
      ...creatArrsUrl("web-design", 6),
    ],
  },
  {
    dataId: "Wordpress",
    arr: creatArrsUrl("wordpress", 6),
  },
  {
    dataId: "WebDesign",
    arr: creatArrsUrl("web-design", 6),
  },
];
function loadMore(element) {
  console.log(this);
  const loaderIcon = element.querySelector("I");
  const img = element.querySelector("IMG");
  loaderIcon.style.cssText="display:block;margin-right:5px";
  img.style.display="none";
  setTimeout(() => {
    loaderIcon.style.display="none";
    const allButton = document.querySelector(".tabs-title-img.active");
    allButton.dataset.id = "AllPics";
    printSearchElements("AllPics");
    element.remove();
  }, 3000);
}

function printSearchElements(categoryId) {
  const imgWrapper = document.querySelector(".img-content");
  const button = document.querySelector(".load-more");
  imgWrapper.textContent = "";
  const currentObj = data.find((obj) => obj.dataId === categoryId);
  currentObj.arr.forEach((obj) => {
    imgWrapper.insertAdjacentHTML(
      "afterbegin",
      ` <figure class="product">
                <img class="product-img" src= ${obj.url}>
                <div class="hover-product">
                    <div class="hover-product-btns"><a class="product-link" href="#">
                        <svg fill="#1FDAB5" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"
                                  fill-rule="evenodd"/>
                        </svg>
                    </a><a class="product-link" href="#">
                        <svg fill="#1FDAB5" height="11" viewBox="0 0 12 11" width="12" xmlns="http://www.w3.org/2000/svg">
                            <rect height="11" width="12"/>
                        </svg>
                    </a></div>
                    <h3 class="product-category">creative design</h3>
                    <p class="product-text">${obj.name}</p>

                </div>
            </figure`,
    );
  });
  if (categoryId === "All" && button === null) {
    imgWrapper.insertAdjacentHTML(
      "afterend",

      `<button class="button-add load-more" onclick="loadMore(this)"><i class="fa fa-refresh fa-spin"></i> <img src="./img/icons/forma1.png" alt=""/>Load More</button>`,
    );
  } else {
    button?.remove();
  }
}

printSearchElements("All");

let bullet = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxM[…]2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://i.pinimg.com/originals/f3/13/07/f313074df0a3210dc7ca4b7e97f7491c.jpg",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxM[…]HxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80",
];
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return `<div class='${className + " custom-bullet"}'><img src=${
        bullet[index]
      }></div>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///////////////////////////////////////////////////////////////
var grid = document.querySelector(".grid");
var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  gutter: 20,
  transitionDuration: "0.8s",
});
var subGrid = document.querySelector(".sub-grid");
var msnrysub = new Masonry(subGrid, {
  itemSelector: ".subgrid-item",
  gutter: 3,
  columnWidth: ".subgrid-sizer",
  transitionDuration: "0.2s",
});
var subGrid2 = document.querySelector(".sub-grid2");

var msnrysub2 = new Masonry(subGrid2, {
  itemSelector: ".subgrid-item2",
  gutter: 3,
  columnWidth: ".subgrid-sizer2",
  transitionDuration: "0.2s",
});
////////////////////////////////////////////////////////////////
const btnMasonry = document.querySelector(".add-masonry-items");
btnMasonry.addEventListener("click", function () {
  var elems = [];
  var fragment = document.createDocumentFragment();
  for (var i = 1; i < 5; i++) {
    var elem = getItemElement(i);
    fragment.appendChild(elem);
    elems.push(elem);
  }
  grid.appendChild(fragment);
  msnry.appended(elems);
  btnMasonry.remove();
});
function getItemElement(i) {
  var elem = document.createElement("div");
  (elem.innerHTML = `<div class="hide_block">
    <div class="hover_icon">
      <i class="fa fa-search fa-search-circle"></i>
    </div>
    <div class="hover_icon">
      <i class="fas fa-arrows-alt fa-arrows-alt-personal"></i>
    </div>
  </div>
  <img src="./img/gallery/gallery${i}.jpg" alt="" />`),
    (elem.className = "grid-item ");
  return elem;
}
////////////////////////////////////////////////////////////////////
imagesLoaded(grid).on("progress", function () {
  msnry.layout();
});
//////////////////////////////////////////////////////////////////
grid.addEventListener("click", function (event) {
  if (event.target.tagName !== "I") {
    return;
  }
  const selectors = ["subgrid-item2", "subgrid-item", "grid-item"];
  for (const selector of selectors) {
    const parent = event.target.closest(`.${selector}`);
    if (parent) {
      parent.classList.toggle(`${selector}--gigante`);
      break;
    }
  }

  msnry.layout();
  msnrysub.layout();
  msnrysub2.layout();
});
