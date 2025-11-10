const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");
const yearEl = document.getElementById("current-year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && header && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      nav.style.maxHeight = `${nav.scrollHeight}px`;
    } else {
      nav.style.maxHeight = "0";
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      nav.style.maxHeight = "0";
    });
  });
}

const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach((carousel) => {
  const track = carousel.querySelector(".shop-carousel-track");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");

  if (!track || !prevBtn || !nextBtn) return;

  const updateState = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const atStart = track.scrollLeft <= 1;
    const atEnd = track.scrollLeft >= maxScroll - 1;

    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
    carousel.classList.toggle("hide-left", atStart);
    carousel.classList.toggle("hide-right", atEnd);
  };

  const scrollByAmount = (direction) => {
    track.scrollBy({
      left: direction * track.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  prevBtn.addEventListener("click", () => scrollByAmount(-1));
  nextBtn.addEventListener("click", () => scrollByAmount(1));

  track.addEventListener("scroll", () => window.requestAnimationFrame(updateState));

  updateState();
});

