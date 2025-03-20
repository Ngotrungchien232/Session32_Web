// Hàm tạo màu ngẫu nhiên
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Lấy tất cả các button và gán sự kiện click
document.querySelectorAll(".changeColor").forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.style.backgroundColor = getRandomColor();
  });
});
