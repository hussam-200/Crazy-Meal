const addform=document.getElementById("addOrder");
const listitem=document.getElementById("listItem");
const Delete=document.getElementById("delete");

let orderarray=[];
addform.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const price=document.getElementById("price").value.trim();
    const image=document.getElementById("image").value.trim();
if(name===""||price===""||image==="")
{
    alert("please fill all fields");
    return;
}
const newOrder=new Order(name,price,image);
orderarray.push(newOrder);
render();
setItem();


})


function Order(name,price,image){
    this.name=name;
    this.price=price;
    this.image=image;

    // this.values=function(){
    //     return `${this.name}${this.price} ${this.image}`
    // }

}

function render(){
listitem.innerHTML="";
    orderarray.forEach((option , index)=>{
        
        const li=document.createElement("li");
        li.className="list";
       li.innerHTML = `
    <img src="${option.image}" alt="${option.name}">
    <div class="list-content">
        <h3>${option.name}</h3>
        <p>Price: $${option.price}</p>
    </div>
`;

listitem.appendChild(li);
    })
}

function setItem(){
    localStorage.setItem("order",JSON.stringify(orderarray));
}

function getItem(){
    const dataget=localStorage.getItem("order");
    if(dataget){
       orderarray= JSON.parse(dataget);
       render();
    }
}
document.addEventListener("DOMContentLoaded",getItem);

Delete.addEventListener("click", () => {
    orderarray=[];
localStorage.removeItem("order");
render();  

});

