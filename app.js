const addForm = document.querySelector(".add");
// pulls first class with todos in it
const list = document.querySelector(".todos");
// query selector for the input field within the element with search in the class
const search = document.querySelector(".search input");

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

// delete todo
list.addEventListener("click", e => {
  // if clicked element with class with delete in it
  if (e.target.classList.contains("delete")) {
    // deletes parent element
    e.target.parentElement.remove();
  }
});


const filterTodos = term => {
//   adds class filtered to those that do not match the term or what was entered into search bar
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"));

// removes filtered class 
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("filtered"));
};

// search todo
search.addEventListener("keyup", () => {
  //   what user inputs in search bar
  const term = search.value.trim().toLowerCase();
    // helper function
  filterTodos(term);
});
