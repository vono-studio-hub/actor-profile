const menuToggle =
  document.querySelector(".menu-toggle");

const menuClose =
  document.querySelector(".menu-close");

const mobileMenu =
  document.querySelector(".mobile-menu");

const menuOverlay =
  document.querySelector(".menu-overlay");

const mobileLinks =
  document.querySelectorAll(
    ".mobile-menu-links a"
  );


/* 메뉴 열기 */

function openMenu() {

  mobileMenu.classList.add("is-open");

  menuOverlay.classList.add("is-open");

  document.body.classList.add("menu-open");


  menuToggle.setAttribute(
    "aria-expanded",
    "true"
  );

  mobileMenu.setAttribute(
    "aria-hidden",
    "false"
  );

}


/* 메뉴 닫기 */

function closeMenu() {

  mobileMenu.classList.remove("is-open");

  menuOverlay.classList.remove("is-open");

  document.body.classList.remove("menu-open");


  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileMenu.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* 햄버거 버튼 */

menuToggle.addEventListener(
  "click",
  openMenu
);


/* X 버튼 */

menuClose.addEventListener(
  "click",
  closeMenu
);


/* 검은 배경 누르면 닫기 */

menuOverlay.addEventListener(
  "click",
  closeMenu
);


/* 메뉴 선택하면 자동으로 닫기 */

mobileLinks.forEach((link) => {

  link.addEventListener(
    "click",
    closeMenu
  );

});


/* ESC 키로 닫기 */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {
      closeMenu();
    }

  }
);


/* PC 화면으로 커지면 모바일 메뉴 닫기 */

window.addEventListener(
  "resize",
  () => {

    if (window.innerWidth > 768) {
      closeMenu();
    }

  }
);
