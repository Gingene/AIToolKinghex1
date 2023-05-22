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

// $(document).ready(function () {
//   $(menuToggle).on("click", function () {
//     $(this).toggleClass("activeicon");
//     $(menuClose).toggleClass("activeicon");
//     $(".mobile-menu").toggleClass("mobile-menu-show");
//     $(".mobile-menu").animate({ height: "100px" }, 1000);
//   });
//   $(menuClose).on("click", function () {
//     $(this).toggleClass("activeicon");
//     $(menuToggle).toggleClass("activeicon");
//     $(".mobile-menu").toggleClass("mobile-menu-show");
//     $(".mobile-menu").animate({ height: "100px" }, 1000);
//   });
// });

menuToggle.addEventListener("click", (e) => {
  e.target.classList.toggle("activeicon");
  menuClose.classList.toggle("activeicon");
  $(".mobile-menu").toggleClass("mobile-menu-show");
  $(".mobile-menu").css("animation", "fadeIn 0.5s ease");
  $("section").hide();
});

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

// 手機
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

filterItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removeFilter();
    e.target.classList.add("filter-active");
  });
});

pageLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removePage();
    e.target.classList.add("page-alink");
  });
});

// $(document).ready(function () {
//   $(".questions-content").on("click", ".question-title", function () {
//     $(this).siblings(".question-content").slideToggle();
//     $(this).toggleClass("expanded");
//   });
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
});

// 函式

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
