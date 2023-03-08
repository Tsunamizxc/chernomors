// slider start
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider'),
    slides = document.querySelectorAll('.slide__img'),
    sliderInner = document.querySelector('.slider__inner'),
    sliderWrapper = document.querySelector('.slider__wrapper'),
    prev = document.querySelector('.slide__prev'),
    next = document.querySelector('.slide__next'),
    tabs = document.querySelectorAll('.tab');

  let whatSlide = 0;
  let whatSlideWidth = 0;
  sliderInner.style.width = 100 * slides.length + "%";

  whatTab();
  whatWidth();

  let dots = document.createElement('ol'),
    dotsArr = [];

  dots.classList.add('dots');
  document.querySelector('.box-btn').prepend(dots);

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('li');
    dot.classList.add('dot');
    if (i == whatSlide) {
      dot.style.background = '#FFC700';
    }
    dots.append(dot);
    dotsArr.push(dot);
  }

  next.addEventListener('click', () => {
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

  prev.addEventListener('click', () => {
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
    item.addEventListener('click', () => {
      whatSlideWidth = whatWidth() * i;
      sliderInner.style.translate = `-${whatSlideWidth}px`;

      whatSlide = i;

      paintDot();
      whatTab();
    });
  });

  window.addEventListener('resize', () => {
    whatSlideWidth = whatWidth() * 0;
    sliderInner.style.translate = `-${whatSlideWidth}px`;

    whatSlide = 0;
    paintDot();
    whatTab();
  });

  function whatTab() {
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
    tabs[whatSlide].style.display = 'block';
  }

  function paintDot() {
    dotsArr.forEach(item => item.style.background = '#D9D9D9');
    dotsArr[whatSlide].style.background = '#FFC700';
  }

  function whatWidth() {
    let width = parseInt(window.getComputedStyle(sliderWrapper).width);
    slides.forEach(slide => {
      slide.style.width = width;
    });
    return width;
  }

  // detailed

  const numbers = [{
    name: 'Трёхместный (Эконом-класс с двуспальной кроватью)',
    money: {
      Январь: '5000',
      Февраль: '10000',
      Март: '--',
      Апрель: '--',
      Май: '--',
      Июнь: '--',
      Июль: '--',
      Август: '--',
      Сентябрь: '--',
      Октябрь: '--',
      Ноябрь: '--',
      Декабрь: '--'
    },
    imgSrc: 'img/slider1.png',
    description: ['Площать номера 18 квм', 'Двуспальная кровать и раскладное кресло', '3 спальных места'],
    inRoom: ['настальная лампа', 'вешалка', 'гладильные принадлежности', 'натуральное постельное белье из 100% хлопка', 'москитная сетка', 'деревянный или паркетный пол', 'услуга «звонок-будильник»', 'принадлежности для барбекю', 'белье', 'Электрический чайник и многое другое.'],
    inFloor: ['кулер', 'чай - кофе(кофемашина)', 'кухня'],
    inTerritory: ['парковка', 'детский бассейн', 'мангальная зона', 'беседки для посиделок', 'детская площадка', 'шезлонги для загара', 'ресепшен', 'аптечка первой помощи']
  }, {
    name: 'Двухместный (Комфорт-класс с двуспальной кроватью)',
    money: {
      Январь: '--',
      Февраль: '--',
      Март: '--',
      Апрель: '--',
      Май: '--',
      Июнь: '--',
      Июль: '--',
      Август: '--',
      Сентябрь: '--',
      Октябрь: '--',
      Ноябрь: '--',
      Декабрь: '--'
    },
    imgSrc: 'img/slider2.png',
    description: ['Площать номера 20 квм', 'Двуспальная кровать', '2 спальных места'],
    inRoom: ['inRoom', 'op2', 'op3'],
    inFloor: ['inFloor', 'op2', 'op3'],
    inTerritory: ['inTer', 'op2', 'op3']
  }, {
    name: 'Двухместный (Комфорт-класс с двумя односпальными кроватьями)',
    money: {
      Январь: '--',
      Февраль: '--',
      Март: '--',
      Апрель: '--',
      Май: '--',
      Июнь: '--',
      Июль: '--',
      Август: '--',
      Сентябрь: '--',
      Октябрь: '--',
      Ноябрь: '--',
      Декабрь: '--'
    },
    imgSrc: 'img/slider3.png',
    description: ['op1', 'op2', 'op3'],
    inRoom: ['inRoom', 'op2', 'op3'],
    inFloor: ['inFloor', 'op2', 'op3'],
    inTerritory: ['inTer', 'op2', 'op3']
  }, {
    name: 'Трёхместный (Комфорт-класс с двуспальной кроватью)',
    money: {
      Январь: '--',
      Февраль: '--',
      Март: '--',
      Апрель: '--',
      Май: '--',
      Июнь: '--',
      Июль: '--',
      Август: '--',
      Сентябрь: '--',
      Октябрь: '--',
      Ноябрь: '--',
      Декабрь: '--'
    },
    imgSrc: 'img/slider4.png',
    description: ['op1', 'op2', 'op3'],
    inRoom: ['inRoom', 'op2', 'op3'],
    inFloor: ['inFloor', 'op2', 'op3'],
    inTerritory: ['inTer', 'op2', 'op3']
  }, {
    name: 'De Luxe (Делюкс четырехместный)',
    money: {
      Январь: '--',
      Февраль: '--',
      Март: '--',
      Апрель: '--',
      Май: '--',
      Июнь: '--',
      Июль: '--',
      Август: '--',
      Сентябрь: '--',
      Октябрь: '--',
      Ноябрь: '--',
      Декабрь: '--'
    },
    imgSrc: 'img/slider5.png',
    description: ['op1', 'op2', 'op3'],
    inRoom: ['inRoom', 'op2', 'op3'],
    inFloor: ['inFloor', 'op2', 'op3'],
    inTerritory: ['inTer', 'op2', 'op3']
  }, {
    name: 'Апартаменты (Двухкомнатные апартаменты люкс с балконом)',
    money: {
      Январь: '--',
      Февраль: '--',
      Март: '--',
      Апрель: '--',
      Май: '--',
      Июнь: '--',
      Июль: '--',
      Август: '--',
      Сентябрь: '--',
      Октябрь: '--',
      Ноябрь: '--',
      Декабрь: '--'
    },
    imgSrc: 'img/slider6.png',
    description: ['op1', 'op2', 'op3'],
    inRoom: ['inRoom', 'op2', 'op3'],
    inFloor: ['inFloor', 'op2', 'op3'],
    inTerritory: ['inTer', 'op2', 'op3']
  }];

  class NumberHotel {
    constructor(name, money, imgSrc, descr, inRoom, inFloor, inTerritory, parents) {
      this.name = name;
      this.money = money;
      this.imgSrc = imgSrc;
      this.descr = descr;
      this.inRoom = inRoom;
      this.inFloor = inFloor;
      this.inTerritory = inTerritory;
      this.parents = parents;
    }
    render() {
      this.parents.innerHTML =
        `
        <h2 class="detailed-number__heading">${this.name}</h2>
        <div class="detailed-number__line"></div>
      `;
      this.renderMoney();
      this.renderDescr();
      this.renderRoom();
      this.renderFloor();
      this.renderTerritory();
    }
    renderMoney() {
      let div = document.createElement('div');
      div.classList.add('detailed-number__money');
      div.innerHTML =
        `
        <p class="detailed-number__money-heading detailed-number__text">Расценки по месяцам:</p>
      `;
      let list = document.createElement('div');
      list.classList.add('detailed-number__money-price');
      let arr = Object.entries(this.money);
      for (let el of arr) {
        let text = document.createElement('div');
        text.classList.add('detailed-number__text');
        if (el[1] === '--') {
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
      let div = document.createElement('div');
      div.classList.add('detailed-number__description');
      div.innerHTML =
        `
        <p class="detailed-number__title detailed-number__text"><img src="img/title.png" alt="">О номере</p>
      `;
      let list = document.createElement('ul');
      list.classList.add('detailed-number__list');
      this.descr.forEach(el => {
        let item = document.createElement('li');
        item.classList.add('detailed-number__item');
        item.innerHTML =
          `
          <img src="img/exp.png" alt="">
          <p class="detailed-number__text">${el}</p>
          `;
        list.append(item);
      });
      div.append(list);
      this.parents.append(div);
    }

    renderRoom() {
      let div = document.createElement('div');
      div.classList.add('detailed-number__description');
      div.innerHTML =
        `
        <p class="detailed-number__title detailed-number__text"><img src="img/title.png" alt="">В номере</p>
      `;
      let list = document.createElement('ul');
      list.classList.add('detailed-number__list');
      this.inRoom.forEach(el => {
        let item = document.createElement('li');
        item.classList.add('detailed-number__item');
        item.innerHTML =
          `
          <img src="img/exp.png" alt="">
          <p class="detailed-number__text">${el}</p>
          `;
        list.append(item);
      });
      div.append(list);
      this.parents.append(div);
    }

    renderFloor() {
      let div = document.createElement('div');
      div.classList.add('detailed-number__description');
      div.innerHTML =
        `
        <p class="detailed-number__title detailed-number__text"><img src="img/title.png" alt="">На этаже</p>
      `;
      let list = document.createElement('ul');
      list.classList.add('detailed-number__list');
      this.inFloor.forEach(el => {
        let item = document.createElement('li');
        item.classList.add('detailed-number__item');
        item.innerHTML =
          `
          <img src="img/exp.png" alt="">
          <p class="detailed-number__text">${el}</p>
          `;
        list.append(item);
      });
      div.append(list);
      this.parents.append(div);
    }

    renderTerritory() {
      let div = document.createElement('div');
      div.classList.add('detailed-number__description');
      div.innerHTML =
        `
        <p class="detailed-number__title detailed-number__text"><img src="img/title.png" alt="">На территории</p>
      `;
      let list = document.createElement('ul');
      list.classList.add('detailed-number__list');
      this.inTerritory.forEach(el => {
        let item = document.createElement('li');
        item.classList.add('detailed-number__item');
        item.innerHTML =
          `
          <img src="img/exp.png" alt="">
          <p class="detailed-number__text">${el}</p>
          `;
        list.append(item);
      });
      div.append(list);
      this.parents.append(div);
    }
  }
  const bodyDocs = document.querySelector("body");
  const detailedBtn = document.querySelector('#detailed'),
    parentsWrapper = document.querySelector('.detailed-number__wrapper'),
    parents = document.querySelector('.detailed-number'),
    detailedBtnClose = document.querySelector('.detailed-number__close'),
    sectionNumbers = document.querySelector('.numbers');

  detailedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    parents.style.display = 'block';
    bodyDocs.style.overflowY = "hidden";
    let { name, money, imgSrc, description, inRoom, inFloor, inTerritory } = numbers[whatSlide];
    let numberGener = new NumberHotel(name, money, imgSrc, description, inRoom, inFloor, inTerritory, parentsWrapper);
    numberGener.render();
    // sectionNumbers.style.display = 'none';
  });

  detailedBtnClose.addEventListener('click', (e) => {
    parents.style.display = 'none';
    bodyDocs.style.overflowY = "scroll";
    // sectionNumbers.style.display = 'block';
  });
  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
    parents.style.display = 'none';
    bodyDocs.style.overflowY = "scroll";
    }
    });
});

// slider finish
// burger-menu start
let burgerMenu = document.querySelector(".burger__menu");
let burgerList = burgerMenu.querySelector(".burger-list");
const Bguard = document.querySelector(".bGuard");
function burgerBtn(icon) {
  icon.classList.toggle("change");
  burgerList.classList.toggle("burger-active");
  Bguard.classList.toggle("on");
}
let burgerBts = document.querySelector(".burger-btn");
Bguard.addEventListener("click", function () {
  burgerBts.classList.remove('change')
  burgerList.classList.toggle("burger-active");
  Bguard.classList.toggle("on");
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
