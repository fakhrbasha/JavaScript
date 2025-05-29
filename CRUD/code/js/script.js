// get element by id
// create function 
// create obj contain data.value
// create array to push

var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDesc = document.getElementById('productDesc');
var productImg = document.getElementById('productImage');
var productList ;


// zbon gded
if(localStorage.getItem('product')== null){
    productList = [];
}else{
    // zbon adeem eleh data
    productList = JSON.parse(localStorage.getItem('product'));
    displayProduct();

}

var currentIndex ;


function createProduct(){
    var product = {
        pName : productName.value,
        pPrice : productPrice.value,
        pCategory : productCategory.value,
        pDesc : productDesc.value,
        img : `./img/${productImg.files[0] ? productImg.files[0]?.name :'img8.jpg' }`
    }
    if(document.getElementById('addBtn').innerHTML == 'Update Product'){
        productList.splice(currentIndex,1,product);
        document.getElementById('addBtn').innerHTML = 'Add Product';
    }else{
        productList.push(product);
    }
    // display
    displayProduct();
    resetForm();
    console.log(productList);
    localStorage.setItem('product' , JSON.stringify(productList));

}
// reset form
function resetForm(){
    productName.value = '';
    productPrice.value = '';
    productCategory.value='';
    productDesc.value = '';
    productImg.value = '';
}
// add after push list
function displayProduct(){
    var cartonna = '';
    for(var i = 0; i < productList.length; i++){
        cartonna +=`
             <div class="col-md-4">
              <div class="border  rounded-3 p-3">
                <img src="${productList[i].img}" alt="img" class="w-100"/>
                <div class="p-2">
                  <p><span class="fw-semibold">Name :</span> ${productList[i].pName}</p>
                  <p><span class="fw-semibold">Price :</span> ${productList[i].pPrice}</p>
                  <p><span class="fw-semibold">Category :</span> ${productList[i].pCategory}</p>
                  <p><span class="fw-semibold">Description :</span> ${productList[i].pDesc}</p>
                </div>
                <button onClick="updateProduct(${i})" class="btn btn-outline-warning w-100 mb-2">Update</button>
                <button onClick="deleteProduct(${i})" class="btn btn-outline-danger w-100">Delete</button>
              </div>
           </div>
        `
    }
    
    document.getElementById('rowBody').innerHTML = cartonna;
    localStorage.setItem('product' , JSON.stringify(productList));

}


// delete product

function deleteProduct(productIndex){
    productList.splice(productIndex, 1); 
    displayProduct();
    localStorage.setItem('product' , JSON.stringify(productList));


}



// update product

function updateProduct(index){
    currentIndex = index;

    productName.value = productList[index].pName;
    productPrice.value = productList[index].pPrice;
    productDesc.value = productList[index].pDesc;
    productCategory.value = productList[index].pCategory;

    document.getElementById('addBtn').innerHTML = 'Update Product';
    localStorage.setItem('product' , JSON.stringify(productList));


}



// key unique
// localStorage.setItem(key,value)
// var x = localStorage.getItem('key')
// localStorage.removeItem('key')
// localStorage.clear()