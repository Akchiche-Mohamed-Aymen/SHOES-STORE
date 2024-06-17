let input1 = document.querySelector("input");
let message = document.querySelector("textarea");
let form = document.querySelector("form");
let btn = document.querySelector("button");
let commands = getCommandFromLocalStorage();
function toString(){
    let content = '\n';
    for(element of commands){
        content+= ` (${element.nombre})  of ${element.product} \n`
    }
    return content;
}
function validName(){
    let content = input1.value;
    return content.length >= 10 && content.length <=30 && content[0] === content[0].toUpperCase();
}

function Message(){
    let content = `the client ${input1.value} wants to buy ${toString()}`;
    return content;
}

input1.onkeyup =()=>{
    input1.value = input1.value.replace(" ", "_");
    message.value = Message()
    if(!validName()){
        input1.style.border = "2px solid red";
        btn.style.background= "black";}
    else{  
        input1.style.border = "2px solid green";
        btn.style.background= "blue";
}}

function getCommandFromLocalStorage(){
command = JSON.parse(localStorage.getItem("commande"));
if(command == null) return [];
return command;
}
form.onsubmit = event=>{
    if(!validName())
        event.preventDefault()
    else openEmailForm()
}
function openEmailForm() {
    const recipient = "akchiche.mohamedaymen@email.com";
    const subject = "Demand of buying";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${message.value}`;
  }
console.log(commands)
