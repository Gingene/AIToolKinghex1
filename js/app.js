// DOM 選擇器
let navItem = document.querySelectorAll(".menu-item"); // 頂部導覽列
let menuIcons = document.querySelectorAll(".menu-icons"); // 菜單切換按鈕
let mobileItem = document.querySelectorAll(".mobile-menu-item");
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");

let bannerAnimation = document.querySelectorAll(".banner-animation img"); // 長草動畫

const home = document.getElementById("home"); // 首頁
const pricing = document.getElementById("pricing"); // 定價頁

let filterItem = document.querySelectorAll(".application-filter-list-item a"); // app篩選項目
const filterbtn = document.getElementById("filterbtn"); // app綁定按鈕
const filterSelection = document.querySelector(".application-filter-selection");
let filterSelectionModel = document.querySelectorAll(
  ".application-filter-selection-model p"
);
let filterSelectionTag = document.querySelectorAll(
  ".application-filter-selection-type p"
);
const sortbtn = document.getElementById("sortbtn");
const apps = document.querySelector(".apps");
let app = document.querySelectorAll(".app");
let pageLink = document.querySelectorAll(".page-link"); // app頁碼

const building = document.getElementById("building"); // 建立區塊
const questions = document.getElementById("questions"); // 問題區塊
let questionTitle = document.querySelectorAll(".question-title"); // 問題列表
let footerNavLink = document.querySelectorAll(".footerNav-link"); // 尾頁導覽列

const backToTop = document.getElementById("backToTop"); // 底部回首頁

let pageState = true;

$(".owl-carousel").owlCarousel({
  // loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    768: {
      items: 2,
      nav: false,
    },
    1024: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

menuToggle.addEventListener("click", (e) => {
  e.target.classList.toggle("activeicon");
  menuClose.classList.toggle("activeicon");
  $(".mobile-menu").toggleClass("mobile-menu-show");
  $(".mobile-menu").css("animation", "fadeIn 0.5s ease");
  $("section").hide();
});

// pageState儲存當前頁面資訊並在關閉導覽按鈕時重新渲染當前頁面
menuClose.addEventListener("click", (e) => {
  console.log(pageState);
  e.target.classList.toggle("activeicon");
  menuToggle.classList.toggle("activeicon");
  $(".mobile-menu").toggleClass("mobile-menu-show");
  if (pageState) {
    $(home).show();
    $(".application").show();
    $(".building").show();
    $(".footerNav").show();
  } else {
    $(pricing).show();
    $(".application").show();
    $(".questions").show();
    $(".footerNav").show();
  }
});

// 監聽器

// 頂部導覽列
navItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "定價") {
      home.style.display = "none";
      building.style.display = "none";
      pricing.style.animation = "fadeIn 1s ease forwards";
      pricing.style.display = "block";
      questions.style.animation = "fadeIn 1s ease forwards";
      questions.style.display = "flex";
      pageState = !pageState;
    } else if (e.target.textContent === "首頁") {
      pricing.style.display = "none";
      questions.style.display = "none";
      home.style.animation = "fadeIn 1s ease forwards";
      home.style.display = "block";
      building.style.animation = "fadeIn 1s ease forwards";
      building.style.display = "block";
      pageState = !pageState;
    }
  });
});

// 手機導覽列
mobileItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    $(".mobile-menu").toggleClass("mobile-menu-show");
    menuToggle.classList.toggle("activeicon");
    menuClose.classList.toggle("activeicon");
    if (e.target.textContent === "定價") {
      home.style.display = "none";
      building.style.display = "none";
      pricing.style.animation = "fadeIn 1s ease forwards";
      pricing.style.display = "block";
      questions.style.animation = "fadeIn 1s ease forwards";
      questions.style.display = "flex";
      // 回復被手機導覽列關閉的區塊
      $(".application").show();
      $(".footerNav").show();
      pageState = !pageState;
    } else if (e.target.textContent === "首頁") {
      pricing.style.display = "none";
      questions.style.display = "none";
      home.style.animation = "fadeIn 1s ease forwards";
      home.style.display = "block";
      building.style.animation = "fadeIn 1s ease forwards";
      building.style.display = "block";
      // 回復被手機導覽列關閉的區塊
      $(".application").show();
      $(".footerNav").show();
      pageState = !pageState;
    }
  });
});

// 尾頁導覽列
footerNavLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e.target);
    e.preventDefault();
    if (e.target.textContent === "定價") {
      home.style.display = "none";
      building.style.display = "none";
      pricing.style.animation = "fadeIn 1s ease forwards";
      pricing.style.display = "block";
      questions.style.animation = "fadeIn 1s ease forwards";
      questions.style.display = "flex";
      pageState = !pageState;
    } else if (e.target.textContent === "首頁") {
      pricing.style.display = "none";
      questions.style.display = "none";
      home.style.animation = "fadeIn 1s ease forwards";
      home.style.display = "block";
      building.style.animation = "fadeIn 1s ease forwards";
      building.style.display = "block";
      pageState = !pageState;
    }
  });
});

bannerAnimation.forEach((pic) => {
  pic.addEventListener("animationiteration", (e) => {
    // console.log(e);
    e.target.style.animationPlayState = "paused";
    setTimeout(() => {
      e.target.style.animationPlayState = "running";
    }, 1000);
  });
});

filterSelectionModel.forEach((model) => {
  model.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log(e.currentTarget.children[0].textContent);
    // e.target.classList.toggle("check-active");
    // if (e.currentTarget.children[0].textContent == "所有模型") {
    //   removModelCheck();
    // }
    e.currentTarget.children[1].classList.toggle("check-active");
  });
});

