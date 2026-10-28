const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

// CUSTOMIZE BEFORE PUBLISHING:
// Replace the placeholder email in index.html and set your real LinkedIn URL.
const linkedinLink = document.querySelector("#linkedin-link");
linkedinLink?.addEventListener("click", (event) => {
  if (linkedinLink.getAttribute("href") === "#") {
    event.preventDefault();
    alert("Add your LinkedIn profile URL in index.html before publishing.");
  }
});
