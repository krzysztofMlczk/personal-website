const openNav = () => {
  const burgerMenu = document.querySelector(".burger");
  const closeMenu = document.querySelector(".close");
  const navLinks = document.querySelector(".nav-links");
  let opened = false;

  const toggleNav = () => {
    opened = !opened;
    navLinks.classList.toggle("opened");

    burgerMenu.classList.toggle("off");
    closeMenu.classList.toggle("off");
  };

  burgerMenu.addEventListener("click", toggleNav);
  closeMenu.addEventListener("click", toggleNav);
  navLinks.addEventListener("click", toggleNav);
  window.addEventListener("resize", () => {
    if (opened && document.documentElement.clientWidth >= 992) toggleNav();
  });
};

openNav();
