let listCount = 0;
let taskHolderCount = 0;
let taskCount = 0;
let selectedCountId = 0;

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  createList();
})
function onChangeColor(event) {
  const parentNode = document.getElementById(event.target.id);
  const optionValue = parentNode.options[parentNode.selectedIndex].value;

  switch (optionValue) {
    case '1':
      parentNode.style.background = '#E6BF00';
      break;
    case '2':
      parentNode.style.background = '#1940FF';
      break;
    case '3':
      parentNode.style.background = '#00B31E';
      break;

    default:
      parentNode.style.background = '#60a3bc';
      break;
  }
}

function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
  event.target.style.border = '1px solid #60a3bc';
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  const node = event.target;
  const data = event.dataTransfer.getData('text');

  document.getElementById(data).style.border = '';

  node.append(document.getElementById(data));
}

function createTask(taskHolderId) {
  const task = document.createElement('div');
  const taskId = `task-${++taskCount}`;
  task.setAttribute('id', taskId);
  task.setAttribute('class', 'task');
  task.setAttribute('draggable', true);
  task.ondragstart = e => drag(e);

  const taskName = document.createElement('h3');
  taskName.setAttribute('contenteditable', true);
  taskName.innerHTML = 'Task Heading';

  const taskDescription = document.createElement('p');
  taskDescription.setAttribute('contenteditable', true);
  taskDescription.innerHTML = 'Task Description';
  taskDescription.setAttribute('class', 'task-description');

  const deleteTask = document.createElement('button');
  deleteTask.setAttribute('class', 'del-task-btn');
  deleteTask.innerHTML = 'delete';
  deleteTask.onclick = () => deleteList(taskId);

  // delect options
  const select = document.createElement('select');
  const selectUniqueId = `task-priorty-${++selectedCountId}`;
  select.setAttribute('id', selectUniqueId);
  select.setAttribute('class', 'select-btn');

  const option1 = document.createElement('option');
  option1.setAttribute('value', '1');
  option1.setAttribute('selected', 'selected');
  option1.innerHTML = 'Pending';

  const option2 = document.createElement('option');
  option2.innerHTML = 'Doing';
  option2.setAttribute('value', '2');

  const option3 = document.createElement('option');
  option3.innerHTML = 'Done';
  option3.setAttribute('value', '3');

  select.onchange = event => onChangeColor(event);

  select.append(option1);
  select.append(option2);
  select.append(option3);

  task.append(taskName);
  task.append(taskDescription);
  task.append(select);
  task.append(deleteTask);

  const taskHolder = document.getElementById(taskHolderId);

  taskHolder.append(task);
}

function deleteList(listId) {
  const list = document.getElementById(listId);
  list.parentElement.removeChild(list);
}

function createList() {
  // create List
  const listName = prompt('Enter list name');
  if (!listName) {
    return alert('Please try again!');
  }
  const list = document.createElement('div');
  const listContainer = document.createElement('h2');
  const listUniqueId = `list-${++listCount}`;

  list.setAttribute('id', listUniqueId);
  list.setAttribute('class', 'task-list');
  listContainer.setAttribute('class', 'list-heading');
  listContainer.innerHTML = listName;

  // create add task button
  const addTaskBtn = document.createElement('button');
  addTaskBtn.setAttribute('class', 'task-btn');
  addTaskBtn.innerHTML = 'add task';
  addTaskBtn.onclick = () => createTask(taskHolderUniqueId);

  // delete list button
  const delList = document.createElement('button');
  delList.setAttribute('class', 'task-btn');
  delList.innerHTML = 'delete list';
  delList.onclick = () => deleteList(listUniqueId);

  // create task holder
  const taskHolder = document.createElement('div');
  const taskHolderUniqueId = `taskHolder-${++taskHolderCount}`;
  taskHolder.setAttribute('id', taskHolderUniqueId);
  taskHolder.setAttribute('class', 'task-holder');
  taskHolder.ondragover = event => dragOver(event);
  taskHolder.ondrop = event => drop(event);

  // container for heading and button
  const headingHolder = document.createElement('div');
  headingHolder.setAttribute('class', 'heading-holder');
  headingHolder.append(listContainer);
  headingHolder.append(addTaskBtn);
  headingHolder.append(delList);

  const container = document.getElementById('container');
  list.append(headingHolder);
  list.append(taskHolder);
  container.append(list);
}
