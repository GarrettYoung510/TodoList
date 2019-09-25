const addForm = document.querySelector(".add");
// pulls first class with todos in it
const list = document.querySelector(".todos");

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;

  // appends to bottom of list
  list.innerHTML += html;
};
// add todo
addForm.addEventListener("submit", e => {
  e.preventDefault();
  // use .trim() for no white spaces
  const todo = addForm.add.value.trim();

//   check if todo has length
  if (todo.length) {
    //   then run todo within the generate template
    generateTemplate(todo);
  }
});
