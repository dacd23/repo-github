


/*Filter products filter, note: you must use the same information displayed
on the category.html and category.js to sort the products by price. wink wink -09/30/2020- Obligatorio 2, mostramos los productos
en la pagina de productos, se filtran por relevancia pero no se filtran por precio, sera arreglado despues del feedback de Lucia en entregas
futuras.*/

const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "cost";
var currentCategoriesArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;



function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        }); /*Aqui estaba soldcount para filtrar por cantidad y pones productcount*/
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.cost);
            let bCount = parseInt(b.cost);

            if ( aCount > bCount ){ return -1; } 
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function showCategoriesList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let category = currentCategoriesArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(category.cost) >= minCount)) && //aqui category.cost deberia se productCount
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.cost) <= maxCount))){
/*Agregando productos en cuadrilla*/

                htmlContentToAppend += `

<div class="col-md-4" my-6>
    <div class="card h-100">
    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"><a href="category-info.html">`+ category.name +`</a></h5>
            <p class="card-text">` + category.description + `</p>
            <p class="card-text"><small class="text-muted">` + category.cost + `</small></p>
            <p class="card-text"><small class="text-muted"> artículos vendidos ` + category.soldCount + `</small></p>
        </div>
    </div>
</div>

`

/*            htmlContentToAppend += `
            <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ category.name +`</h4>
                            <small class="text-muted"> artículos vendidos ` + category.soldCount + ` </small>
                            <small class="text-muted"> Precio ` + category.cost + ` </small>
                        </div>
                        <p class="mb-1">` + category.description + `</p>
                    </div>
                </div>
            </a>
            `  */
        }

        document.getElementById("parola").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCategoriesList();
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showCategoriesList();
    });
});

/*The new code ends here, delete this comment once you are finish.

HERE IS HOW TO FETCH DATA FROM JSON DATA
var currentProductArray = [];


document.getElementById('parola').addEventListener("DOMContentLoaded", showProductsList(currentProductArray));

function showProductsList(currentProductArray) {
fetch('https://japdevdep.github.io/ecommerce-api/product/all.json')
.then((res) => res.json())
.then((data) => {
    let output = [];
    data.forEach(function(user){
        output += 
        `
        <ul>
        <li>Name: ${user.name}        </li>
        <li>Description: ${user.description}        </li>
        <li>Currency: ${user.currency}<span>Cost: ${user.cost}</span>        </li>        
        <li>SoldCount: ${user.soldCount}        </li>
        </ul>
        `
    })

    document.getElementById('parola').innerHTML = output;
})
};




*/

