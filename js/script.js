// slider start
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider"),
    slides = document.querySelectorAll(".slide__img"),
    sliderInner = document.querySelector(".slider__inner"),
    sliderWrapper = document.querySelector(".slider__wrapper"),
    prev = document.querySelector(".slide__prev"),
    next = document.querySelector(".slide__next"),
    sliderWrapperWidth = parseInt(window.getComputedStyle(sliderWrapper).width);
  const tabs = document.querySelectorAll(".tab");
  let whatSlide = 0;
  let whatSlideWidth = 0;
  sliderInner.style.width = 100 * slides.length + "%";

  whatTab();

  let dots = document.createElement("ol"),
    dotsArr = [];

  dots.classList.add("dots");
  document.querySelector(".box-btn").prepend(dots);

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("li");
    dot.classList.add("dot");
    if (i == whatSlide) {
      dot.style.background = "#FFC700";
    }
    dots.append(dot);
    dotsArr.push(dot);
  }

  next.addEventListener("click", () => {
    if (whatSlideWidth == sliderWrapperWidth * (slides.length - 1)) {
      whatSlideWidth = 0;
    } else {
      whatSlideWidth += sliderWrapperWidth;
    }
    sliderInner.style.translate = `-${whatSlideWidth}px`;

    if (whatSlide == dotsArr.length - 1) {
      whatSlide = 0;
    } else {
      whatSlide++;
    }

    paintDot();
    whatTab();
  });

  prev.addEventListener("click", () => {
    if (whatSlideWidth == 0) {
      whatSlideWidth = sliderWrapperWidth * (slides.length - 1);
    } else {
      whatSlideWidth -= sliderWrapperWidth;
    }
    sliderInner.style.translate = `-${whatSlideWidth}px`;

    if (whatSlide == 0) {
      whatSlide = dotsArr.length - 1;
    } else {
      whatSlide--;
    }

    paintDot();
    whatTab();
  });

  dotsArr.forEach((item, i) => {
    item.addEventListener("click", () => {
      whatSlideWidth = sliderWrapperWidth * i;

      sliderInner.style.translate = `-${whatSlideWidth}px`;

      whatSlide = i;

      paintDot();
      whatTab();
    });
  });

  function whatTab() {
    tabs.forEach((tab) => {
      tab.style.display = "none";
    });
    tabs[whatSlide].style.display = "block";
  }

  function paintDot() {
    dotsArr.forEach((item) => (item.style.background = "#D9D9D9"));
    dotsArr[whatSlide].style.background = "#FFC700";
  }

  // detailed

  const numbers = [
    {
      name: "Трёхместный (Эконом-класс с двуспальной кроватью)",
      money: "От 1290 р.",
      imgSrc: "img/slider1.png",
      description: [
        "Площать номера 18 квм",
        "Двуспальная кровать и раскладное кресло",
        "3 спальных места",
      ],
      inRoom: [
        "настальная лампа",
        "вешалка",
        "гладильные принадлежности",
        "натуральное постельное белье из 100% хлопка",
        "москитная сетка",
        "деревянный или паркетный пол",
        "услуга «звонок-будильник»",
        "принадлежности для барбекю",
        "белье",
        "Электрический чайник и многое другое.",
      ],
      inFloor: ["кулер", "чай - кофе(кофемашина)", "кухня"],
      inTerritory: [
        "парковка",
        "детский бассейн",
        "мангальная зона",
        "беседки для посиделок",
        "детская площадка",
        "шезлонги для загара",
        "ресепшен",
        "аптечка первой помощи",
      ],
    },
    {
      name: "Двухместный (Комфорт-класс с двуспальной кроватью)",
      money: "От 1690 р.",
      imgSrc: "img/slider2.png",
      description: ["op1"],
      inRoom: ["inRoom", "op2", "op3"],
      inFloor: ["inFloor", "op2", "op3"],
      inTerritory: ["inTer", "op2", "op3"],
    },
    {
      name: "Двухместный (Комфорт-класс с двумя односпальными кроватьями)",
      money: "От 1690 р.",
      imgSrc: "img/slider3.png",
      description: ["op1", "op2", "op3"],
      inRoom: ["inRoom", "op2", "op3"],
      inFloor: ["inFloor", "op2", "op3"],
      inTerritory: ["inTer", "op2", "op3"],
    },
    {
      name: "Трёхместный (Комфорт-класс с двуспальной кроватью)",
      money: "От 1990 р.",
      imgSrc: "img/slider4.png",
      description: ["op1", "op2", "op3"],
      inRoom: ["inRoom", "op2", "op3"],
      inFloor: ["inFloor", "op2", "op3"],
      inTerritory: ["inTer", "op2", "op3"],
    },
    {
      name: "De Luxe (Делюкс четырехместный)",
      money: "От 2490 р.",
      imgSrc: "img/slider5.png",
      description: ["op1", "op2", "op3"],
      inRoom: ["inRoom", "op2", "op3"],
      inFloor: ["inFloor", "op2", "op3"],
      inTerritory: ["inTer", "op2", "op3"],
    },
    {
      name: "Апартаменты (Двухкомнатные апартаменты люкс с балконом)",
      money: "От 3490 р.",
      imgSrc: "img/slider6.png",
      description: ["op1", "op2", "op3"],
      inRoom: ["inRoom", "op2", "op3"],
      inFloor: ["inFloor", "op2", "op3"],
      inTerritory: ["inTer", "op2", "op3"],
    },
  ];

  class NumberHotel {
    constructor(
      name,
      money,
      imgSrc,
      descr,
      inRoom,
      inFloor,
      inTerritory,
      parents,
      infoBox
    ) {
      this.name = name;
      this.money = money;
      this.imgSrc = imgSrc;
      this.descr = descr;
      this.inRoom = inRoom;
      this.inFloor = inFloor;
      this.inTerritory = inTerritory;
      this.parents = parents;
      this.info = infoBox;
    }
    render() {
      this.parents.innerHTML = `
          <h2 class="detailed-number__heading">${this.name}</h2>
          <div class="detailed-number__line"></div>
          <div class="detailed-number__money">
            <p class="detailed-number__money-heading detailed-number__text">Расценки по месяцам:</p>
            <div class="detailed-number__money-price">
              <div class="detailed-number__text">Январь---</div>
              <div class="detailed-number__text">Февраль---</div>
              <div class="detailed-number__text">Март---</div>
              <div class="detailed-number__text">Апрель---</div>
              <div class="detailed-number__text">Май---</div>
              <div class="detailed-number__text">Июнь---</div>
              <div class="detailed-number__text">Июль---</div>
              <div class="detailed-number__text">Август---</div>
              <div class="detailed-number__text">Сентябрь---</div>
              <div class="detailed-number__text">Октябрь---</div>
              <div class="detailed-number__text">Ноябрь---</div>
              <div class="detailed-number__text">Декабрь---</div>
            </div>
          </div>
        `;
      this.renderDescr();
      this.renderRoom();
      this.renderFloor();
      this.renderTerritory();
    }
    renderDescr() {
      let div = document.createElement("div");
      div.classList.add("detailed-number__description");
      div.innerHTML = `
          <p class="detailed-number__title detailed-number__text"><img src="img/title.png" alt="">О номере</p>
        `;
      let list = document.createElement("ul");
      list.classList.add("detailed-number__list");
      this.descr.forEach((el) => {
        let item = document.createElement("li");
        item.classList.add("detailed-number__item");
        item.innerHTML = `
            <img src="img/exp.png" alt="">
            <p class="detailed-number__text">${el}</p>
            `;
        list.append(item);
      });
      div.append(list);
      this.parents.append(div);
    }
    renderRoom() {
      let div = document.createElement("div");
      div.classList.add("detailed-number__description");
      div.innerHTML = `
          <p class="detailed-number__title detailed-number__text"><img src="img/title.png" alt="">В номере</p>
        `;
      let list = document.createElement("ul");
      list.classList.add("detailed-number__list");
      this.inRoom.forEach((el) => {
        let item = document.createElement("li");
        item.classList.add("detailed-number__item");
        item.innerHTML = `
            <img src="img/exp.png" alt="">
            <p class="detailed-number__text">${el}</p>
            `;
        list.append(item);
      });
      div.append(list);
      this.parents.append(div);
    }
    renderFloor() {
      let div = document.createElement("div");
      div.classList.add("detailed-number__description");
      div.innerHTML = `
          <p class="detailed-number__title detailed-number__text"><img src="img/title.png" alt="">На этаже</p>
        `;
      let list = document.createElement("ul");
      list.classList.add("detailed-number__list");
      this.inFloor.forEach((el) => {
        let item = document.createElement("li");
        item.classList.add("detailed-number__item");
        item.innerHTML = `
            <img src="img/exp.png" alt="">
            <p class="detailed-number__text">${el}</p>
            `;
        list.append(item);
      });
      div.append(list);
      this.parents.append(div);
    }
    renderTerritory() {
      let div = document.createElement("div");
      div.classList.add("detailed-number__description");
      div.innerHTML = `
          <p class="detailed-number__title detailed-number__text"><img src="img/title.png" alt="">На территории</p>
        `;
      let list = document.createElement("ul");
      list.classList.add("detailed-number__list");
      this.inTerritory.forEach((el) => {
        let item = document.createElement("li");
        item.classList.add("detailed-number__item");
        item.innerHTML = `
            <img src="img/exp.png" alt="">
            <p class="detailed-number__text">${el}</p>
            `;
        list.append(item);
      });
      div.append(list);
      this.parents.append(div);
    }
  }

  const detailedBtn = document.querySelector("#detailed"),
    parentsWrapper = document.querySelector(".detailed-number__wrapper"),
    parents = document.querySelector(".detailed-number"),
    detailedBtnClose = document.querySelector(".detailed-number__close");

  detailedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    parents.style.display = "block";
    let { name, money, imgSrc, description, inRoom, inFloor, inTerritory } =
      numbers[whatSlide];
    let numberGener = new NumberHotel(
      name,
      money,
      imgSrc,
      description,
      inRoom,
      inFloor,
      inTerritory,
      parentsWrapper,
      parents
    );
    numberGener.render();
  });

  detailedBtnClose.addEventListener("click", (e) => {
    parents.style.display = "none";
  });
});
// slider finish
// burger-menu start
let burgerMenu = document.querySelector(".burger__menu");
let burgerList = burgerMenu.querySelector(".burger-list");

