let form = document.getElementById('form');
let firstname =document.getElementById('fname');
let lastname = document.getElementById('lname');
let select = document.getElementById('country');
let subject = document.getElementById('subject');
let button = document.getElementById('submit');
let btn = document.getElementById('delete');
 let empty =document.getElementsByClassName("empty").value ='';
let dataInfo = document.getElementById('info');

let container = document.getElementById("container");
   
button.addEventListener('click', function(e){
    e.preventDefault();
    let p =document.createElement('p');
    p.classList.add('card', 'col-md-4','bg-info', 'w-100', 'text-dark', 'd-flex',);
    p.innerHTML=`
    <h4>First Name: ${firstname.value}</h4>
    <h5>Last Name: ${lastname.value}</h5>
    <h5>Counry: ${country.value}</h5>
    <h5>Subject: ${subject.value}</h5>
    
     
    `

  // dataInfo='';
   empty.value="";
    container.appendChild(p); 
   
  
});

btn.addEventListener('click', ()=>{
    container.lastChild.remove();
});













