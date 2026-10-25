// Reserved for future vanilla navigation behavior.
const menuToggle = document.querySelector("#menu-toggle");
const navigationMenu = document.querySelector("#navigation-menu");

if (menuToggle && navigationMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigationMenu.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  navigationMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigationMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}
