import Project from "./project";
import Todo from "./todo"

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

const addToProject = function(title) {
  console.log(title);
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
  const newProj = Project().add();
  const projName = CREATE('a','new',newProj);
  projName.href = `#${newProj}`;
  projName.addEventListener('click',updateProj);
  list.appendChild(projName);
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
