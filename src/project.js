const Project = function() {
let projects = [{'title':'default'}];
const add = function(){
const newProj = prompt('enter new project name');
let obj = {'title':newProj};
projects.push(obj);
return newProj;
}
return{add,projects};
}

export default Project
