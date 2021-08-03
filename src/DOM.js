import Project from "./project";

const CREATE = function(type,className,text){
  const create = document.createElement(type);
  create.classList.add(className);
  create.textContent = text;
  return create;
}

const addSelector = function(proj){
    const eles = document.querySelectorAll('.select');
    eles.forEach(ele => ele.classList.remove('select'));
    proj.classList.add('select');
}

const sendTodo = function(form,proj){
  const title = form.elements[0].value;
  const description = form.elements[1].value;
  const dueDate = form.elements[2].value;
  const priority = form.elements[3].value;
  Project().addTodo(proj,title,description,dueDate,priority);
}

const addToProject = function(title) {
  const container = CREATE('div','container','');
  const form = document.createElement('form');
  form.classList.add('popup');
  form.setAttribute('method','post');
  form.setAttribute('action','/submit');

  const header = CREATE('h2','noteHeader','Todo is all up to you!');
  form.appendChild(header);

  const todoTitle = CREATE('input','formStyle','');
  todoTitle.setAttribute('placeholder','title');

  const text = document.createElement('textarea');
  text.classList.add('formStyle');
  text.placeholder = 'Enter your description here...';

  const dateContainer = CREATE('div','formStyle','Due Date: ');

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type','date');
  dateContainer.appendChild(dueDate);

  const priorityContainer = CREATE('div','formStyle','Priority: ');
  const priority = document.createElement('select');
  const arr = ['1','2','3','4','5'];
  for(let i=0;i<arr.length;i++){
    const option = document.createElement('option');
    option.value=arr[i];
    option.textContent=arr[i];
    priority.appendChild(option);
  }
  priorityContainer.appendChild(priority);

  const submit = CREATE('submit','add','Add a Todo');
  submit.value = 'Add a todo';

  form.appendChild(todoTitle);
  form.appendChild(text);
  form.appendChild(dateContainer);
  form.appendChild(priorityContainer);
  form.appendChild(submit);
  container.appendChild(form);

  //can press enter
  todoTitle.addEventListener('keydown',function(e){
    if(e.keyCode == 13){
      sendTodo(form,title);
      e.preventDefault();
    }
  })

  submit.addEventListener('click',function(e){
    sendTodo(form,title);
    e.preventDefault();
    e.stopPropagation();
  });


  document.body.appendChild(container);
  document.onclick = function(e) {
    if(e.target == container){
      container.style.display = 'none';
    }
  }
}

const updateProj = function(e){
  addSelector(e.target);
  document.querySelectorAll('.todo').forEach(e => e.remove());
  const addTodo = CREATE('button','add','Add Task');
  addTodo.classList.add('todo');
  addTodo.addEventListener('click',()=>addToProject(e.target.textContent));
  document.body.appendChild(addTodo);
}

const addProject = function(list){
  const input = CREATE('input','input','');
  input.setAttribute('type','text');
  const manage = CREATE('div','manage','')
  const add = CREATE('button','addProj','Create');
  const cancel = CREATE('button','cancel','Cancel');
  manage.appendChild(cancel);
  manage.appendChild(add);
  list.appendChild(input);
  list.appendChild(manage);
  cancel.addEventListener('click',function(e){
    list.removeChild(manage);
    list.removeChild(input);
  })
  add.addEventListener('click',function(e){
    console.log(input.value);
  })
// const newProj = Project().add();
//   const projName = CREATE('a','new',newProj);
//   projName.href = `#${newProj}`;
//   projName.addEventListener('click',updateProj);
//   list.appendChild(projName);
}

const Projects = function(){
  const projects = CREATE('div', 'project', 'PROJECTS');
  const list = CREATE('div','list','');

  //default state before starting the add project
  const defaultTab = CREATE('a','new','DEFAULT');
  defaultTab.href = '#default';
  addSelector(defaultTab);
  const addTodo = CREATE('button','add','Add Task');
  addTodo.classList.add('todo');
  addTodo.addEventListener('click',()=>addToProject(defaultTab.textContent));
  document.body.appendChild(addTodo);
  defaultTab.addEventListener('click',updateProj);

  const addProj = CREATE('button','add','Add Project')
  list.appendChild(defaultTab);
  addProj.addEventListener('click',()=>addProject(list));
  projects.appendChild(list);
  projects.appendChild(addProj);
  return projects;
}

const DOM = function(){
document.body.appendChild(CREATE('div','header','TODO List')); //create the header
const navBar = CREATE('div','nav',''); //create the nav bar
navBar.appendChild(Projects());
document.body.appendChild(navBar);
}

export default DOM
