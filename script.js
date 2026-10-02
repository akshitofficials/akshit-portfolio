const menu = document.querySelector(".menu"),
  nav = document.querySelector(".navlinks");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document
  .querySelectorAll(".navlinks a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
const contactBtn = document.querySelector(".contact-btn");
if (contactBtn) {
  const email = contactBtn.dataset.email;
  contactBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  });
}
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
