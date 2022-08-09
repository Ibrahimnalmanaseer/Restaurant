function formData(event) {
    event.preventDefault();   
    const entryData={fname:event.target.foodname.value,
        type:event.target.foodtype.value,
        price:event.target.price.value
    };
    saveData(entryData);
      
}


function saveData(data){

    let stringdata=JSON.stringify(data);
    return localStorage.setItem(data.fname,stringdata); 
}

const form=document.getElementById('form');
form.addEventListener('submit',formData);





