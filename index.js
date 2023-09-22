let store = ["one", "two", "free"];

while (true) {
  let action = prompt("What do you want to do?");

  if (action == "new" || action == "New") {
    let todo = prompt("What is the todo");
    store.push(todo);
  } else if (action == "list" || action == "List") {
    console.log(`********* TODO LIST *********`);
    for (let item of store) {
      console.log(`${store.indexOf(item) + 1}. ${item}`);
    }
  } else if (action == "delete" || action == "Delete") {
    let numToDelete = prompt("What is the number of the todo?");
    store.splice(numToDelete - 1, 1);
  } else if (action == "quit" || action == "Quit") {
    break;
  }
}
