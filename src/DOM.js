import Project from "./project";
import {projects} from './data';
import {compareAsc,format,parseISO} from 'date-fns';
//not best practice but I wasn't sure how to implement state
//for checking if input for project was active
let state = false;


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

const createTable = function (){
  const table = CREATE('tr','table','');
  const title = CREATE('th','solid','Title');
  title.style.width = '25vw';
  const dueDate = CREATE('th','solid','Due Date');
  dueDate.style.width = '15vw';
  const priority = CREATE('th','solid','Priority');
  priority.style.width = '10vw';
  const done = CREATE('th','solid','Done');
  done.style.width = '8vw';
  table.appendChild(title);
  table.appendChild(dueDate);
  table.appendChild(priority);
  table.appendChild(done);
  return table;
}

//form for updating
const createForm = function(head,description,date,priorityValue,projectTitle){
  const container = CREATE('div','container','');
  const form = document.createElement('form');
  form.classList.add('popup');
  form.setAttribute('method','post');
  form.setAttribute('action','/submit');

  const header = CREATE('h2','noteHeader','Todo is all up to you!');
  form.appendChild(header);

  const todoTitle = CREATE('input','formStyle','');
  todoTitle.value =`${head}`;

  const text = document.createElement('textarea');
  text.classList.add('formStyle');
  text.value = `${description}`;

  const dateContainer = CREATE('div','formStyle','Due Date: ');

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type','date');
  dueDate.value = date;
  dateContainer.appendChild(dueDate);

  const priorityContainer = CREATE('div','formStyle','Priority: ');
  const priority = document.createElement('select');
  const arr = ['1','2','3','4','5'];
  for(let i=0;i<arr.length;i++){
    const option = document.createElement('option');
    if(arr[i] == priorityValue){
      option.setAttribute('selected','selected');
    }
    option.value=arr[i];
    option.textContent=arr[i];
    priority.appendChild(option);
  }
  priorityContainer.appendChild(priority);
  const submit = CREATE('submit','add','Update');
  submit.value = 'Update';

  todoTitle.addEventListener('keydown',function(e){
    if(e.keyCode == 13){
      e.preventDefault();
    e.stopPropagation();
    const select = document.querySelector('.select');
    const title = form.elements[0].value;
    const description = form.elements[1].value;
    const dueDate = form.elements[2].value;
    const priority = form.elements[3].value;
    Project().updateTodo(projectTitle,head,title,description,dueDate,priority);
    updateNote(select);
    container.remove();
    }})

  submit.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    const select = document.querySelector('.select');
    const title = form.elements[0].value;
    const description = form.elements[1].value;
    const dueDate = form.elements[2].value;
    const priority = form.elements[3].value;
    Project().updateTodo(projectTitle,head,title,description,dueDate,priority);
    updateNote(select);
    container.remove();
  })
  form.appendChild(todoTitle);
  form.appendChild(text);
  form.appendChild(dateContainer);
  form.appendChild(priorityContainer);
  form.appendChild(submit);
  container.appendChild(form);
  return container;
}

//create task
const createTask = function(head,date,priorityValue,projectTitle,description,todoHolder){
  const task = CREATE('tr','table','');
  const title = CREATE('td','task',`${head}`);
  title.style.width = '25vw';
  title.classList.add('todoTask');
  const dueDate = CREATE('td','task',`${format(parseISO(date),'EEE MMM dd yyyy')}`);
  dueDate.style.width = '15vw';
  const priority = CREATE('td','task',`${priorityValue}`);
  priority.style.width = '10vw';
  const done = CREATE('td','task','Done');
  done.style.width = '8vw';
  done.classList.add('done');
  task.appendChild(title);
  task.appendChild(dueDate);
  task.appendChild(priority);
  task.appendChild(done);
  title.addEventListener('click',function(e){
    //add edit form
    const container = createForm(head,description,date,priorityValue,projectTitle,todoHolder)
    document.body.appendChild(container);
    document.onclick = function(e) {
      if(e.target == container){
        container.style.display = 'none';
      }
    }
  });

  done.addEventListener('click',function(e){
    projects.forEach(proj => {
      if(proj.title == projectTitle){
        proj.notes.forEach((note,index,obj) => {
          if(note.title == head){
            obj.splice(index,1);
          }
        })
      }
    })
    task.remove();
  })
  return task;
}

//send new task to data file
const sendTodo = function(form,proj,todoHolder){
  const title = form.elements[0].value;
  const description = form.elements[1].value;
  const dueDate = form.elements[2].value;
  const priority = form.elements[3].value;
  todoHolder.appendChild(createTask(title,dueDate,priority,proj,description,todoHolder));
  Project().addTodo(proj,title,description,dueDate,priority);
}

//creates new form for adding tasks
const addToProject = function(title,todoHolder) {
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
      let status = 0;
      e.preventDefault();
      e.stopPropagation();
      projects.forEach(proj => {
        if(proj.title == title){
          proj.notes.forEach((note) => {
            if(note.title == form.elements[0].value){
              status = 1;
            }
          })
        }
      })
      if(status == 1){
        alert('Title already exists!')
      }
      else if(form.elements[0].value.length<3){
        alert('Please enter a longer title.');
      }
      else{
      sendTodo(form,title,todoHolder);
      form.reset();
      localStorage.setItem('projects',JSON.stringify(projects));
      }
    }
  })

  submit.addEventListener('click',function(e){
    let status = 0;
    e.preventDefault();
    e.stopPropagation();
    projects.forEach(proj => {
      if(proj.title == title){
        proj.notes.forEach((note) => {
          if(note.title == form.elements[0].value){
            status = 1;
          }
        })
      }
    })
    if(status == 1){
      alert('Title already exists!')
    }
    else if(form.elements[0].value.length<3){
      alert('Please enter a longer title.');
    }
    else{
    sendTodo(form,title,todoHolder);
    form.reset();
    localStorage.setItem('projects',JSON.stringify(projects));
    }
  });

  document.body.appendChild(container);
  document.onclick = function(e) {
    if(e.target == container){
      container.style.display = 'none';
    }
  }
}

