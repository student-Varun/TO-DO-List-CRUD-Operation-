const input= document.getElementById('input');
const inputField= document.getElementsByClassName('text');
const buttontype= document.getElementsByClassName('but');
const tasklist= document.createElement('ul');
tasklist.className= "task-list";
document.body.appendChild(tasklist);
let taskId = 1 ;
function addtask(){
    const tasktext=inputField.ariaValueMax.trim();
}