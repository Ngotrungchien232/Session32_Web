// đầu tiên ta lấy phần tử button để có thể thao tác với nó
const button = document.getElementById(`clickButton`);
// tiếp sau đó ta lấy phần tử số lần hiển thị ra màn hình
const hienThi = document.getElementById(`clickCount`);
// sau đó ta tạo biến với số lầm bấm ban đầu là 0
let count = 0;
// event
button.addEventListener(`click`, function () {
  // tăng biến count lên 1 khi click vào nút bấm vào tôi
  count++;
  hienThi.textContent = count;
});
