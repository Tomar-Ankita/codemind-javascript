let task=document.getElementById("taskItem");
let button=document.getElementById("addBtn");
let list=document.getElementById("list");
let remove=document.getElementById("clear");

function addTask(){
    let taskOne=task.value.trim();
    if(taskOne===""){
        return;
    }

    let li=document.createElement("li");
    let span=document.createElement("span");
    span.innerText=taskOne;
    span.onclick=function(){
        span.classList.toggle("Completed");
    }


    let cut=document.createElement("button");
    cut.innerText="Delete";
    cut.onclick=function(){
        list.removeChild(li);
    }

    li.appendChild(span);
    li.appendChild(cut);
    list.appendChild(li);
    task.value="";
}

button.onclick=addTask;
task.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        addTask();
    }
})

remove.onclick=function(){
    list.innerHTML='';
}