function burgerBtn(icon) {
  icon.classList.toggle("change");
  burgerList.classList.toggle("burger-active");
}
// buger-menu finish
// stocks block start
const menuItem = [
  {
    id: 1,
    header: "«Тариф выходного дня»",
    title:
      "Трансфер аэропорт-отель, жд.вокзал-отель БЕСПЛАТНО (при бронировании от 5-и суток и более)",
  },
  {
    id: 2,
    header: "«Тариф выходного дня»",
    title:
      "Скидка 3% при оплате (доплате)в отеле наличными или онлайн переводом",
  },
];

let cardItem = "";

let out = document.getElementById("out");
menuItem.forEach((menu) => {
  cardItem += `

  <div class="stocks-card" >
  <h2>${menu.header}</h2>
  <p>${menu.title}</p>
  </div>

  `;
});
out.insertAdjacentHTML("afterbegin", cardItem);
// stocks block finish
// reviews card start
const reviewsList = [
  {
    id: 1,
    name: "Дмитрий",
    stars: "img/five-stars.png",
    comment:
      "Все хорошо. Это была рабочая поездка, каждый день менял гостиницы для того, чтобы успеть на встречи по утрам. Взял номер люкс с видом на море в этом отеле, по цене стандарта в центре города. Люкс у них 2-комнатный, с небольшим балконом. Площадь не 39 метров, а все 50. Панорамный вид действительно панорамный, с открытыми занавесками лучше ходить одетым.",
    date: "22.22.2222",
  },
  {
    id: 2,
    name: "Дмитрий",
    stars: "img/five-stars.png",
    comment:
      "Все хорошо. Это была рабочая поездка, каждый день менял гостиницы для того, чтобы успеть на встречи по утрам. Взял номер люкс с видом на море в этом отеле, по цене стандарта в центре города. Люкс у них 2-комнатный, с небольшим балконом. Площадь не 39 метров, а все 50. Панорамный вид действительно панорамный, с открытыми занавесками лучше ходить одетым.",
    date: "22.22.2222",
  },
  {
    id: 3,
    name: "Дмитрий",
    stars: "img/five-stars.png",
    comment:
      "Все хорошо. Это была рабочая поездка, каждый день менял гостиницы для того, чтобы успеть на встречи по утрам. Взял номер люкс с видом на море в этом отеле, по цене стандарта в центре города. Люкс у них 2-комнатный, с небольшим балконом. Площадь не 39 метров, а все 50. Панорамный вид действительно панорамный, с открытыми занавесками лучше ходить одетым.",
    date: "22.22.2222",
  },
  {
    id: 4,
    name: "Дмитрий",
    stars: "img/five-stars.png",
    comment:
      "Все хорошо. Это была рабочая поездка, каждый день менял гостиницы для того, чтобы успеть на встречи по утрам. Взял номер люкс с видом на море в этом отеле, по цене стандарта в центре города. Люкс у них 2-комнатный, с небольшим балконом. Площадь не 39 метров, а все 50. Панорамный вид действительно панорамный, с открытыми занавесками лучше ходить одетым.",
    date: "22.22.2222",
  }
];
let reviewsItem = "";
let rewSlide = document.getElementById("rewsSlide");
console.log(rewSlide);
reviewsList.forEach((review) => {
  reviewsItem += `
  <div class="review-card" >
  <h2>${review.name}</h2>
  <p>Отзыв о мини-отеле Черномор</p>
  <img class="redline" src="img/redline.png" alt="">
  <img class="stars" src="${review.stars}" alt="">
  <p class="comment">${review.comment}</p>
  <p class="date">${review.date}</p>
  </div>

  `;
});
rewSlide.insertAdjacentHTML("afterbegin", reviewsItem);
// rewiews card finish
// reviews slider start
$(".reviews__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
});
// reviews slider finish