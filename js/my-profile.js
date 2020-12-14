//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function (e) {


renderUserData();




});

//my attempt to validate the website fields.


function validation() {
  var name = document.getElementById("validationCustom01");
  var surname = document.getElementById("validationCustom02");
  var age = document.getElementById("validationAge");
  var phone = document.getElementById("validationCustom03");
  var email = document.getElementById("validationCustom04");


  if (name.value === "") {
    alert('Por favor, ingrese un nombre');
  }
  
  if (surname.value === "") {
    alert('Por favor, ingrese un apellido');
  } 
  
  if (age.value === "") {
    alert('Por favor, ingrese una edad');
  } 
  
  if (phone.value === "") {
    alert('Por favor, ingrese un correo electronico');
  } 
  
  if (email.value === "") {
    alert('Por favor, ingrese un numero telefonico');
  } 
  //Once all the fields have been completed, the input fields are hiden and the input information is rendered on the screen.
  if(name.value !== "" && surname.value !== "" && age.value !== "" && phone.value !== "" && email.value !== "") {
    alert('Sus datos han sido ingresados con exito!')
    renderUserData();
    name.style.display = "none";
    surname.style.display = "none";
    age.style.display = "none";
    phone.style.display ="none";
    email.style.display = "none";
  }
};




var myObj = `{["name":"info0" "surname":"info1", "age":"info2","email":"info3","phone":"info4"]}`;
//this funtion obtains every value of the user's information.
function getUserData() {

 
    let info0 = document.getElementById("validationCustom01").value;
    let info1 = document.getElementById("validationCustom02").value;
    let info2 = document.getElementById("validationAge").value;
    let info3 = document.getElementById("validationCustom03").value;
    let info4 = document.getElementById("validationCustom04").value;
    
    let userInfo = [info0,info1,info2,info3,info4];
    let serializedInfo = JSON.stringify(userInfo);
    localStorage.setItem("uInf", serializedInfo);  

    
};

let deserialized = JSON.parse(localStorage.getItem("uInf"));
//this function retrieves the JSON containing the user info and renders it on the website.
function renderUserData() {
 let deserialized = JSON.parse(localStorage.getItem("uInf"));
    for(let i = 0; i < deserialized.length; i++) {
    let showTime =  deserialized;
    document.getElementById("N").innerHTML = showTime[0];
    document.getElementById("L").innerHTML = showTime[1];
    document.getElementById("A").innerHTML = showTime[2];
    document.getElementById("E").innerHTML = showTime[3];
    document.getElementById("P").innerHTML = showTime[4];
        }
    };



const button = document.getElementById("button");

//here we assigned the function to the button triggering an onclick event

button.onclick = renderUserData;

