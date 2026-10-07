/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
  document.querySelector(".menu-button");

const menuClose =
  document.querySelector(".menu-close");

const mobileMenu =
  document.querySelector(".mobile-menu");

const mobileLinks =
  document.querySelectorAll(".mobile-menu a");


if (menuButton) {

  menuButton.addEventListener(
    "click",
    () => {

      mobileMenu.classList.add("open");

      document.body.style.overflow =
        "hidden";

    }
  );

}


if (menuClose) {

  menuClose.addEventListener(
    "click",
    closeMenu
  );

}


mobileLinks.forEach(link => {

  link.addEventListener(
    "click",
    closeMenu
  );

});


function closeMenu() {

  mobileMenu.classList.remove("open");

  document.body.style.overflow = "";

}



/* =========================================
   SCROLL REVEAL
========================================= */

const reveals =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target
            .classList
            .add("visible");

          revealObserver
            .unobserve(
              entry.target
            );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


reveals.forEach(item => {

  revealObserver.observe(item);

});



/* =========================================
   IDENTITY
========================================= */

const identityWords =
  document.querySelectorAll(
    ".identity-word"
  );

const identityVisual =
  document.querySelector(
    "#identityVisual"
  );


const identityThemes = {

  calm: {
    className:
      "ph-identity-calm",

    label:
      "CALM / PORTRAIT"
  },

  natural: {
    className:
      "ph-identity-natural",

    label:
      "NATURAL / PORTRAIT"
  },

  deep: {
    className:
      "ph-identity-deep",

    label:
      "DEEP / PORTRAIT"
  }

};


identityWords.forEach(word => {

  word.addEventListener(
    "mouseenter",
    () => {

      changeIdentity(word);

    }
  );


  word.addEventListener(
    "click",
    () => {

      changeIdentity(word);

    }
  );

});


function changeIdentity(word) {

  const theme =
    word.dataset.theme;

  const selected =
    identityThemes[theme];


  identityWords.forEach(item => {

    item.classList.remove(
      "active"
    );

  });


  word.classList.add(
    "active"
  );


  identityVisual.style.transform =
    "scale(0.98)";


  setTimeout(() => {

    identityVisual.className =
      `placeholder ${selected.className}`;

    identityVisual.dataset.label =
      selected.label;

    identityVisual.style.transform =
      "scale(1)";

  }, 180);

}



/* =========================================
   FILMOGRAPHY PREVIEW
========================================= */

const filmRows =
  document.querySelectorAll(
    ".film-row"
  );

const filmPreview =
  document.querySelector(
    "#filmPreview"
  );


const filmThemes = {

  one: {
    className:
      "ph-film-one",

    label:
      "2026 / DRAMA"
  },

  two: {
    className:
      "ph-film-two",

    label:
      "2025 / FILM"
  },

  three: {
    className:
      "ph-film-three",

    label:
      "2024 / DRAMA"
  },

  four: {
    className:
      "ph-film-four",

    label:
      "2023 / SHORT FILM"
  }

};


filmRows.forEach(row => {

  row.addEventListener(
    "mouseenter",
    () => {

      changeFilm(row);

    }
  );


  row.addEventListener(
    "click",
    () => {

      changeFilm(row);

    }
  );

});


function changeFilm(row) {

  const theme =
    row.dataset.theme;

  const selected =
    filmThemes[theme];


  filmRows.forEach(item => {

    item.classList.remove(
      "active"
    );

  });


  row.classList.add(
    "active"
  );


  filmPreview.style.transform =
    "scale(0.97)";


  setTimeout(() => {

    filmPreview.className =
      `placeholder ${selected.className}`;

    filmPreview.dataset.label =
      selected.label;

    filmPreview.style.transform =
      "scale(1)";

  }, 160);

}



/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual =
  document.querySelector(
    ".hero-image .placeholder"
  );


window.addEventListener(
  "scroll",
  () => {

    if (!heroVisual) return;


    const scrollY =
      window.scrollY;


    if (
      scrollY <
      window.innerHeight
    ) {

      const move =
        scrollY * 0.06;


      heroVisual.style.transform =
        `translateY(${move}px) scale(1.03)`;

    }

  }
);



/* =========================================
   SHOWREEL PLACEHOLDER
========================================= */

const playButton =
  document.querySelector(
    "#playButton"
  );


if (playButton) {

  playButton.addEventListener(
    "click",
    () => {

      const text =
        playButton.querySelector(
          "span"
        );


      if (
        text.textContent ===
        "PLAY"
      ) {

        text.textContent =
          "VIDEO SOON";

      } else {

        text.textContent =
          "PLAY";

      }

    }
  );

}