filterSelectionTag.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    e.preventDefault();
    e.currentTarget.children[1].classList.toggle("check-active");
  });
});

filterItem.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    e.preventDefault();
    removeFilter();
    e.target.classList.add("filter-active");
    console.log(e.target.innerText);

    app.forEach((item) => {
      let tag = item.children[3].children[0].innerText;
      // item.style.display = "none";
      console.log(tag);
      let myTag = "#" + e.target.innerText;

      if (myTag == tag) {
        // console.log(item);
        item.style.animation = "fadeIn 1s ease forwards";
        item.style.display = "flex";
      }
      if (myTag != tag) {
        item.style.display = "none";
        // console.log(tag);
      }

      if (e.target.innerText === "全部") {
        item.style.display = "flex";
      }
    });
  });
});

filterbtn.addEventListener("click", (e) => {
  filterSelection.classList.toggle("active-selection");
});

let clickEvent = false;
sortbtn.addEventListener("click", (e) => {
  console.log(e.target.value);
  if (clickEvent) {
    queryData.sort = e.target.value;
    renderWork();
  }
  clickEvent = !clickEvent;
});

// sortbtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
//   data.sort = e.target.value;
//   if (clickEvent) {
//     console.log("Sorted");
//     const appArray = Array.from(app); // 轉換為陣列
//     apps.innerHTML = ""; // 清空 apps 元素的內容
//     if (e.target.value == 1) {
//       appArray.sort(); // 正序排序
//     } else if (e.target.value == 0) {
//       appArray.sort().reverse(); // 反序排序
//     }
//     appArray.forEach((item) => {
//       apps.appendChild(item); // 重新附加元素到 apps 中
//     });
//   }
//   clickEvent = !clickEvent;
// });

questionTitle.forEach((item) => {
  item.addEventListener("click", (e) => {
    let add = e.target.parentElement.children[0];
    let remove = e.target.parentElement.children[1];
    let hideContent = e.target.parentElement.children[3];
    // console.log(e.target.parentElement.children);

    $(add).toggle();
    $(remove).toggle();
    $(hideContent).slideToggle();
    $(e.target).toggleClass("expanded");
  });
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  backTop();

  e.target;
});

// 函式

function removModelCheck() {
  filterSelectionModel.forEach((item) => {
    item.children[1].classList.remove("check-active");
  });
}

function removeFilter() {
  filterItem.forEach((item) => {
    item.classList.remove("filter-active");
  });
}

function removePage() {
  pageLink.forEach((item) => {
    item.classList.remove("page-alink");
  });
}

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

let teacher = "https://codepen.io/AliceChiang/pen/yLRGzBY";
// 串接API
const apiPath = "https://2023-engineer-camp.zeabur.app";

let worksData = [];
let pagesData = {};

const queryData = {
  type: "",
  sort: 0,
  page: 1,
  search: "",
};

apps.innerHTML = "";

renderWork();
renderPage();

async function getData({ type, sort, page, search }) {
  const apiUrl = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${
    type ? `type=${type}&` : ""
  }${search ? `search=${search}` : ""}`;
  try {
    let res = await axios.get(apiUrl);
    // console.log(res);
    if (res.status) {
      let data1 = res.data;
      return data1;
    }
  } catch (e) {
    console.log(e);
  }

  // console.log("worksData", worksData);
  // console.log("pagesData", pagesData);
}

async function renderWork() {
  let procssData = await getData(queryData);
  console.log(procssData.ai_works);

  worksData = procssData.ai_works.data;

  apps.innerHTML = "";
  worksData.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("app");
    li.innerHTML = `<div class="app-pic">
    <a href="#"
      ><img
        src=${item.imageUrl}
        alt="pokemon guess"
    /></a>
  </div>
  <div class="app-intro">
    <h3 class="app-title">${item.title}</h3>
    <p class="app-content">
    ${item.description}
    </p>
  </div>
  <div class="app-model">
    <span>AI 模型</span>
    <span>${item.model}</span>
  </div>
  <div class="app-tag">
    <span>#${item.type}</span>
    <a href="${item.link}" class="material-icons">share</a>
  </div>`;
    apps.append(li);
  });
  app = document.querySelectorAll(".app");
}

async function renderPage() {
  let procssData = await getData(queryData);
  pagesData = procssData.ai_works.page;

  const ulPages = document.querySelector(".application-main-pages");
  ulPages.innerHTML = "";
  for (let i = 1; i <= pagesData.total_pages; i++) {
    let newLi = document.createElement("li");
    newLi.classList.add("page");

    if (i !== 1) {
      newLi.innerHTML = `<a href="#" class="page-link" data-page="${i}">${i}</a>`;
    } else {
      newLi.innerHTML = `<a href="#" class="page-link page-alink" data-page="${i}">${i}</a>`;
    }
    ulPages.append(newLi);
  }
  if (pagesData.has_next) {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<a href="#" class="page-link">
      <span class="material-icons">
        chevron_right
      </span>
    </a>`;
    ulPages.append(newLi);
  }
  pageLink = document.querySelectorAll(".page-link");
  changePage();
}

function changePage() {
  pageLink.forEach((item) => {
    let pageId = "";
    item.addEventListener("click", (e) => {
      console.log(e.target);
      e.preventDefault();
      removePage();
      e.target.classList.add("page-alink");
      // console.log(e.target.dataset.page);
      pageId = e.target.dataset.page;
      queryData.page = Number(pageId);
      if (!pageId) {
        queryData.page = Number(pagesData.current_page) + 1;
        console.log(item);
      }
      renderWork();
    });
  });
}
