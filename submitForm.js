let myform=document.querySelector('#myform')

let submitbtn=document.querySelector('#submit');
let items=document.querySelector('#items');


myform.addEventListener('submit',onsubmit);
function onsubmit(e)
{
    e.preventDefault();
    //takes the value from input field
    let names = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    
    //insert the value in the local storage
    let myobj={
        NAME:names,
        EMAIL:email,
        PHONE:number
    };
    let myobj_deserialize=JSON.stringify(myobj);
    localStorage.setItem(myobj.EMAIL,myobj_deserialize);

    //create function for crating li element and delete button while submitting
    showValues(myobj);

}

function showValues(myobj){
    //li element created
       let li = document.createElement('li');
    let liText = document.createTextNode(`Name : ${myobj.NAME}   Email : ${myobj.EMAIL}   Phone : ${myobj.PHONE}`);
    li.className='uldiv';
    li.appendChild(liText);

    //delete button created
    let deletebtn = document.createElement('button');
    deletebtn.appendChild(document.createTextNode('Delete'));
    deletebtn.className = 'btn delete';

    //delete value from local storage and ul element
    deletebtn.onclick=()=>{
        confirm('Are you sure to delete ');
        localStorage.removeItem(myobj.EMAIL);
        items.removeChild(li);

    }
    li.appendChild(deletebtn);
    items.appendChild(li);

}
