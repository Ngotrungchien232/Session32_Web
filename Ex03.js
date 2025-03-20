// lấy dữ liệu từ html
const subjectInput = document.getElementById("Input");
const addButton = document.getElementById("addButton");
const subjectList = document.getElementById("List");
// Ban đầu danh sách có 3 môn (Toán, Lý, Hóa), nên số thứ tự tiếp theo là 4
let count = 4;

addButton.addEventListener("click", function () {
  // Lấy giá trị từ ô input và loại bỏ khoảng trắng thừa ở đầu/cuối
  const subjectName = subjectInput.value.trim();
  // Kiểm tra
  if (subjectName === "") {
    alert("tên môn học không được để trống!");
  } else {
    const newSubject = document.createElement("li");
    // Đặt nội dung cho thẻ li, bao gồm số thứ tự và tên môn học
    newSubject.textContent = `${count}. ${subjectName}`;
    // Thêm thẻ li mới vào danh sách (thẻ ul)
    subjectList.appendChild(newSubject);
    count++;
    // Xóa nội dung trong ô input sau khi thêm môn học
    subjectInput.value = "";
  }
});
