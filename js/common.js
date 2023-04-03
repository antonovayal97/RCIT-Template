// ЕСЛИ ДОКУМЕНТ ПОЛНОСТЬЮ ЗАГРУЖЕН АНАЛОГ $(document).ready
document.addEventListener("DOMContentLoaded",(event) => {
  const uslugiModal = new HystModal({
      linkAttributeName: "data-hystmodal",
      // настройки (не обязательно), см. API
  });

  const telPageModal = new HystModal({
      linkAttributeName: "data-hystmodal",
      // настройки (не обязательно), см. API
  });

  let header = document.querySelector('.header-main')
  let now = window.scrollY
  let mainContent = document.querySelector('main')
    mainContent.style = "padding-top:" + header.offsetHeight + 'px'
  window.addEventListener("resize", () => {
      mainContent.style = "padding-top:" + header.offsetHeight + 'px'
  });
  document.addEventListener('scroll',() => {
    if(this.scrollY > now && this.scrollY > 250)
    {
    	header.classList.add('header-main-hidden')
    	now = this.scrollY
    }
    else
    {
    	header.classList.remove('header-main-hidden')
    	now = this.scrollY
    }
  })



  let fileinput =  document.querySelectorAll('.inputfile')
  fileinput.forEach(item => {
    item.addEventListener("change",(e) =>{
       // item.nextElementSibling.innerText = item.files[0].name.substr(0, 30)
      item.nextElementSibling.nextElementSibling.innerHTML = "<div class='zayavka__download-icon'><svg class='icon icon-upload-sqr'><use href='./img/svg/sprite.svg#upload-check' xlink:href='./img/svg/sprite.svg#upload-check'></use></svg></div>"

    })
  });



  let homeObyavl = document.querySelectorAll('.section__cards_reactive')
  homeObyavl.forEach(item => {
    let homeObyavlName = item.querySelector('.home-card__name_reactive')
    let homeObyavlText = item.querySelector('.home-card__text_reactive')
    let miniCards = item.querySelectorAll('.home-mini-card')
    miniCards.forEach(item2 => {
      item2.addEventListener("click",() => {
        miniCards.forEach(item2 => {
          item2.classList.remove("home-mini-card__active")
        })
        item2.classList.toggle("home-mini-card__active")
        let miniCardName = item2.querySelector('.home-mini-card__text')
        let miniCardText = item2.querySelector('.home-mini-card__hidden')
        homeObyavlName.innerHTML = "<span>" + miniCardName.innerText + "</span>"
        homeObyavlText.innerHTML = "<p>" + miniCardText.innerText + "</p>"
      })
    });
  });

  let accords = document.querySelectorAll('.accord')
  accords.forEach(item => {
    let inside = item.querySelector('.accord-inside')
    let outside = item.querySelector('.accord-outside')
    let arrow = item.querySelector('.accord-arrow')
    outside.addEventListener('click',() => {
      item.classList.toggle('accord-active')
      inside.classList.toggle('accord-inside-active')
      arrow.classList.toggle('accord-arrow-active')
    })
  })

  let small_accords = document.querySelectorAll('.small-accord')
  small_accords.forEach(item => {
    let small_outside = item.querySelector('.small-accord__outside')
    small_outside.addEventListener('click',() => {
      let hc = item.classList.contains('small-accord__active')
      small_accords.forEach(item => {
        item.classList.remove('small-accord__active')
      })
      if(hc)
      {
        item.classList.remove('small-accord__active')
      }
      else
      {
        item.classList.add('small-accord__active')
      }
    })
  })

  let menuFirst = document.querySelectorAll('.header__burger-inside-main-menu-first')
  let menuSecondAll = document.querySelectorAll('.header__burger-inside-main-menu-second')
  menuFirst.forEach(item => {
    let menuSecond = item.querySelector('.header__burger-inside-main-menu-second')
    let menuFirstName = item.querySelector('.header__burger-inside-main-menu-first-name')
    menuFirstName.addEventListener('click',() => {
      let hasCls = item.classList.contains('header__burger-inside-main-menu-first-active')
      menuFirst.forEach(item => {
        item.classList.remove('header__burger-inside-main-menu-first-active')
      });
      if(hasCls)
      {
        item.classList.remove('header__burger-inside-main-menu-first-active')
      }
      else
      {
        item.classList.add('header__burger-inside-main-menu-first-active')
      }
    })
  });

  let menuOpenBtn = document.querySelector('.header__menu-btn')
  let menuWindow = document.querySelector('.header__burger-inside')
  let menuCloseBtn = document.querySelector('.header__burger-inside-close')
  menuOpenBtn.addEventListener('click',() => {
    menuWindow.classList.toggle('header__burger-active')
  })
  menuCloseBtn.addEventListener('click',() => {
    menuWindow.classList.remove('header__burger-active')
  })



  let mainBanner = new Swiper(".main-banner-swiper", {
    loop: true,
    cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      744:
      {
        cssMode: false,
      }
    }
  });

  let breadSwiper = new Swiper(".bread-swiper", {
    slidesPerView: "auto",
    cssMode: true,
    breakpoints:{
      744:
      {
        slidesPerView: "auto",
        cssMode: false,
      }
    }
  });

  let homePartners = new Swiper(".home-parnters", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  speed: 10000,
  autoplay:{
    delay: 0
  },
  breakpoints:{
    744:
    {
      spaceBetween: 20,
    }
  }
  });


  let homeUslugi = new Swiper(".home-uslugi", {
  slidesPerView: "auto",
  spaceBetween: 16,
  cssMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".home-uslugi__slide-btn-next",
    prevEl: ".home-uslugi__slide-btn-prev",
  },
  breakpoints:{
    744:
    {
      spaceBetween: 20,
      cssMode: false,
    }
  }
  });

  setTimeout(() => {
    let headerNotification = new Swiper(".header__notifications-swiper", {
      slidesPerView: "auto",
      loop: true,
      speed: 20000,
      autoplay:{
        delay: 0
      },
    });
    if(document.querySelector('.page-header__btns-swiper'))
    {
      let activetab = document.querySelector('.page-header__active-slide')
      // let active_index = parseInt(activetab.getAttribute("aria-label").substr(0, 1))
      function getNodeIndex( elm ){
    var c = elm.parentNode.children,
        i = c.length;

    while(i--)
      if( c[i] == elm )
        return i
}
      let pageHeader = new Swiper(".page-header__btns-swiper", {
        slidesPerView: "auto",
        cssMode: true,
        initialSlide: getNodeIndex(activetab),
        pagination: {
          el: ".page-header__swiper-paggination",
          type: "progressbar",
        },
        breakpoints:{
          744:
          {
            cssMode: false,
          }
        }
      });

      window.addEventListener('resize', () => {
        setTimeout(() => {
              pageHeader.destroy();
              pageHeader = new Swiper(".page-header__btns-swiper", {
                slidesPerView: "auto",
                cssMode: true,
                pagination: {
                el: ".page-header__swiper-paggination",
                type: "progressbar",
              },
                breakpoints:{
                  744:
                  {
                    cssMode: false,
                  }
                }
              });
        },10)
      });
    }

    let select = document.querySelectorAll('.page__select')
    select.forEach(item => {
      let select_inside = item.querySelector('.page__select-inside')
      let select_outside = item.querySelector('.page__select-outside')
      let select_arrow = item.querySelector('.page__select-arrow')
      select_outside.addEventListener('click',() => {
        item.classList.toggle('page__select_active')
        select_inside.classList.toggle('page__select-inside_active')
        select_arrow.classList.toggle('page__select-arrow_active')
      })
      select_inside.addEventListener('click',() => {
        item.classList.toggle('page__select_active')
        select_inside.classList.toggle('page__select-inside_active')
        select_arrow.classList.toggle('page__select-arrow_active')
      })
    })

    let sortSelect = document.querySelectorAll('.news__sort-select')
    sortSelect.forEach(item => {
      let sort_inside = item.querySelector('.news__select-inside')
      let sort_outside = item.querySelector('.news__select-outside')
      sort_outside.addEventListener('click',() => {
        item.classList.toggle('news__sort-select_active')
      })
      sort_inside.addEventListener('click',() => {
        item.classList.toggle('news__sort-select_active')
      })
    })
  }, 1)
  let aboutStage = new Swiper(".about-stage__swiper", {
    slidesPerView: "auto",
    allowTouchMove: true,
    cssMode: true,
    pagination: {
      el: ".about-stage__swiper-paggination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".about-stage__swiper-right",
      prevEl: ".about-stage__swiper-left",
    },
    breakpoints:{
      744:
      {
        allowTouchMove: true,
        cssMode: false,
      }
    }
  });

  let aboutStageWrap = document.querySelector('.about-stage')
  let aboutWrapper = document.querySelector('.about-stage__swiper-wrapper')

  if(aboutStageWrap)
  {
    aboutStageWrap.style.height = aboutWrapper.scrollWidth + 75 + 'px'
    window.addEventListener("resize", () => {
        aboutStageWrap.style.height = aboutWrapper.scrollWidth + 75 + 'px'
    });
  }

  // МОДАЛКИ НАЧАЛО
  const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
  });
  // МОДАЛКИ КОНЕЦ


  let calendarSwiper = new Swiper(".calendar__swiper", {
    freeMode: true,
    cssMode: true,
    slidesPerView: "auto",
    pagination: {
      el: ".calendar__swiper-paggination",
      type: "progressbar",
    },
  });






  let calendar = new Vue({
    el: '#calendar',
    data() {
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      return {
        isMounted: false,
        selectMonth: 1,
        selectYear: 2023,
        masks: {
          weekdays: 'WWWW',
          title: "MMMM"
        },
        attributes: [
          {
            key: 1,
            customData: {
              title: 'Министерство труда и социального развития РС(Я)',
              time: "15:00",
              class: 'bg-red-600 text-white',
            },
            dates: new Date(year, month, 1),
          },
          {
            key: 2,
            customData: {
              title: 'Министерство труда и социального развития РС(Я)',
              time: "15:00",
              class: 'bg-blue-500 text-white',
            },
            dates: new Date(year, month, 2),
          },
          {
            key: 3,
            customData: {
              title: "Министерство труда и социального развития РС(Я)",
              time: "15:00",
              class: 'bg-blue-500 text-white',
            },
            dates: new Date(year, month, 5),
          },
          {
            key: 4,
            customData: {
              title: 'Министерство труда и социального развития РС(Я)',
              time: "15:00",
              class: 'bg-indigo-500 text-white',
            },
            dates: new Date(year, month, 5),
          },
          {
            key: 4,
            customData: {
              title: 'Министерство труда и социального развития РС(Я)',
              time: "15:00",
              class: 'bg-teal-500 text-white',
            },
            dates: new Date(year, month, 7),
          },
          {
            key: 5,
            customData: {
              title: "Министерство труда и социального развития РС(Я)",
              time: "15:00",
              class: 'bg-pink-500 text-white',
            },
            dates: new Date(year, month, 11),
          },
          {
            key: 6,
            customData: {
              title: 'Министерство труда и социального развития РС(Я)',
              time: "15:00",
              class: 'bg-orange-500 text-white',
            },
            dates: { months: 5, ordinalWeekdays: { 2: 1 } },
          },
          {
            key: 7,
            customData: {
              title: "Министерство труда и социального развития РС(Я)",
              time: "15:00",
              class: 'bg-pink-500 text-white',
            },
            dates: new Date(year, month, 22),
          },
          {
            key: 8,
            customData: {
              title: 'Министерство труда и социального развития РС(Я)',
              time: "15:00",
              class: 'bg-red-600 text-white',
            },
            dates: new Date(year, month, 25),
          },
          {
            key: 9,
            customData: {
              title: 'Министерство труда и социального развития РС(Я)',
              time: "15:00",
              class: 'bg-red-600 text-white',
            },
            dates: new Date(year, 2, 1),
          },
          {
            key: 10,
            customData: {
              title: 'Министерство труда и социального развития РС(Я)',
              time: "15:00",
              class: 'bg-red-600 text-white',
            },
            dates: new Date(year, month, 1),
          },
        ],
      };
    },
    methods:{
      nextMonth()
      {
        this.$refs.calendar.move(1)
        this.selectMonth = this.$refs.calendar.pages[0].month
      },
      prevMonth()
      {
        this.$refs.calendar.move(-1)
        this.selectMonth = this.$refs.calendar.pages[0].month
      },
      changeYear(year)
      {
        this.selectYear = year
        this.$refs.calendar.move({month: parseInt(this.selectMonth),year: parseInt(year)})
      },
      changeMonth(month)
      {
        this.selectMonth = month
        this.$refs.calendar.move({month: parseInt(month),year: parseInt(this.selectYear)})
      }
    },
    computed:{
      thisMonth: function () {
        if(this.isMounted)
        {
          return this.$refs.calendar.pages[0].monthLabel
        }
        return
      },
      thisYear: function () {
        if(this.isMounted)
        {
          return this.$refs.calendar.pages[0].yearLabel
        }
        return
      },
    },
    mounted(){
      this.isMounted = true
      this.selectMonth = this.$refs.calendar.pages[0].month
      this.selectYear = this.$refs.calendar.pages[0].year
      console.log(this.$refs.calendar)
    }
  })
})







