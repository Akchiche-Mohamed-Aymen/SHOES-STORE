const categories = ["MEN" , "WOMEN" , "KIDS"];
let products = [[], [] , []];
let command = [];
let currentCategory = 0 , j = 0;
let inp = document.querySelector(".numShoes input");
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let image = document.getElementById("img");
let prix = document.querySelector(".buy label")
function deleteRep(){
    if(command === null || command == [])return [];
    for(let i = 0 ; i < command.length ; i++)
        for(let v = i+1 ; v < command.length ; v++)
            if(command[i].product === command[v].product){
                command[i].nombre+= command[v].nombre;
                command.pop(v);
            }
    return command;
}
inp.onkeyup = ()=>{
    let k = Number(inp.value);
    if(k < 0)
        inp.value = 0;
    if(k > 10)
        inp.value = 10;
}
function createShoe(pos  , source  ,p , nb = 10){
    shoe = {
        shoeCategory : categories[pos],
        nombre : nb,
        picture : source,
        price : (p+1)*100
    }
    return shoe;
}
function createCommande(pro , nb){
    let comm = {
        product : pro,
        nombre : nb
    }
    return comm;
}
for(let i = 0 ; i < 3 ; i++){
    products[0].push(createShoe(0 ,`image${i+1}.jpg` , i));
    products[1].push(createShoe(1 ,`image${i+4}.jpg`, i));
    products[2].push(createShoe(2 ,`image${i+7}.jpg`, i));
}
function changeInputValue (){
    inp.value = 0;
}
row1.onclick = ()=>{
    j++;
    if(j >= products[currentCategory].length)
        j=0;
    image.src = products[currentCategory][j].picture;
    prix.innerHTML = `${ products[currentCategory][j].price}.00 $`;
    changeInputValue ()
}
row2.onclick = ()=>{
    j-= 1;
    if(j < 0)
        j = products[currentCategory].length - 1;
    image.src = products[currentCategory][j].picture;
    prix.innerHTML = `${ products[currentCategory][j].price}.00 $`;
    changeInputValue ()
}
function change(index , newPos = 0){
    if(index >=0 && index < 3){
    image.src = products[index][0].picture;
    currentCategory = index;
    prix.innerHTML = `${ products[index][j].price}.00 $`;
    j = newPos;
    changeInputValue ()
}}

function demend(){
    let val = products[currentCategory][j].nombre;
    if(val <= 0){
        alert("UNFORTUNATELY !!! ,This Product Disavailable ")
        return;
    }
    let nbr = Number(inp.value);
    console.log(nbr)
    if(nbr === null || nbr > val)
        nbr = 0;
    let confirmCommand;
    if(nbr !== null && nbr !== 0)
        confirmCommand = confirm("are you sure that you want to buy this product ? ");
    if(confirmCommand){
        products[currentCategory][j].nombre-= nbr;
        command.push(createCommande(products[currentCategory][j].picture , nbr))
        command = deleteRep();
        console.log(command)
        setCommandInLocalStorage();
    }
}
let link = document.querySelector(".buy a");
link.onclick = (event)=>{
    if(command === null || command.length === 0 ){
        event.preventDefault();
        alert("you didn't buy any thing")
    }
}

function setCommandInLocalStorage(){
    localStorage.setItem("commande",  JSON.stringify(command));
}