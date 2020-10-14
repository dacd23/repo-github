var category = {};
var erray = {};

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
        <div class="cheek">
            <div >
                <p class="cheeek">User: ` + Arrray.user + `</p>
            </div>
            <div >
            <p class="cheeek">Date Time: ` + Arrray.dateTime + `</p>
        </div>
        <div >
        <p class="cheeeck">Score: ` + Arrray.score + `</p>
    </div>
    <div >
    <p class="cheeeck">Description: ` + Arrray.description + `</p>
</div>
        </div>
        `

        document.getElementById("Jcomments").innerHTML = htmlContentToAppend;
        
    }
}



/*My attempt to render the previous comments on the screen ends here*/


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