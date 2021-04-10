// Turn off js:
// type in URL: about:config
// look up javascript.enabled
const generateNav = () => {
  const links = [
    { href: "#about", content: "About" },
    { href: "#portfolio", content: "Work" },
    { href: "#contact", content: "Contact" },
  ];
  const logoSrc = "./resources/logo.png";

  const body = document.body;
  const header = document.createElement("header");
  header.classList.add("nav-bar");
  // insert header at the top of body
  body.prepend(header);

  const nav = document.createElement("nav");
  nav.classList.add("container", "nav-flex");

  header.append(nav);

  const a = document.createElement("a");
  a.setAttribute("href", "#intro");

  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.setAttribute("src", logoSrc);
  logo.setAttribute("alt", "Logo");

  a.append(logo);

  nav.append(a);

  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  links.forEach((link) => {
    const li = document.createElement("li");
    const aLink = document.createElement("a");
    aLink.setAttribute("href", link.href);
    aLink.textContent = link.content;

    li.append(aLink);
    ul.append(li);
  });

  nav.append(ul);

  const hamburger = document.createElement("i");
  hamburger.classList.add("burger", "fas", "fa-bars");

  nav.append(hamburger);
};

const setupNav = () => {
  const burgerMenu = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  let opened = false;

  const toggleNav = () => {
    opened = !opened;
    navLinks.classList.toggle("opened");
  };

  burgerMenu.addEventListener("click", toggleNav);
  navLinks.addEventListener("click", toggleNav);
  window.addEventListener("resize", () => {
    if (opened && document.documentElement.clientWidth >= 992) {
      toggleNav();
    }
  });
};

// generate and setup navbar
generateNav();
setupNav();
