import Todo from './todo'
import {projects} from './data'
const Project = function() {

const add = function(newProj){
projects.push({'title':newProj,'notes':[]});
console.log(projects);
return newProj;
}

const addTodo = function(projName,title,description,dueDate,priority){
projects.forEach((ele,index) => {
if(ele.title == projName){
  projects[index].notes.push((Todo(title,description,dueDate,priority)));
  console.log(projects);
}
})
}

const updateTodo = function(projName,oldTitle,newTitle,description,dueDate,priority){
  const newTodo = Todo(newTitle,description,dueDate,priority);
  projects.forEach(proj => {
    if(proj.title == projName){

      proj.notes.forEach((task,index,arr)=>{
        if(task.title == oldTitle){
          arr.splice(index,1,newTodo);
        }
        }
      )
    }
  })
}

return{add,addTodo,updateTodo};
}


export default Project
