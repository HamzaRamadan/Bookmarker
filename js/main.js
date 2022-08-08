var siteNameInp = document.getElementById("siteNameInp");
var siteUrlInp = document.getElementById("siteUrlInp");
var pruductContainer;


if (localStorage.getItem("product2") == null) {
    pruductContainer = [];
} else {
    pruductContainer = JSON.parse(localStorage.getItem("product2"));
    displayProduct();
}





function addproduct() {

    var pruduct = {

        sitName: siteNameInp.value,
        sitUrl: siteUrlInp.value,

    }
    pruductContainer.push(pruduct);

    console.log(pruductContainer);

    displayProduct();
    clrearform();
}

function clrearform() {
    siteNameInp.value = "";
    siteUrlInp.value = "";

}



function displayProduct() {
    var cartona = ``;
    for (i = 0; i < pruductContainer.length; i++) {
        console.log(pruductContainer[i]);
        cartona += `
    <div class="well ">

        <div class="row w-50">
        
            <div class="col-md-4">
              <h2>${pruductContainer[i].sitName } </h2>

         
            </div>
            <div class="col-md-4 offset-md-4 ">
              <button class="btn btn-primary ">Visit</button>
              <button onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button> 
            </div>
        </div>


        


    </div>`
    }


    document.getElementById("bookmarkList").innerHTML = cartona;

}


function deleteproduct(index) {
    pruductContainer.splice(index, 1),

        localStorage.setItem("product2", JSON.stringify(pruductContainer));


    displayProduct();

}