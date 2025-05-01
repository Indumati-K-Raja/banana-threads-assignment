// script.js

const modal = document.getElementById('sizeChartModal');
const btn = document.getElementById('sizeChartBtn');
const closeBtn = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
}

closeBtn.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
