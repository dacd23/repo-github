var category = {};
var erray = {};
var currentCategoriesArray = []; //var used in the JSON function
var categori = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Showing previous comments from the JSON 
function showComments(erray){

    let htmlContentToAppend = "";

    for(let i = 0; i < erray.length; i++){
        let Arrray = erray[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div >
                <p class="container"><strong>Usario: </strong>` + Arrray.user + `</p>
            </div>
            <div >
                <p class="container"><strong>Fecha: </strong>` + Arrray.dateTime + `</p>
            </div>
            <div >
                <p class="container"> <strong> Puntuacion: </strong>` + Arrray.score + `<span class="fa fa-star checked"></span></p>
            </div>
            <div >
                <p class="container"> <strong> Descripcion: </strong>` + Arrray.description + `</p>
            </div>
        </div>
        `

        document.getElementById("Jcomments").innerHTML = htmlContentToAppend;
        
    }
}


/*My attempt to render the previous comments on the screen ends here*/



/*my attempt to render the related products starts here - 10/15/2020 - */

function showRelatedProducts(categori) {


     document.getElementById("related").innerHTML = ` 
        <div class="container">
                <div class="container">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ categori.name +`</h4><br><br>
                            <small class="text-muted"><strong>Cantidad Vendida: </strong>` + categori.soldCount + `</small>
                        </div>
                    <div class="col-10">
                        <p class="mb-1"><strong> Descripcion:</strong> ` + categori.description + `</p>
                        <p class="mb-1"><strong>Moneda: </strong>` + categori.currency + `<span> Costo: ` + categori.cost + `</span></p>
                        <p class="mb-1"><strong>Categoria: </strong>` + categori.category + `</p>
                    </div>
                    <div class="d-flex p-2 bd-highlight">
                    <div class="flex w-30 card-body">
                        <img src="` + categori.images[0] + `" alt="` + categori.description + `" class="img-thumbnail">
                    </div>
                    <div class="flex w-30 card-body">
                        <img src="` + categori.images[1] + `" alt="` + categori.description + `" class="img-thumbnail">
                    </div>
                    <div class="flex w-30 card-body">
                        <img src="` + categori.images[2] + `" alt="` + categori.description + `" class="img-thumbnail">
                    </div>
                    <div class="flex w-30 card-body">
                        <img src="` + categori.images[3] + `" alt="` + categori.description + `" class="img-thumbnail">
                    </div>
                    <div class="flex w-30 card-body">
                        <img src="` + categori.images[4] + `" alt="` + categori.description + `" class="img-thumbnail">
                    </div>
                    </div>
                </div>    
                    <br>
                <div class="d-flex flex-row">
                    <p class="d-flex fle-row">` + categori.relatedProducts[0] + `</p>
                </div>
                <div >
                    <p class="d-flex flex-row">` + categori.relatedProducts[1] + `</p>
                </div>
        </div>        
         `;
         
        

    }
    
//}



// my attempt to render the related products ends here - 10/15/2020


//Here it ends my attempt to render related products - 11/07/2020
/*Here we are calling the JSON for related products - 10/15/2020 -*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           const categori = resultObj.data;
            
            //Showing relatedproducts
            console.log(categori);
            showRelatedProducts(categori);
        }
        
    })

});

//the function calling the JSON ends here - 10/15/2020 - 





/*Here I create a function to post the comment on the category-info.html page. 
First, I created a variable to get the textarea input text. */


var btn = document.getElementById("btn");


btn.onclick = function(){
    btn.style.display = "none";
};

function getInfor() {
    var text = document.getElementById("comment").value;
    localStorage.setItem("comment", text);
    
    };

btn.addEventListener("onclick", function(e){
    var node = document.createElement("p");
    var textnode = document.createTextNode("").innerHTML = localStorage.getItem("comment", text);
    node.appendChild(textnode);
    document.getElementsByClassName("comment").appendChild(node);
});








//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CATEGORY_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.productCount;
            productCriteriaHTML.innerHTML = category.productCriteria;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
// attempt to call the comments JSON

getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok")
    {
        erray = resultObj.data;

        let categoryNameHTML  = document.getElementById("Jcomments");
        let categoryDateTimeHTML = document.getElementById("Jcomments");
        let productScoreHTML = document.getElementById("Jcomments");
        let productDescriptionHTML = document.getElementById("Jcomments");
    
        categoryNameHTML.innerHTML = erray.user;
        categoryDateTimeHTML.innerHTML = erray.dateTime;
        productScoreHTML.innerHTML = erray.score;
        productDescriptionHTML.innerHTML = erray.description;

        //Muestro las imagenes en forma de galería
        showComments(erray);
    }
});

//here it ends the attempt to show the comments JSON


});