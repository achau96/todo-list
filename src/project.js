import Todo from './todo'
import {projects} from './data'
const Project = function() {

const add = function(){
const newProj = prompt('enter new project name');
projects.push({'title':newProj,'notes':[]});
console.log(projects);
return newProj;
}

const addTodo = function(projName,title,description,dueDate,priority){
projects.forEach((ele,index) => {
  console.log(ele.title);
if(ele.title == projName){
  projects[index].notes.push((Todo(title,description,dueDate,priority)));
  console.log(projects);
}
})
}

return{add,addTodo};
}

export default Project
