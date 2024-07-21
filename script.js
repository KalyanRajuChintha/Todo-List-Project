const todoList = [];

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const html = `
      <div>${todoList[i].todoValue}</div>
      <div>${todoList[i].dueDateValue}</div>
      <button onclick=
        "
          todoList.splice(${i},1);
          renderTodoList();
        ";
        class="delete-button";
      >Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addToTodoList() {
  const todoElement = document.querySelector(".js-todo-input");
  let todoValue = todoElement.value;

  const dueDateElement = document.querySelector(".js-due-date-input");
  let dueDateValue = dueDateElement.value;

  todoList.push({ todoValue, dueDateValue });

  console.log(todoList);

  todoElement.value = "";
  dueDateElement.value = "";

  renderTodoList();
}
