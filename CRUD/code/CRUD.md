***CRUD***

# Create Product

- onClick in button in html and type name function 
- get element by id
- create function 
- create obj contain data.value
- create array to push

- take care any thing is object

```js
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDesc = document.getElementById('productDesc');
var productImg = document.getElementById('productImage');

var currentIndex ;
```
- create array to push element
```js
var products = [];
```
- create function to push 

```js
function createProduct(){
    var product = {
        pName : productName.value,
        pPrice : productPrice.value,
        pCategory : productCategory.value,
        pDesc : productDesc.value,
        img : `./img/${productImg.files[0] ? productImg.files[0]?.name :'img8.jpg' }` -> to add image if uploaded
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

}
```
- in html button onclick add function
```js
<button onclick="createProduct()">Create</button>
```
# reset form

```js
function resetForm(){
    productName.value = '';
    productPrice.value = '';
    productCategory.value='';
    productDesc.value = '';
    productImg.value = '';
}

```
- add reset button and after push in array


# Delete product
- use splice function
- has parameter index
- display after splice
```js
function deleteProduct(productIndex){
    productList.splice(productIndex, 1); 
    displayProduct();
}

```

# Update product
- define currentIndex in top to show index of product
- update value of index
```js
    function updateProduct(index){
        currentIndex = index;

        productName.value = productList[index].pName;
        productPrice.value = productList[index].pPrice;
        productDesc.value = productList[index].pDesc;
        productCategory.value = productList[index].pCategory;

        document.getElementById('addBtn').innerHTML = 'Update Product';
    }
```

# Display Product
- define variable to add the card to be repeat and update variable in loop 
- put the value in id rowBody
```js
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
}
```

# Local Storage

- value must string
- array of object in js -> JSON js object notation 
- must convert to string
```js
JSON.stringify(arrayName)
```
```js
LocalStorage.setItem('products', JSON.stringify(productsList));
```

- convert to JSON
```js
JSON.parse(localStorage.getItem('products'))
```


- must in header make condition to check if local storage is empty or not 
```js
// new user
if(localStorage.getItem('products') == null){
    productsList = [];
}
// user has a data 
else{
    // must convert string to array of object
    productsList = JSON.parse(localStorage.getItem('products'));
}
```
- add setItem in createProduct function and updateProduct function and deleteProduct function
```js

    localStorage.setItem('product' , JSON.stringify(productList));

```