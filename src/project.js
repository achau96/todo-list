let projects = [{'title':'default'}];

const Project = function() {
const add = function(){
const newProj = prompt('enter new project name');
let obj = {'title':newProj};
projects.push(obj);
return newProj;
}
return{add};
}

export default Project
