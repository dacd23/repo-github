//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//Using an immediately invoked function we set the usernanme value to the input data from the user -10/04/2020
let getInfo = function () {
    var uname = document.getElementById("userValue").value;
    uname = localStorage.setItem("userValue", uname);
    return uname;
};


// Function reassigning the value of username to the input data from the user - 10/04/2020
function displayInfo(getInfo) {
    let uname = document.getElementById("userValue").value;

    if (getInfo == undefined || getInfo == null) {
        localStorage.setItem("userValue", uname);
        document.getElementById("item").innerHTML = localStorage.getItem("userValue");
        
    } else {
        alert(`Welcome to our JaP ecommerce website, Please Log in! ${uname}`);
    }
    
};




document.addEventListener("DOMContentLoaded", function(e){
/*Here we created a function that gets the value input in the username field and stored it in the localStorage, then,
I selected the anchor element inside the nav section to display the username stored in the localStorage. */
displayInfo(getInfo);


});