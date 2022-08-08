'use strict';

var id=999;

const allFood=[];

function Food(foodnamevalue,typevalue,pricevalue){
    this.foodId=function(counter){
        id++;
        return counter+1;
    };
    this.foodName=foodnamevalue;
    this.type=typevalue;
    this.price=pricevalue;

    allFood.push([this])
}


Food.prototype.render=function(){
    const table=document.getElementsByTagName('table');
    const trTag=document.createElement('tr');
    table[0].appendChild(trTag);

    const tdTag1=document.createElement('td');
    const tdTag2=document.createElement('td');
    const tdTag3=document.createElement('td');
    const tdTag4=document.createElement('td');
    tdTag1.textContent=`${this.foodId(id)}`;
    tdTag2.textContent=`${this.foodName}`;
    tdTag3.textContent=`${this.type}`;
    tdTag4.textContent=`${this.price}`;

    trTag.appendChild(tdTag1);
    trTag.appendChild(tdTag2);
    trTag.appendChild(tdTag3);
    trTag.appendChild(tdTag4);
   
}



function formData(event) {
    
    event.preventDefault();

    let fname=event.target.foodname.value;
    let type=event.target.foodtype.value;
    let price=event.target.price.value;

    const newOrder=new Food(fname,type,price);

    
    newOrder.render();
    console.log(newOrder.length);
   

    

}


const form=document.getElementById('form');

form.addEventListener('submit',formData);


