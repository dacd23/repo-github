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
                            <input id="cantidad" onchange="totalPrice(this.value)" type="number" value="` + cart.count +`" min="1" max="1000" step="1"></input>     
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


/*
function msg() {
    alert("Gracias por su Compra, te llegara un correo de confirmacion a la brevedad! Esperamos que vuelvas pronto!");
};
document.event.preventDefault(msg());
msg(); 
*/