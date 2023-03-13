document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider"),
    slides = document.querySelectorAll(".slide__img"),
    sliderInner = document.querySelector(".slider__inner"),
    sliderWrapper = document.querySelector(".slider__wrapper"),
    prev = document.querySelector(".slide__prev"),
    next = document.querySelector(".slide__next"),
    tabs = document.querySelectorAll(".tab");

  let whatSlide = 0;
  let whatSlideWidth = 0;
  sliderInner.style.width = 100 * slides.length + "%";

  whatTab();
  whatWidth();

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
    if (whatSlideWidth == whatWidth() * (slides.length - 1)) {
      whatSlideWidth = 0;
    } else {
      whatSlideWidth += whatWidth();
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
      whatSlideWidth = whatWidth() * (slides.length - 1);
    } else {
      whatSlideWidth -= whatWidth();
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
      whatSlideWidth = whatWidth() * i;
      sliderInner.style.translate = `-${whatSlideWidth}px`;

      whatSlide = i;

      paintDot();
      whatTab();
    });
  });

  window.addEventListener("resize", () => {
    whatSlideWidth = whatWidth() * 0;
    sliderInner.style.translate = `-${whatSlideWidth}px`;

    whatSlide = 0;
    paintDot();
    whatTab();
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

  function whatWidth() {
    let width = parseInt(window.getComputedStyle(sliderWrapper).width);
    slides.forEach((slide) => {
      slide.style.width = width;
    });
    return width;
  }

  // detailed

  const numbers = [
    {
      name: "Трёхместный (Эконом-класс с двуспальной кроватью)",
      money: {
        Январь: "--",
        Февраль: "--",
        Март: "1290",
        Апрель: "1290",
        Май: "1490",
        Июнь: "2390",
        Июль: "3990",
        Август: "3990",
        Сентябрь: "3990",
        Октябрь: "1490",
        Ноябрь: "--",
        Декабрь: "--",
      },
      imgSrc: [
        "img/slider1.png",
        "img/numbers/1-2.jpg",
        "img/numbers/1-3.jpg",
        "img/numbers/1-4.jpg",
      ],
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
      money: {
        Январь: "--",
        Февраль: "--",
        Март: "1690",
        Апрель: "1690",
        Май: "1990",
        Июнь: "2990",
        Июль: "5490",
        Август: "5490",
        Сентябрь: "5490",
        Октябрь: "1990",
        Ноябрь: "--",
        Декабрь: "--",
      },
      imgSrc: [
        "img/numbers/2-1.jpg",
        "img/numbers/2-2.jpg",
        "img/numbers/2-3.jpg",
        "img/numbers/2-4.jpg",
      ],
      description: [
        "Площать номера 20 квм",
        "Двуспальная кровать",
        "2 спальных места",
      ],
      inRoom: [
        "бра",
        "натуральное постельное белье из 100% хлопка",
        "услуга «звонок-будильник»",
        "принадлежности для барбекю",
        "гипоаллергенная подушка",
        "затемненные шторы",
        "средства по уходу за обувью",
        "кровать-манеж для детей",
        "детектор угарного газа",
        "набор постельного белья",
        "обогреватель",
        "кондиционер",
        "индивидуальные шкафчики",
      ],
      inFloor: [
        "душ",
        "туалет",
        "душ-поддон",
        "полотенцесушитель",
        "полочки для косметических средств",
        "освежитель воздуха",
      ],
      inTerritory: [
        "вид на город",
        "беседка для отдыха",
        "балкон",
        "вид во внутренний дворик",
      ],
    },
    {
      name: "Двухместный (Комфорт-класс с двумя односпальными кроватьями)",
      money: {
        Январь: "--",
        Февраль: "--",
        Март: "1690",
        Апрель: "1690",
        Май: "1990",
        Июнь: "2990",
        Июль: "5490",
        Август: "5490",
        Сентябрь: "5490",
        Октябрь: "1990",
        Ноябрь: "--",
        Декабрь: "--",
      },
      imgSrc: [
        "img/numbers/3-1.jpg",
        "img/numbers/3-2.jpg",
        "img/numbers/3-3.jpg",
        "img/numbers/3-4.jpg",
      ],
      description: [
        "Площадь номера 20 квм",
        "Две односпальные кровати",
        "2 спальных места",
      ],
      inRoom: [
        "розетка возле кровати",
        "звукоизоляция",
        "затемненные шторы",
        "прикроватные тумбочки",
        "индивидуальные шкафчики",
        "доступ к зоне барбекю",
        "доступ к камерам хранения",
        "собственная зона барбекю",
        "бесплатные газеты и журналы в представительском лаундже",
        "матрас с ортопедическим основанием",
        "гипоаллергенное постельное бельё",
        "кондиционер",
      ],
      inFloor: [
        "полотенцесушитель",
        "душ или ванная",
        "держатели для полотенец",
        "душевая кабина",
        "раковина",
        "туалет",
      ],
      inTerritory: [
        "вид на сад",
        "вид во внутренний дворик",
        "балкон",
        "уличная мебель",
      ],
    },
    {
      name: "Трёхместный (Комфорт-класс с двуспальной кроватью)",
      money: {
        Январь: "--",
        Февраль: "--",
        Март: "1990",
        Апрель: "1990",
        Май: "2390",
        Июнь: "3790",
        Июль: "6390",
        Август: "6390",
        Сентябрь: "6390",
        Октябрь: "2390",
        Ноябрь: "--",
        Декабрь: "--",
      },
      imgSrc: [
        "img/numbers/4-1.jpg",
        "img/numbers/4-2.jpg",
        "img/numbers/4-3.jpg",
        "img/numbers/4-4.jpg",
      ],
      description: [
        "Площадь номера 23м2",
        "Односпальная кровать и двуспальная кровать",
        "3 спальных места",
      ],
      inRoom: [
        "матрасы с ортопедическим основанием",
        "набор полотенец",
        "индивидуальные шкафчики",
        "розетка возле кровати",
        "набор постельного белья",
        "натуральное постельное белье из 100% хлопка",
        "будильник",
        "принадлежности для барбекю",
        "датчик дыма",
        "доступ на детскую площадку",
        "гладильные принадлежности",
        "деревянный или паркетный пол",
        "бра",
        "индивидуальные светильники",
      ],
      inFloor: [
        "полочки для косметических средств",
        "душ или ванная",
        "держатели для полотенец",
        "душевая кабина",
        "раковина",
        "туалет",
      ],
      inTerritory: ["балкон", "красивый вид", "терраса"],
    },
    {
      name: "De Luxe (Делюкс четырехместный)",
      money: {
        Январь: "--",
        Февраль: "--",
        Март: "2490",
        Апрель: "2490",
        Май: "2990",
        Июнь: "4790",
        Июль: "7490",
        Август: "7490",
        Сентябрь: "7490",
        Октябрь: "2990",
        Ноябрь: "--",
        Декабрь: "--",
      },
      imgSrc: [
        "img/numbers/5-1.jpg",
        "img/numbers/5-2.jpg",
        "img/numbers/5-3.jpg",
        "img/numbers/5-4.jpg",
      ],
      description: [
        "Площадь номера 29м2",
        "Односпальная кровать, двуспальная кровать и раскладное кресло",
        "4 спальных места",
      ],
      inRoom: [
        "бра",
        "датчик дыма",
        "доступ к зоне барбекю",
        "набор полотенец",
        "индивидуальные шкафчики",
        "розетка возле кровати",
        "набор постельного белья",
        "натуральное постельное белье из 100% хлопка",
        "будильник",
        "принадлежности для барбекю",
        "датчик дыма",
        "доступ на детскую площадку",
      ],
      inFloor: [
        "душ",
        "туалет",
        "душ-поддон",
        "полотенцесушитель",
        "полочки для косметических средств",
        "освежитель воздуха",
      ],
      inTerritory: [
        "вид на сад",
        "вид во внутренний дворик",
        "балкон",
        "уличная мебель",
      ],
    },
    {
      name: "Апартаменты (Двухкомнатные апартаменты люкс с балконом)",
      money: {
        Январь: "--",
        Февраль: "--",
        Март: "3490",
        Апрель: "3490",
        Май: "4290",
        Июнь: "5990",
        Июль: "8990",
        Август: "8990",
        Сентябрь: "8990",
        Октябрь: "4290",
        Ноябрь: "--",
        Декабрь: "--",
      },
      imgSrc: [
        "img/numbers/6-1.jpg",
        "img/numbers/6-2.jpg",
        "img/numbers/6-3.jpg",
        "img/numbers/6-4.jpg",
      ],
      description: [
        "Площадь номера 39м2",
        "Двуспальная кровать, кровать King-size и диван-кровать",
        "6 спальных места",
      ],
      inRoom: [
        "балкон",
        "натуральное постельное белье из 100% хлопка",
        "услуга «звонок-будильник»",
        "принадлежности для барбекю",
        "гипоаллергенная подушка",
        "затемненные шторы",
        "средства по уходу за обувью",
        "кровать-манеж для детей",
        "детектор угарного газа",
        "набор постельного белья",
        "обогреватель",
        "кондиционер",
        "индивидуальные шкафчики",
        "душ",
        "туалет",
      ],
      inFloor: [
        "душ-поддон",
        "полотенцесушитель",
        "полочки для косметических средств",
        "освежитель воздуха",
      ],
      inTerritory: [
        "вид на город",
        "беседка для отдыха",
        "балкон",
        "вид во внутренний дворик",
      ],
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
      sliderParents
    ) {
      this.name = name;
      this.money = money;
      this.imgSrc = imgSrc;
      this.descr = descr;
      this.inRoom = inRoom;
      this.inFloor = inFloor;
      this.inTerritory = inTerritory;
      this.parents = parents;
      this.sliderParents = sliderParents;
    }
    render() {
      if (whatSlide == 0 || whatSlide == 5) {
        document.querySelectorAll("swiper-slide img").forEach((item) => {
          item.style.objectPosition = "center";
        });
      } else {
        document.querySelectorAll("swiper-slide img").forEach((item) => {
          item.style.objectPosition = "bottom";
        });
      }
      document.querySelector(".detailed-number__heading").textContent =
        this.name;
      this.parents.innerHTML = `
        
      `;
      this.renderMoney();
      this.renderDescr();
      this.renderRoom();
      this.renderFloor();
      this.renderTerritory();
      this.renderSlider();
    }
    renderMoney() {
      let div = document.createElement("div");
      div.classList.add("detailed-number__money");
      div.innerHTML = `
        <p class="detailed-number__money-heading detailed-number__text">Расценки по месяцам:</p>
      `;
      let list = document.createElement("div");
      list.classList.add("detailed-number__money-price");
      let arr = Object.entries(this.money);
      for (let el of arr) {
        let text = document.createElement("div");
        text.classList.add("detailed-number__text");
        if (el[1] === "--") {
          text.innerHTML = `
          ${el[0]}-${el[1]}
        `;
        } else {
          text.innerHTML = `
          ${el[0]}-<div style="display: inline-block;font-weight: bold;">${el[1]}р.</div>
        `;
        }
        list.append(text);
      }
      div.append(list);
      this.parents.append(div);
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

    renderSlider() {
      let slider = document.querySelectorAll(".mySwiper swiper-slide img"),
        sliderNav = document.querySelectorAll(".mySwiper2 swiper-slide img"),
        sliderBlocks = document.querySelectorAll(".mySwiper swiper-slide"),
        sliderNavBlocks = document.querySelectorAll(".mySwiper swiper-slide");
      slider.forEach((item, i) => {
        item.src = this.imgSrc[i];
      });

      sliderNav.forEach((item, i) => {
        item.src = this.imgSrc[i];
      });

      sliderBlocks.forEach((item, i) => {
        item.setAttribute("data-swiper-slide-index", i);
        item.setAttribute("aria-label", `${i + 1} / 4`);
      });

      sliderNavBlocks.forEach((item, i) => {
        item.setAttribute("data-swiper-slide-index", i);
      });
    }
  }
  const bodyDocs = document.querySelector("body"),
    detailedBtn = document.querySelector("#detailed"),
    parentsWrapper = document.querySelector(".detailed-number__wrapper"),
    parents = document.querySelector(".detailed-number"),
    detailedBtnClose = document.querySelector(".detailed-number__close"),
    sectionNumbers = document.querySelector(".numbers"),
    sliderParents = document.querySelector(".detailed-slider"),
    swiper = document.querySelector(".mySwiper").swiper,
    swiperNav = document.querySelector(".mySwiper2").swiper;

  detailedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    swiper.slideTo(0, 1, false);
    swiperNav.slideTo(0, 1, false);
    parents.style.display = "block";
    bodyDocs.style.overflowY = "hidden";
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
      sliderParents
    );
    numberGener.render();
  });

  detailedBtnClose.addEventListener("click", (e) => {
    bodyDocs.style.overflowY = "scroll";
    parents.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      bodyDocs.style.overflowY = "scroll";
      parents.style.display = "none";
    }
  });
  // тута
  const btnBook = document.querySelector("#book"),
    input = document.querySelector("#what"),
    sel = document.querySelector("#selectNumber"),
    opts = sel.querySelectorAll("option");

  function popupNumber() {
    let { name } = numbers[whatSlide];
    input.value = name;
    sel.selectedIndex = whatSlide;
  }

  btnBook.addEventListener("click", (e) => {
    e.preventDefault();
    popupNumber();
  });

  popupNumber();

  sel.addEventListener("change", () => {
    let { name } = numbers[sel.selectedIndex];
    input.value = name;
  });
  // тута конец
});
// slider finish
// burger-menu start
let burgerMenu = document.querySelector(".burger__menu");
let burgerList = burgerMenu.querySelector(".burger-list");
let burgerItem = burgerMenu.querySelectorAll(".burger-menu-item");
let burgerClose = document.querySelector(".burger-btn");
const Bguard = document.querySelector(".bGuard");
function burgerBtn(icon) {
  icon.classList.toggle("change");
  burgerList.classList.toggle("burger-active");
  Bguard.classList.toggle("on");
  document.body.classList.toggle("overflov");
}
let burgerBts = document.querySelector(".burger-btn");
Bguard.addEventListener("click", function () {
  burgerBts.classList.remove("change");
  burgerList.classList.toggle("burger-active");
  Bguard.classList.toggle("on");
  document.body.style.overflow = "auto";
});

