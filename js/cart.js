var array = [];

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok"){
            array = resultObj.data;
            shoppingCart(array.articles);
        }
        
    });
    

    /*attempt to add total count of items inside the cart. Note: you must use onchange.js*/
    

function totalPrice() {
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costounit").innerHTML;
    document.getElementById("subPrice").innerHTML = cantidad * parseInt(costo);
    
};


/*Attempt to call the JSON and render the products on the cart.*/

function shoppingCart(array){

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let cart = array[i];

            htmlContentToAppend += `
            <a class="list-group-item list-group-item-action">
                <div class="row" id="` + cart.name + `">
                    <div class="col-3">
                        <img src="` + cart.src + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + cart.name + `</h4>
                            <small class="text-muted">` + cart.currency + ` `  + cart.count + `<hr></small>
                            <label>Cantidad</label>
                            <input id="cantidad" onchange="totalPrice()" type="number" value="` + cart.count +`" min="1" max="1000" step="1"></input>     
                            <div class="">` + cart.count + " " + "X" + " " + cart.currency + " " +`
                            <span id="costounit"> ` + cart.unitCost + `</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </a>
            `
            document.getElementById("bambini").innerHTML = htmlContentToAppend;
              
        }
    
        totalPrice();
    
};


});

function totalPrice() {
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costounit").innerHTML;
    document.getElementById("subPrice").innerHTML = cantidad * parseInt(costo);
    
};

totalPrice();


function msg() {
    alert("Gracias por su Compra, te llegara un correo de confirmacion a la brevedad! Esperamos que vuelvas pronto!");
};
document.event.preventDefault(msg());
msg(); 

/* Delivery method validation */

function deliveryMethodValidation() {
    let mainAdress = document.getElementById("inputAddress").value;
    let complementaryAdress = document.getElementById("inputAddress2").value;
    let city = document.getElementById("inputCity").value;
    let Country = document.getElementById("inputCountry").value;
    let rbuttons = document.getElementsByName("payment").value;
       
    if (mainAdress.value && complementaryAdress.value && city.value && Country.value && rbuttons === "") {
        alert('Please complete all the Address fields.');
    }  else {
        return 'Enjoy your purchase!';
    }; 
};

deliveryMethodValidation();

/*Validation of delivery method*/

function addressValidation() {
    var address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("addressError").style.display = "block";
    } else {
        document.getElementById("addressError").style.display = "none"
}
};

addressValidation();
/*Main address validation*/

function mainAddressValidation() {
    let mAddress = document.getElementById("inputAddress").value;
    if (mAddress == "") {
        document.getElementById("mainA").style.display = "block";
    } else {
        document.getElementById("mainA").style.display = "none";
    }
};

mainAddressValidation();

/*Complementary address validation*/

function complementaryAddressValidation() {
    let cav = document.getElementById("inputAddress2").value;
    if (cav == "") {
        document.getElementById("compleAddress").style.display = "block";
    } else {
        document.getElementById("compleAddress").style.display = "none";
    }
};

complementaryAddressValidation();

/* City address validation */

function cityValidation() {
    var aCity = document.getElementById("inputCity").value;
    if (aCity == "") {
        document.getElementById("citi").style.display = "block";
        return true;
    } else  {
        document.getElementById("citi").style.display = "none";
        return false;
    }
};

cityValidation();
/*country's address Validation */

function countryValidation() {
    const country = document.getElementById("inputCountry");
    const form = document.getElementsByTagName("form-group col-md-4");
     
    if (country === "") {
        document.getElementById("country-error").style.display = "block";
        alert('Hey there! Don\'t forget to enter your country. Hover your mouse over the drop-down menu and hit the enter key, then choose your country.')
    } else {
        document.getElementById("inputCountry").style.display = "block";
       ;
    };
};

countryValidation();

/*zip code's validation function*/

function zipCodeValidation() {
    const zip = document.getElementById("inputZip");
    if(zip.value === "") {
        alert('Please enter a Zip Code');
    } else {
        return true;
    }
};



/*Payment method validation */

function paymentMethodValidation() {
    var radioButtons = document.getElementsByName("payment");
    let withoutPayment = false;
    for (let i = 0; i < radioButtons.length ; i++) {
        if (radioButtons[i].checked) {
            withoutPayment = true;
        }
    } if (withoutPayment) {
        document.getElementById("noPayment").style.display = "none";
        return "Su Pago ha sido aceptado con exito!";
    } else {
        document.getElementById("noPayment").style.display = "block";
        return "Por favor, intente de nuevo. Debe rellenar todos los campos.";
    }
};


/*Purchase validation */

function purchaseValidation() {
    let validation = paymentMethodValidation();
    alert(validation);
};

/* Function calculation total price including shipping */

function totalPrrice() {
    var cheap = document.getElementById("shipping1");
    let normal = document.getElementById("shipping2");
    var expensive = document.getElementById("shipping3");
    var aPrice = document.getElementById("subPrice").innerHTML;
    var optimusPrice = parseInt(aPrice);

    if (cheap.checked == true) {
        document.getElementById("totalAmount").innerHTML = ((parseInt(cheap.value) * optimusPrice) / 100) + optimusPrice;
    } else if (normal.checked == true) {
        document.getElementById("totalAmount").innerHTML = ((parseInt(normal.value) * optimusPrice) / 100) + optimusPrice;
    } else {
        document.getElementById("totalAmount").innerHTML = ((parseInt(expensive.value) * optimusPrice) / 100) + optimusPrice;
    }
    };

