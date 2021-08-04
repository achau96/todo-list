(()=>{"use strict";var n,e,t,o,r,i,a,d,l,s,c,p,u,h,f={424:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"body {\n  background-color: wheat;\n}\n\n.header {\n  display: block;\n  z-index:2;\n  top: 0;\n  left: 0;\n  position:absolute;\n  width: 100%;\n  padding: 20px;\n  padding-left: 100px;\n  background-color: rgb(53, 34, 34);\n  color:white;\n  font-weight: bolder;\n  font-size: 5vh;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n.nav {\n  display: block;\n  flex-direction: column;\n  text-align: center;\n  z-index:1;\n  height:100%;\n  width:20%;\n  top:0;\n  left:0;\n  position:fixed;\n  background-color: rgb(117, 83, 83);\n}\n\n.project {\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n  color:whitesmoke;\n  padding-top: 100px;\n  font-size: 3.5vh;\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.new {\n  text-decoration: none;\n  color: whitesmoke;\n  font-size: 3vh;\n  margin-left: 2vw;\n  width:80%;\n  text-align: left;\n}\n\n.select {\n  background-color: red;\n  width:80%;\n  text-align: left;\n}\n/*adding a new project*/\n.input {\n  width:80%;\n  margin-top: 6px;\n  margin-left:auto;\n  margin-right: auto;\n  padding:5px;\n}\n\n.manage {\n  width:80%;\n  margin-bottom:6px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*buttons for adding project*/\n.addProj {\n  background-color: green;\n  padding:10px;\n  margin-left: 5px;\n  border-radius: 25px;\n  transition: 0.4s ease-in-out;\n}\n.cancel {\n  background-color: red;\n  padding: 10px;\n  margin-right: 5px;\n  border-radius: 25px;\n  transition: 0.4s ease-in-out;\n}\n\n.addProj:hover{\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n.cancel:hover{\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n.add {\n  text-align: center;\n  margin-top:3vh;\n  margin-bottom: 2vh;\n  width: 10vw;\n  background-color: rgb(53, 34, 34);\n  color:white;\n  padding: 10px 5px 10px 5px;\n  border-radius: 25px;\n  font-size: 2vh;\n  transition: .4s ease-in-out;\n}\n\n.add:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\n.todoHolder{\n  margin-left: 28vw;\n  margin-top: 15vh;\n}\n\n.todo {\n  margin-left: 20vw;\n}\n\n.table {\nposition: relative;\nborder: 1px solid #ddd;\nmargin-left: auto;\nmargin-right: auto;\n}\n\n.solid {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: gray;\n  color: white;\n}\n\nth, tr, td {\n  border: 1px solid #ddd;\n}\n\n.done {\n  background-color: tomato;\n}\n\n.done:hover{\n  cursor: pointer;\n}\n\n.container {\n  display: block;\n  position: fixed;\n  z-index:999;\n  left:0;\n  top:0;\n  height:100%;\n  width: 100%;\n  background-color: (0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n.popup{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left:auto;\n  margin-right: auto;\n  margin-top: 20vh;\n  width:50%;\n  border: 1px solid black;\n  border-radius: 25px;\n  background-color: grey;\n  animation: fade_in_show .5s;\n}\n\n.formStyle{\n  margin-top:6px;\n  margin-bottom:16px;\n  padding:6px;\n  width:80%;\n}\n\n@keyframes fade_in_show {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],d=0;d<n.length;d++){var l=n[d],s=o.base?l[0]+o.base:l[0],c=i[s]||0,p="".concat(s," ").concat(c);i[s]=c+1;var u=t(p),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(e[u].references++,e[u].updater(h)):e.push({identifier:p,updater:r(h,o),references:1}),a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var l=o(n,r),s=0;s<i.length;s++){var c=t(i[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},981:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(283);const r=[{title:"DEFAULT",notes:[]}],i=function(){return{add:function(n){return r.push({title:n,notes:[]}),console.log(r),n},addTodo:function(n,e,t,i,a){r.forEach(((d,l)=>{d.title==n&&(r[l].notes.push((0,o.Z)(e,t,i,a)),console.log(r))}))}}};let a=!1;const d=function(n,e,t){const o=document.createElement(n);return o.classList.add(e),o.textContent=t,o},l=function(n){document.querySelectorAll(".select").forEach((n=>n.classList.remove("select"))),n.classList.add("select")},s=function(){const n=d("tr","table",""),e=d("th","solid","Title");e.style.width="25vw";const t=d("th","solid","Due Date");t.style.width="15vw";const o=d("th","solid","Priority");o.style.width="10vw";const r=d("th","solid","Done");return r.style.width="8vw",n.appendChild(e),n.appendChild(t),n.appendChild(o),n.appendChild(r),n},c=function(n,e,t,o){const i=d("tr","table",""),a=d("th","task",`${n}`);a.style.width="25vw";const l=d("th","task",`${e}`);l.style.width="15vw";const s=d("th","task",`${t}`);s.style.width="10vw";const c=d("th","task","Done");return c.style.width="8vw",c.classList.add("done"),i.appendChild(a),i.appendChild(l),i.appendChild(s),i.appendChild(c),a.addEventListener("click",(function(n){console.log(o)})),c.addEventListener("click",(function(e){r.forEach((e=>{e.title==o&&e.notes.forEach(((e,t,o)=>{e.title==n&&o.splice(t,1)}))})),i.remove()})),i},p=function(n,e,t){const o=n.elements[0].value,r=n.elements[1].value,a=n.elements[2].value,d=n.elements[3].value;t.appendChild(c(o,a,d,e)),i().addTodo(e,o,r,a,d)},u=function(n,e){const t=d("div","container",""),o=document.createElement("form");o.classList.add("popup"),o.setAttribute("method","post"),o.setAttribute("action","/submit");const i=d("h2","noteHeader","Todo is all up to you!");o.appendChild(i);const a=d("input","formStyle","");a.setAttribute("placeholder","title");const l=document.createElement("textarea");l.classList.add("formStyle"),l.placeholder="Enter your description here...";const s=d("div","formStyle","Due Date: "),c=document.createElement("input");c.setAttribute("type","date"),s.appendChild(c);const u=d("div","formStyle","Priority: "),h=document.createElement("select"),f=["1","2","3","4","5"];for(let n=0;n<f.length;n++){const e=document.createElement("option");e.value=f[n],e.textContent=f[n],h.appendChild(e)}u.appendChild(h);const m=d("submit","add","Add a Todo");m.value="Add a todo",o.appendChild(a),o.appendChild(l),o.appendChild(s),o.appendChild(u),o.appendChild(m),t.appendChild(o),a.addEventListener("keydown",(function(t){if(13==t.keyCode){let i=0;t.preventDefault(),t.stopPropagation(),r.forEach((e=>{e.title==n&&e.notes.forEach((n=>{n.title==o.elements[0].value&&(i=1)}))})),1==i?alert("Title already exists!"):o.elements[0].value.length<3?alert("Please enter a longer title."):(p(o,n,e),o.reset())}})),m.addEventListener("click",(function(t){let i=0;t.preventDefault(),t.stopPropagation(),r.forEach((e=>{e.title==n&&e.notes.forEach((n=>{n.title==o.elements[0].value&&(i=1)}))})),1==i?alert("Title already exists!"):o.elements[0].value.length<3?alert("Please enter a longer title."):(p(o,n,e),o.reset())})),document.body.appendChild(t),document.onclick=function(n){n.target==t&&(t.style.display="none")}},h=function(n){l(n.target),document.querySelectorAll(".todoHolder").forEach((n=>n.remove()));const e=d("div","todoHolder",""),t=d("button","add","Add Task");t.classList.add("todo");const o=s();e.appendChild(t),e.appendChild(o);const i=r.filter((e=>e.title==n.target.textContent));for(let t=0;t<i[0].notes.length;t++)e.appendChild(c(i[0].notes[t].title,i[0].notes[t].dueDate,i[0].notes[t].priority,n.target.textContent));t.addEventListener("click",(function(t){u(n.target.textContent,e)})),document.body.appendChild(e)},f=function(n){a=!0;const e=d("input","input","");e.setAttribute("type","text");const t=d("div","manage",""),o=d("button","addProj","Create"),l=d("button","cancel","Cancel");t.appendChild(l),t.appendChild(o),n.appendChild(e),n.appendChild(t),l.addEventListener("click",(function(o){n.removeChild(t),n.removeChild(e),a=!1})),o.addEventListener("click",(function(o){if(r.filter((n=>n.title==e.value)).length>0)alert("Can not have same project name!");else if(e.value.length>=3){const o=i().add(e.value),r=d("a","new",o);r.href=`#${o}`,r.addEventListener("click",h),n.removeChild(t),n.removeChild(e),n.appendChild(r),a=!1}else alert("Minimum length of project name must be 3!")}))},m=function(){document.body.appendChild(d("div","header","TODO List"));const n=d("div","nav","");n.appendChild(function(){const n=d("div","project","PROJECTS"),e=d("div","list",""),t=d("a","new","DEFAULT");t.href="#default",l(t);const o=d("div","todoHolder",""),r=d("button","add","Add Task");r.classList.add("todo");const i=s();o.appendChild(r),o.appendChild(i),r.addEventListener("click",(function(n){u(t.textContent,o)})),document.body.appendChild(o),t.addEventListener("click",h);const c=d("button","add","Add Project");return e.appendChild(t),c.addEventListener("click",(function(n){0==a&&f(e)})),n.appendChild(e),n.appendChild(c),n}()),document.body.appendChild(n)}},283:(n,e,t)=>{t.d(e,{Z:()=>o});const o=function(n,e,t,o){return{title:n,description:e,dueDate:t,priority:o}}}},m={};function v(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return f[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=v(379),e=v.n(n),t=v(795),o=v.n(t),r=v(569),i=v.n(r),a=v(565),d=v.n(a),l=v(216),s=v.n(l),c=v(589),p=v.n(c),u=v(424),(h={}).styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,(0,v(981).Z)()})();