var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML + '<div class="custom-select__arrow"><svg class="icon"><use href="./img/svg/sprite.svg#accord" xlink:href="./img/svg/sprite.svg#accord"></use></svg></div>';
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML + '<div class="custom-select__arrow"><svg class="icon"><use href="./img/svg/sprite.svg#accord" xlink:href="./img/svg/sprite.svg#accord"></use></svg></div>';
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
















    let pages = document.getElementById('pagination').dataset.pages;
    document.getElementById('pagination').innerHTML = createPagination(pages, 1);
    function createPagination(pages, page) {
      let gal_items = document.querySelectorAll('.about-orcit__galary-item')
      gal_items.forEach(item => {
        item.classList.remove('about-orcit__galary-item__active')
      });
      let active_gal = document.getElementById('gal-' + page)
      active_gal.classList.add('about-orcit__galary-item__active')
      let str = '<ul>';
      let active;
      let pageCutLow = page - 1;
      let pageCutHigh = page + 1;
      // Show the Previous button only if you are on a page other than the first
      if (page > 1) {
        str += '<li class="page-item previous no"><a onclick="createPagination(pages, '+(page-1)+')" class="paggination__arrow"><svg class="icon icon-uslugi-left-arrow "><use href="./img/svg/sprite.svg#uslugi-left-arrow" xlink:href="./img/svg/sprite.svg#uslugi-left-arrow"></use></svg></a></li>';
      }
      else
        {
          str += '<li class="page-item previous no"><a class="paggination__arrow"><svg class="icon icon-uslugi-left-arrow "><use href="./img/svg/sprite.svg#uslugi-left-arrow" xlink:href="./img/svg/sprite.svg#uslugi-left-arrow"></use></svg></a></li>';
        }
      // Show all the pagination elements if there are less than 6 pages total
      if (pages < 6) {
        for (let p = 1; p <= pages; p++) {
          active = page == p ? "active" : "no";
          str += '<li class="'+active+'"><a onclick="createPagination(pages, '+p+')">'+ p +'</a></li>';
        }
      }
      // Use "..." to collapse pages outside of a certain range
      else {
        // Show the very first page followed by a "..." at the beginning of the
        // pagination section (after the Previous button)
        if (page > 2) {
          str += '<li class="no page-item "><a onclick="createPagination(pages, 1)">1</a></li>';
          if (page > 3) {
              str += '<li class="out-of-range"><a onclick="createPagination(pages,'+(page-2)+')">...</a></li>';
          }
        }
        // Determine how many pages to show after the current page index
        if (page === 1) {
          pageCutHigh += 2;
        } else if (page === 2) {
          pageCutHigh += 1;
        }
        // Determine how many pages to show before the current page index
        if (page === pages) {
          pageCutLow -= 2;
        } else if (page === pages-1) {
          pageCutLow -= 1;
        }
        // Output the indexes for pages that fall inside the range of pageCutLow
        // and pageCutHigh
        for (let p = pageCutLow; p <= pageCutHigh; p++) {
          if (p === 0) {
            p += 1;
          }
          if (p > pages) {
            continue
          }
          active = page == p ? "active" : "no";
          str += '<li class="page-item '+active+'"><a onclick="createPagination(pages, '+p+')">'+ p +'</a></li>';
        }
        // Show the very last page preceded by a "..." at the end of the pagination
        // section (before the Next button)
        if (page < pages-1) {
          if (page < pages-2) {
            str += '<li class="out-of-range"><a onclick="createPagination(pages,'+(page+2)+')">...</a></li>';
          }
          str += '<li class="page-item no"><a onclick="createPagination(pages, pages)">'+pages+'</a></li>';
        }
      }
      // Show the Next button only if you are on a page other than the last
      if (page < pages) {
        str += '<li class="page-item next no"><a onclick="createPagination(pages, '+(page+1)+')" class="paggination__arrow"><svg class="icon icon-uslugi-right-arrow "><use href="./img/svg/sprite.svg#uslugi-right-arrow" xlink:href="./img/svg/sprite.svg#uslugi-right-arrow"></use></svg></a></li>';
      }
      else
      {
        str += '<li class="page-item next no"><a class="paggination__arrow"><svg class="icon icon-uslugi-right-arrow "><use href="./img/svg/sprite.svg#uslugi-right-arrow" xlink:href="./img/svg/sprite.svg#uslugi-right-arrow"></use></svg></a></li>';
      }
      str += '</ul>';
      // Return the pagination string to be outputted in the pug templates
      document.getElementById('pagination').innerHTML = str;
      return str;
    }
