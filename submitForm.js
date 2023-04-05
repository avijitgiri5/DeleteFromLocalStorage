let myform=document.querySelector('#myform')

let submitbtn=document.querySelector('#submit');
let items=document.querySelector('#items');
 //takes the value from input field
 let names = document.querySelector('#name');
 let email = document.querySelector('#email');
 let number = document.querySelector('#number');
 

myform.addEventListener('submit',onsubmit);
function onsubmit(e)
{
    e.preventDefault();
   
    //insert the value in the local storage
    let myobj={
        NAME:names.value,
        EMAIL:email.value,
        PHONE:number.value
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

    //edit button created
     
        let editbtn = document.createElement('button');
        editbtn.appendChild(document.createTextNode('edit'));
        editbtn.className = 'edit';

    //delete value from local storage and ul element
    deletebtn.onclick=()=>{
        confirm('Are you sure to delete ');
        localStorage.removeItem(myobj.EMAIL);
        items.removeChild(li);

    }
    //edit the value from local storage
    editbtn.onclick=()=>
    {
        localStorage.removeItem(myobj.EMAIL);
        items.removeChild(li);
        names.value=myobj.NAME;
        email.value=myobj.EMAIL;
        number.value=myobj.PHONE;

    }
    //set button and li element to ul element
    li.appendChild(editbtn)
    li.appendChild(deletebtn);
    items.appendChild(li);

}
