// lấy dữ liệu từ html
const emailInput = document.getElementById("emailInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", function () {
  const email = emailInput.value.trim();
  if (checkEmail(email)) {
    result.textContent = "Email hợp lệ!"; // thay đổi nội dung của textContent là email hợp lệ
    result.className = "valid"; //Gán lớp CSS "valid" cho phần tử result
  } else {
    result.textContent = "Email không hợp lệ!";
    result.className = "invalid";
  }
});

// Hàm kiểm tra email có hợp lệ không
function checkEmail(email) {
  if (email === "") {
    return false;
  }
  if (!email.includes("@")) {
    return false;
  }
  if (!email.endsWith(".com")) {
    return false;
  }

  return true;
}
