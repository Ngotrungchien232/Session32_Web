const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    const shouldContinue = confirm(
      "Bạn chưa nhập nhiệm vụ. Bạn có muốn tiếp tục không?"
    );
    if (!shouldContinue) {
      return;
    }
  }

  const newTask = document.createElement("li");
  newTask.textContent = taskName;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.className = "deleteButton";

  deleteButton.addEventListener("click", function () {
    const confirmDelete = confirm(
      "Bạn có chắc chắn muốn xóa nhiệm vụ này không?"
    );
    if (confirmDelete) {
      taskList.removeChild(newTask);
    }
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  taskInput.value = "";
});

const deleteButtons = document.getElementsByClassName("deleteButton");
for (let button of deleteButtons) {
  button.addEventListener("click", function () {
    const confirmDelete = confirm(
      "Bạn có chắc chắn muốn xóa nhiệm vụ này không?"
    );
    if (confirmDelete) {
      taskList.removeChild(button.parentElement);
    }
  });
}
