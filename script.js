window.onload = async function() {

  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const navbar = document.getElementById("navbar");
  const navbarButtons = document.querySelectorAll(".nav-btn");
  const backButton = document.getElementById("scroll-back-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY < (home.offsetTop + home.offsetHeight - 60)) {
      backButton.style.display = "none";
      navbar.style.position = "absolute";
      navbar.style.backgroundColor = "#40404030"
      navbarButtons.forEach((button) => {
        button.classList.remove("active");
      });
      navbarButtons[0].classList.add("active");
    } else if (window.scrollY >= (home.offsetTop + home.offsetHeight - 60) && window.scrollY < (about.offsetTop + about.offsetHeight - 60)) {
      backButton.style.display = "flex";
  navbar.style.position = "fixed";
      navbar.style.backgroundColor = "#404040"
      navbarButtons.forEach((button) => {
        button.classList.remove("active");
      });
      navbarButtons[1].classList.add("active");
    } else if (window.scrollY >= (about.offsetTop + about.offsetHeight - 60) && window.scrollY < (portfolio.offsetTop + portfolio.offsetHeight - 60)) {
      navbarButtons.forEach((button) => {
            button.classList.remove("active");
      });
      navbarButtons[2].classList.add("active");
    } else if (window.scrollY >= (portfolio.offsetTop + portfolio.offsetHeight - 60) && window.scrollY < (contact.offsetTop + contact.offsetHeight - 60)) {
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

  const overlay = document.getElementById("overlay");
  const imgs = document.querySelectorAll("img");
  const promiseArray = [];
  const timeout = setTimeout(() => {
    timeout = null;
    overlay.style.display = "block";
  }, 1000);

  for (let img of imgs) {
    promiseArray.push(new Promise(resolve => {
      if (img.complete) {
        resolve();
      }
      img.onload = resolve;
    }));
  }

  await Promise.all(promiseArray);
  if (timeout != null) {
    clearTimeout(timeout);
  }
  overlay.style.display = "none";
};
