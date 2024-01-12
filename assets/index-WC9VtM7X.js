var L=Object.defineProperty;var v=(r,e,s)=>e in r?L(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var g=(r,e,s)=>(v(r,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();class p{constructor(e="",s="",i="",t="low",n="",a=!1){this._id=e,this._item=s,this._project=i,this._priority=t,this._dueDate=n,this._checked=a}get id(){return this._id}set id(e){this._id=e}get item(){return this._item}set item(e){this._item=e}get project(){return this._project}set project(e){this._project=e}get checked(){return this._checked}set checked(e){this._checked=e}get priority(){return this._priority}set priority(e){this._priority=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}}const f=class f{constructor(e="",s=[]){this._id=e,this._list=s}get id(){return this._id}set id(e){this._id=e}get list(){return this._list}set list(e){this._list=e}load(){const e=localStorage.getItem("list");if(typeof e!="string")return;JSON.parse(e).forEach(i=>{const t=new p(i._id,i._item,i._project,i._priority,i._dueDate,i._checked);f.instance.addItem(t)})}save(){localStorage.setItem("list",JSON.stringify(this._list))}clearList(){this._list=[],this.save()}addItem(e){this._list.push(e),this.save()}removeItem(e){this._list=this._list.filter(s=>s.id!==e),this.save()}};g(f,"instance",new f);let E=f;const y=class y{constructor(){g(this,"ul");this.ul=document.getElementById("listItems")}clear(){this.ul.innerHTML=""}render(e,s){this.clear();let i=e.list;s&&(i=e.list.filter(t=>t.project===s)),i.forEach(t=>{const n=document.createElement("li");n.className="w-full p-4 flex gap-2 items-center rounded-md flex-col md:flex-row md:g-6";const a=document.createElement("input");a.type="checkbox",a.id=t.id,a.checked=t.checked,n.append(a),a.addEventListener("change",()=>{t.checked=!t.checked,t.checked?c.classList.add("line-through"):c.classList.remove("line-through"),e.save()});const c=document.createElement("label");c.htmlFor=t.id,c.textContent=t.item,c.classList.add("w-[40%]"),t.checked&&c.classList.add("line-through"),n.append(c);const m=document.createElement("label");m.htmlFor=t.id,m.textContent=t.project,m.classList.add("w-[20%]"),n.append(m);const o=document.createElement("label");o.htmlFor=t.id,o.textContent=t.priority;const d=document.createElement("div"),u=t.priority=="low"?"green":t.priority=="medium"?"orange":"red";d.classList.add("border-2",`text-${u}-300`,`border-${u}-300`,"flex","items-center","justify-center","p-2","w-full","md:w-[20%]","lg:w-[10%]"),d.append(o),n.append(d);const l=document.createElement("label");l.htmlFor=t.id,l.textContent=t.dueDate,l.classList.add("w-[20]%"),n.append(l);const h=document.createElement("button");h.className="button",h.textContent="X",h.classList.add("border-2","rounded-full","px-2","py-1","hover:bg-blue-100","w-[10%]"),n.append(h),h.addEventListener("click",()=>{e.removeItem(t.id),this.render(e,"")}),this.ul.append(n)})}};g(y,"instance",new y);let I=y;const x=()=>{const r=E.instance,e=I.instance,s=()=>{r.addItem(new p("1","Clean the sink","demo","medium","2022-09-28")),r.addItem(new p("2","Wash the laundry","demo","medium","2022-09-25")),r.addItem(new p("3","Fix shower head","demo","high","2022-10-01")),r.addItem(new p("4","Learn react","demo","high","2022-10-05"))},i=()=>{const c=document.getElementById("projectList");c.innerHTML="",r.list.filter((o,d,u)=>u.findIndex(l=>l.project===o.project)===d).map(o=>o.project).forEach(o=>{const d=document.createElement("li");d.textContent=o,d.addEventListener("click",()=>{e.render(r,o)}),d.classList.add("cursor-pointer","mb-4","hover:bg-blue-200"),c.append(d)})};document.getElementById("home").addEventListener("click",()=>{e.render(r,"")}),document.getElementById("itemEntryForm").addEventListener("submit",c=>{c.preventDefault();let m=new FormData(c.target),o=Object.fromEntries(m);const d=o.newItem.trimEnd();if(!d.length)return;const u=o.projectName.trimEnd();if(!u.length)return;const l=o.priorityLevel,h=o.dueDate,_=r.list.length?parseInt(r.list[r.list.length-1].id+1):1,w=new p(_.toString(),d,u,l,h);r.addItem(w),e.render(r,""),i(),document.getElementById("itemEntryForm").reset()}),document.getElementById("clearItemsButton").addEventListener("click",()=>{r.clearList(),e.clear(),i()}),r.load(),localStorage.getItem("visited")||(localStorage.setItem("visited","true"),s()),e.render(r,""),i()};document.addEventListener("DOMContentLoaded",x);