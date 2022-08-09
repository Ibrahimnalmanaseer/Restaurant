function allStorage() {

    var values=[];
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse( localStorage.getItem(keys[i]) ));
         
    }

    return values;
}



var id=999;

function Food(foodnamevalue,typevalue,pricevalue){
    
    this.foodId=function(counter){
        id++;
        return counter+1;
    };
    this.foodName=foodnamevalue;
    this.type=typevalue;
    this.price=pricevalue;
  }


Food.prototype.render=function(){

    const foodItem=[this.foodId(id),this.foodName,this.type,this.price]
    const table=document.getElementsByTagName('table');
    const trTag=document.createElement('tr');
    table[0].appendChild(trTag);

    for (let i=0;i<foodItem.length;++i){
        const tdTag=document.createElement('td');
        tdTag.textContent=foodItem[i];
        trTag.appendChild(tdTag)

    }
     
}


for (let i=0;i<allStorage().length;++i){

    const foodOrder=new Food(allStorage()[i]['fname'],allStorage()[i]['type'],allStorage()[i]['price']);
    foodOrder.render()
}