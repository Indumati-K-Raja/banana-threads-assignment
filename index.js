// Modal open and close logic
const modal = document.getElementById("sizeChartModal");
const btn = document.getElementById("sizeChartBtn");
const span = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
