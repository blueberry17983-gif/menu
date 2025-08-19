setTimeout(() => {
  document.getElementById("splash-screen").style.display = "none";
}, 2500);

// Close Navbar
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    let navbar = document.querySelector(".navbar-collapse");
    let bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});

// Active Navbar
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".navbar-nav .nav-link")
      .forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});
