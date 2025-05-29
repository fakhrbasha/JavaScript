***CRUD***

# Create Product

- onClick in button in html and type name function 
- get element by id
- create function 
- create obj contain data.value
- create array to push

- take care any thing is object

```
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDesc = document.getElementById('productDesc');
var productImg = document.getElementById('productImage');
```
- create array to push element
```
var products = [];
```
- create function to push 

```
function createProduct(){
    
    // console.log(productName);  this object if you need value 
    // console.log(productName.value);


    
    var product = {
        pName : productName.value,
        pPrice : productPrice.value,
        pCategory : productCategory.value,
        pDesc : productDesc.value,
        img : 'img/img8.jpg'
    }
    productList.push(product);
    resetForm();
    console.log(productList);

}
```
in html button onclick add function
```
<button onclick="createProduct()">Create</button>
```
# reset form

```
function resetForm(){
    productName.value = '';
    productPrice.value = '';
    productCategory.value='';
    productDesc.value = '';
    productImg.value = '';
}

```
- add reset button and after push in array