burgerItem.forEach((key) => {
  key.addEventListener("click", function () {
    burgerBts.classList.remove("change");
    burgerList.classList.toggle("burger-active");
    Bguard.classList.toggle("on");
    document.body.style.overflow = "auto";
  });
});
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
    name: "Руслан Магуев",
    stars: "img/five-stars.png",
    comment:
      "Мини-отель Черномор стоит своих денег, проживали тут в марте 2023 года и остались одни только положительные впечатления, большая территория во дворе, есть детский бассейн, фонтаны растительность, несколько общих кухонь оборудованных, своя Парковка что большая редкость в Сочи, до поря идти примерно 7 минут по красивым центральным аллеям. Номер заслуживает отдельной похвалы абсолютно все есть в номере. А что необходимо будет еще лояльный хозяин предоставит все бесплатно. На территории много развлечений для детей, площадка игровая, игрушки, самокаты, велосипеды, коляски и тд, все бесплатно. В общем рекомендуем и сами теперь только сюда.",
    date: "02.03.2021",
  },  
  {
    id: 2,
    name: "Инна Фольц",
    stars: "img/five-stars.png",
    comment:
      "Замечательное место для отдыха. Плюсы во всем, начиная с бронирования и заказывая выездом. Номера очень чистые, удобное расположение самого отеля. Вид с балкона - это просто супер. Отдельная благодарность администраторам.",
    date: "06.03.2023",
  },
  {
    id: 3,
    name: "Елена Мирошниченко",
    stars: "img/five-stars.png",
    comment:
      "Неплохое место за эти деньги, радушный хозяин пустил в 6 утра, можно хорошо выспаться, рядом вокзал, аэропорт.",
    date: "03.12.2022",
  },
  {
    id: 4,
    name: "Анжелика Батршина",
    stars: "img/five-stars.png",
    comment:
      "Чисто, уютно, хороший хозяин, недорого. Недалеко от моря, рядом сквер, продуктовые магазины и кафе, очень удобно. Были одну ночь, впечатления только положительные.",
    date: "17.10.2022",
  },
  {
    id: 5,
    name: "Валерия Меньшакова",
    stars: "img/five-stars.png",
    comment:
      "Хороший ремонт, чистый номер. Посетите вьетнамский ресторан недалеко - лучший том ян. ",
    date: "23.10.2022",
  },
  {
    id: 6,
    name: "Александр Быков",
    stars: "img/five-stars.png",
    comment:
      "Были не в сезон, на короткое время. Чистый, новый номер. Море в шаговой доступности.",
    date: "20.11.2022",
  },
  {
    id: 7,
    name: "Анна Савкина",
    stars: "img/five-stars.png",
    comment:
      "Милый, уютный, чистый отель в центре, всё в шаговой доступности, отзывчивый администратор.",
    date: "23.06.2022",
  },
  {
    id: 8,
    name: "Валентина Замиховская",
    stars: "img/five-stars.png",
    comment:
      "Внимательный персонал, чистая приятная гостиница, очень вкусный завтрак.",
    date: "25.07.2022",
  },
  {
    id: 9,
    name: "Елена Васильева",
    stars: "img/five-stars.png",
    comment:
      "Отличный небольшой отель. Простые, но уютные, а главное чистые номера. Есть все необходимое - небольшой холодильник, чайник, посуда, фен, большой шкаф, свежее постельное и полотенца. Локация просто бомба! От аэропорта 10 минут на такси, 5 минут пешком до центральной улицы Ленина, 10 минут до моря размеренным шагом. Рядом супермаркеты и кафе. До торгового центр 12 минут пешком. Прекрасные администраторы, помогут решить любой вопрос.",
    date: "24.02.2023",
  },
];
let reviewsItem = "";
let rewSlide = document.getElementById("rewsSlide");

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
// smooth scroll start
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
// smooth scroll finish
// popup start
document.addEventListener("DOMContentLoaded", () => {
  const btnsRules = document.querySelectorAll(".popupRulesBtns"),
    btnsServices = document.querySelectorAll(".popupServicesBtns"),
    popupRules = document.querySelector(".popupRules"),
    popupServices = document.querySelector(".popupServices"),
    popupAll = document.querySelectorAll(".popup__window"),
    popupClose = document.querySelectorAll(".popup__close"),
    popupWrapper = document.querySelector(".popup__wrapper");

  btnsRules.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      popupRules.style.display = "block";
      popupWrapper.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  btnsServices.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      popupServices.style.display = "block";
      popupWrapper.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  popupClose.forEach((el) => {
    el.addEventListener("click", () => {
      closePopup();
    });
  });

  popupWrapper.addEventListener("click", (e) => {
    if (e.target == popupWrapper) {
      closePopup();
    }
  });

  function closePopup() {
    popupWrapper.style.display = "none";
    popupAll.forEach((item) => (item.style.display = "none"));
    document.body.style.overflow = "auto";
  }
});
// popup finish
// popup-main

