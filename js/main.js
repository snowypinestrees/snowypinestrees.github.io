const hamburger = document.querySelector(".hamburger");

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("activateOverlay")

})

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".overlay a");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Close the overlay
      bar1.classList.toggle("animateBar1");
      bar2.classList.toggle("animateBar2");
      bar3.classList.toggle("animateBar3");
      mobileNav.classList.toggle("activateOverlay")
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1); // Remove the '#' symbol
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});


const floaters = document.querySelectorAll(".float");

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
  rootMargin: "400px 0px 0px 0px" // Change this value to adjust the offset
});

floaters.forEach(floater => {
  observer.observe(floater);
});

function submitForm() {
  // Get form data
  let subject = document.getElementById('user_name').value;
  let email = document.getElementById('user_email').value;
  let message = document.getElementById('message').value;

  // Replace spaces with %20 in the message
  message = encodeURIComponent(message);

  // Construct the mailto URL with the form data
  // Open user's default email client with the pre-filled email
  window.location.href = 'mailto:admin@paspumpkinpatch.com?subject=' + subject + '&body=' + message;
}