const updateNote = function (proj){
  document.querySelectorAll('.todoHolder').forEach(e => e.remove());
  const todoHolder = CREATE('div','todoHolder','');
  const addTodo = CREATE('button','add','Add Task');
  addTodo.classList.add('todo');
  const table = createTable();
  todoHolder.appendChild(addTodo);
  todoHolder.appendChild(table);

  const test = projects.filter(project => project.title == proj.textContent);
  for(let i=0;i<test[0].notes.length;i++){
    todoHolder.appendChild(createTask(test[0].notes[i].title,test[0].notes[i].dueDate,test[0].notes[i].priority,proj.textContent,test[0].notes[i].description,todoHolder));
  }

  addTodo.addEventListener('click',function(e){
    addToProject(proj.textContent,todoHolder);
  });
  localStorage.setItem('projects',JSON.stringify(projects));
  document.body.appendChild(todoHolder);
}

const updateProj = function(proj){
  addSelector(proj.target);
  document.querySelectorAll('.todoHolder').forEach(e => e.remove());
  const todoHolder = CREATE('div','todoHolder','');
  const addTodo = CREATE('button','add','Add Task');
  addTodo.classList.add('todo');
  const table = createTable();
  todoHolder.appendChild(addTodo);
  todoHolder.appendChild(table);

  const test = projects.filter(project => project.title == proj.target.textContent);
  for(let i=0;i<test[0].notes.length;i++){
    todoHolder.appendChild(createTask(test[0].notes[i].title,test[0].notes[i].dueDate,test[0].notes[i].priority,proj.target.textContent,test[0].notes[i].description,todoHolder));
  }

  addTodo.addEventListener('click',function(e){
    addToProject(proj.target.textContent,todoHolder);
  });
  localStorage.setItem('projects',JSON.stringify(projects));
  document.body.appendChild(todoHolder);
}

const addProject = function(list){
  state = true;
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
    state = false;
  })


  add.addEventListener('click',function(e){
    const filter = projects.filter(proj => proj.title == input.value);
    if(filter.length > 0){
      alert('Can not have same project name!')
    }
    else if(input.value.length >= 3){
      const newProj = Project().add(input.value);
      const projName = CREATE('a','new',newProj);
        projName.href = `#${newProj}`;
        projName.addEventListener('click',updateProj);
        list.removeChild(manage);
        list.removeChild(input);
        list.appendChild(projName);
        state = false;
    }
    else {
      alert('Minimum length of project name must be 3!');
    }
  })
}

const loadedProject = function(title,index){
  const tab = CREATE('a','new',`${title}`);
  tab.href = `#${title}`;
  tab.addEventListener('click',updateProj);
  return tab;
}

//check for local cache
function lsTest(){
  var test = 'test';
  try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
  } catch(e) {
      return false;
  }
}

const Projects = function(){
  const project = CREATE('div', 'project', 'PROJECTS');
  const list = CREATE('div','list','');
  const remButton = CREATE('button','add','Remove');
  if(lsTest() === true){
    if(localStorage.length!= 0){
      const loadedProjects = JSON.parse(localStorage.getItem('projects'));
      console.log(loadedProjects);
      projects.splice(0,projects.length, ...loadedProjects);
      loadedProjects.forEach((proj,i) => list.appendChild(loadedProject(proj.title,i)));
    }
    else{
      //default state before starting the add project
      const defaultTab = CREATE('a','new','DEFAULT');
      defaultTab.href = '#default';
      addSelector(defaultTab);
      const todoHolder = CREATE('div','todoHolder','');
      const addTodo = CREATE('button','add','Add Task');
      addTodo.classList.add('todo');
      const table = createTable();
      todoHolder.appendChild(addTodo);
      todoHolder.appendChild(table);

      addTodo.addEventListener('click',function(e){
        addToProject(defaultTab.textContent,todoHolder);
      });
      document.body.appendChild(todoHolder);
      defaultTab.addEventListener('click',updateProj);
      list.appendChild(defaultTab);
    }
  }

  const addProj = CREATE('button','add','Add');

  remButton.addEventListener('click',function(e){
    const selected = document.querySelector('.select');
    projects.forEach((proj,index,obj) => {
      if(proj.title == selected.textContent){
        obj.splice(index,1);
        list.removeChild(selected);
        localStorage.setItem('projects',JSON.stringify(projects));
      }
    })
  })

  addProj.addEventListener('click',function(e){
    if(state == false){
    addProject(list);
    }
  });

  project.appendChild(list);
  project.appendChild(addProj);
  project.appendChild(remButton);
  return project;
}

const DOM = function(){
document.body.appendChild(CREATE('div','header','TODO List')); //create the header
const navBar = CREATE('div','nav',''); //create the nav bar
navBar.appendChild(Projects());
document.body.appendChild(navBar);
}

export default DOM