let pmBtn = document.querySelectorAll(".zabron");
let popupMain = document.querySelector(".popup-main");
let closeMB = document.querySelector(".popup-main__close");
const BguardPM = document.querySelector(".bGuard-popup"),
  popupMainField = popupMain.querySelectorAll("input"),
  dataError = document.querySelector("#dataError"),
  vhod = document.querySelector("#dataOpen input"),
  exit = document.querySelector("#dataExit input");

function clearValue() {
  popupMainField.forEach((item) => (item.value = ""));
  dataError.style.display = "none";
  vhod.style.borderColor = "";
  exit.style.borderColor = "";
}

document.addEventListener("change", () => {
  if (vhod.value && exit.value) {
    if (vhod.value > exit.value) {
      dataError.style.display = "block";
      vhod.style.borderColor = "red";
      exit.style.borderColor = "red";
    } else {
      dataError.style.display = "none";
      vhod.style.borderColor = "";
      exit.style.borderColor = "";
    }
  }
});

pmBtn.forEach((pmBtns) => {
  pmBtns.addEventListener("click", function () {
    popupMain.style.display = "block";
    BguardPM.classList.add("ons");
    document.body.style.overflow = "hidden";
  });
});

closeMB.addEventListener("click", function () {
  popupMain.style.display = "none";
  BguardPM.classList.remove("ons");
  document.body.style.overflow = "auto";
  clearValue();
});

BguardPM.addEventListener("click", function () {
  clearValue();
  popupMain.style.display = "none";
  BguardPM.classList.remove("ons");
  document.body.style.overflow = "auto";
});
// кнопка 101Отели
(function () {
  var script = document.createElement("script"),
    generated_id = 233;
  script.type = "text/javascript";
  script.async = true;
  script.src =
    "https://101hotels.com/widget/generator/" +
    generated_id +
    "/658820/t-5/opacity-hover";
  var node = document.getElementsByTagName("head")[0];
  node.appendChild(script);
})();
// для попап-мейн даты
