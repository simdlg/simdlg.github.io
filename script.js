window.onload = function() {
  const home = document.getElementById("home");
  const main = document.getElementById("main-container");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const navbar = document.getElementById("navbar");
  const navbarButtons = document.querySelectorAll(".nav-btn");
  const backButton = document.getElementById("scroll-back-btn");

  navbar.style.position = "fixed";
  home.style.position = "fixed";
  main.style.position = "fixed";

  function goToHome() {
    window.scroll(0, 0);
    setTimeout(() => {
      main.style.position = "fixed";
      home.style.transform = "translateY(0px)";
    }, 2000);
  }

  function goToAbout() {
    window.scroll(0, about.offsetTop-navbar.offsetHeight);
  }

  function goToPortfolio() {
    window.scroll(0, portfolio.offsetTop-navbar.offsetHeight);
  }
  
  function goToContact() {
    window.scroll(0, contact.offsetTop-navbar.offsetHeight);
  }

  document.getElementById("nav-btn-home").addEventListener("click", goToHome);
  document.getElementById("nav-btn-about").addEventListener("click", goToAbout);
  document.getElementById("nav-btn-portfolio").addEventListener("click", goToPortfolio);
  document.getElementById("nav-btn-contact").addEventListener("click", goToContact);

  document.getElementById("footer-btn-home").addEventListener("click", goToHome);
  document.getElementById("footer-btn-about").addEventListener("click", goToAbout);
  document.getElementById("footer-btn-portfolio").addEventListener("click", goToPortfolio);
  document.getElementById("footer-btn-contact").addEventListener("click", goToContact);

  backButton.addEventListener("click", goToHome);

  document.getElementById("btn-enter").addEventListener("click", () => {
    home.style.transform = "translateY(-100vh)";
    setTimeout(() => {
      main.style.position = "absolute";
    }, 1000);
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY < (main.offsetTop + about.offsetHeight)) {
      backButton.style.display = "flex";
      navbarButtons.forEach((button) => {
        button.classList.remove("active");
      });
      navbarButtons[1].classList.add("active");
    } else if (window.scrollY >= (about.offsetTop + about.offsetHeight - navbar.offsetHeight) && window.scrollY < (portfolio.offsetTop + portfolio.offsetHeight - navbar.offsetHeight)) {
      navbarButtons.forEach((button) => {
            button.classList.remove("active");
      });
      navbarButtons[2].classList.add("active");
    } else if (window.scrollY >= (portfolio.offsetTop + portfolio.offsetHeight - navbar.offsetHeight) && window.scrollY < (contact.offsetTop + contact.offsetHeight - navbar.offsetHeight)) {
      navbarButtons.forEach((button) => {
            button.classList.remove("active");
      });
      navbarButtons[3].classList.add("active");
    }
  });

  const today = new Date();
  const birthDate = new Date("1998-02-01");
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  document.getElementById("about-age").innerText = age;
  document.getElementById("footer-year").innerText = today.getFullYear();
};
