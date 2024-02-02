const button = document.querySelector(".card-select-platform__title");
const platforms = document.querySelector(
  ".card-select-platform__buttons .card-select-platform__buttons__list"
);

button.addEventListener("click", () => {
  platforms.classList.toggle("active");
});

const selectPlatform = (e) => {
  const platform = e.target.textContent;
  button.textContent = platform;
  platforms.classList.remove("active");
};
