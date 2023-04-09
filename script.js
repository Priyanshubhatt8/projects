const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

let tasks = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    input.value = "";
    render();
  }
});

function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const item = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = task;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => {
      tasks.splice(index, 1);
      render();
    });

    item.appendChild(text);
    item.appendChild(button);
    list.appendChild(item);
  });
}