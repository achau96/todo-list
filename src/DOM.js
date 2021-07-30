import Project from "./project";
import Todo from "./todo"

const CREATE = function(type,className,text){
  const create = document.createElement(type);
  create.classList.add(className);
  create.textContent = text;
  return create;
}

const addProject = function(list){
  const newProj = Project().add();
  const projName = CREATE('a','new',newProj);
  projName.href = `#${newProj}`;
  list.appendChild(projName);
}

const Projects = function(){
  const projects = CREATE('div', 'project', 'PROJECTS');
  const list = CREATE('div','list','');
  const defaultTab = CREATE('a','new','DEFAULT');
  defaultTab.href = '#default';
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
