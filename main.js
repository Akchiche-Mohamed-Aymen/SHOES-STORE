let inputs  = document.querySelectorAll(".color input");
let arr = [
    document.querySelector(".rightPart a"),
    document.querySelector(".img")
];
let colors = ["black", "#a29596"]
function changeColor( color ){
    arr.forEach((ele)=>{
        ele.style.background = color;
    })
}

function changeColorPar(){
    let para = document.querySelector(".choix");
    console.log(para)
    for(let i = 0 ; i < para.children.length ; i++){
        para.children[i].classList.toggle("toBrown");
    }
}
inputs.forEach((input)=>{
    input.onclick = ()=>{
    if(input.checked){
        if(input.value == 1){
            input.style.accentColor = colors[0];
            document.querySelector(".numShoes input").style.background = colors[0];
            document.querySelector("body").style.background = colors[0];
            changeColor(colors[0]);
            changeColorPar()
        }
        else{
            input.style.accentColor = colors[1];
            document.querySelector(".numShoes input").style.background = colors[1];
            document.querySelector("body").style.background = colors[1];
            changeColor(colors[1]);
            changeColorPar();
        }
    }   
}  
});
let bars = document.querySelector(".bars");
bars.onclick = ()=>{
    document.getElementById("links").classList.toggle("active");
}