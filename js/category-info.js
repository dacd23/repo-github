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
                <p >User: ` + Arrray.user + `</p>
            </div>
            <div >
                <p>Date Time: ` + Arrray.dateTime + `</p>
            </div>
            <div >
                <p >Score: ` + Arrray.score + `</p>
            </div>
            <div >
                <p>Description: ` + Arrray.description + `</p>
            </div>
        </div>
        `

        document.getElementById("Jcomments").innerHTML = htmlContentToAppend;
        
    }
}



/*My attempt to render the previous comments on the screen ends here*/



/*my attempt to render the related products starts here - 10/15/2020 - */

function showRelatedProducts(categori){

    let htmlContentToAppend = "";

    for(let i = 0; i < categori.length; i++){
        let showTime = categori[i];

        htmlContentToAppend += `
        <div class="row">
                <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ showTime.name +`</h4>
                            <small class="text-muted">` + showTime.soldCount + `</small>
                        </div>
                    <div class="col-3">
                        <p class="mb-1">` + showTime.description + `</p>
                        <p class="mb-1">` + showTime.currency + `<span> ` + showTime.cost + `</span></p>
                        <p class="mb-1">` + showTime.category + `</p>
                    </div>
                    <div class="col-3">
                        <img src="` + showTime.images[0] + `" alt="` + showTime.description + `" class="img-thumbnail">
                    </div>
                    <div class="col-3">
                        <img src="` + showTime.images[1] + `" alt="` + showTime.description + `" class="img-thumbnail">
                    </div>
                    <div class="col-3">
                        <img src="` + showTime.images[2] + `" alt="` + showTime.description + `" class="img-thumbnail">
                    </div>
                    <div class="col-3">
                        <img src="` + showTime.images[3] + `" alt="` + showTime.description + `" class="img-thumbnail">
                    </div>
                    <div class="col-3">
                        <img src="` + showTime.images[4] + `" alt="` + showTime.description + `" class="img-thumbnail">
                    </div>
                </div>    
                    <br>
                <div class="col-3">
                    <img src="` + showTime.relatedProducts[0] + `>
                </div>
                <div class="col-3">
                    <img src="` + showTime.relatedProducts[1] + `>
                </div>
        </div>        
         `
         
         

    }
    document.getElementById("related").innerHTML = htmlContentToAppend;
}



// my attempt to render the related products ends here - 10/15/2020


//Here it ends my attempt to render related products - 11/07/2020
/*Here we are calling the JSON for related products - 10/15/2020 -*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            categori = resultObj.data;
            //Showing relatedproducts
            console.log(categori);
            showRelatedProducts(categori);
        }
        
    })

});

//the function calling the JSON ends here - 10/15/2020 - 





/*Here I create a function to post the comment on the category-info.html page. First, I created a variable to get the textarea input text. */


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