
// window.alert('hello in js')
// document.getElementById("demo").innerHTML = "hello in js"
// console.log("hello in js")

// var userName = "shady"
// var userage = 20
// var useremail = "shady@gmail.com"
// var userIsAdmin = true
// console.log(typeof userIsAdmin);
// console.log(Number("d"));
// console.log(NaN == NaN);
// console.log(typeof (NaN));
// console.log("25" === "25");
// console.log("25" === 25);
// console.log('A' == "a");
// console.log('A' > "a");
// var usernamee = window.prompt("enter your name")
// document.getElementById("demo").innerHTML = "hello " + usernamee
// var num1=window.prompt("enter number1")
// var num2=window.prompt("enter number2")
// var result=Number(num1)+Number(num2)
// console.log(result);

// var temp = "ahmed";

// for (var x = 0; x < 4; x++) {

//     temp = temp + `<h3>hellllo</h3>`

// }
// console.log(temp);




// var temp= ""

// for( var x = 0; x <5  ; x++ ){

// temp= temp +` <div class="col-lg-3 text-danger">
// <div class="bg-info">
//     <img src="images/img4.gif" class="w-100" alt="">
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quasi.</p>
// </div>
// </div>`
// }
// document.getElementById("demo").innerHTML=temp




// var num = Number(window.prompt('enter your number'));
// var temp=""
// for (var x = 1; x < 12; x++) {
//     temp = temp + (x * num) + " "
// }
// console.log(temp);







// var num1 = 50
// var num2 = 20
// var num3 = -9
// if(num1 > num2 && num1 >num3){
//     console.log("max"+num1);

// }else if(num2 > num1 && num2 > num3){
//     log("max"+num2)
// }else if(num3 > num1 && num3 > num2){
//     log("max"+num3)
// }

// if(num1 < num2 && num1 <num3){
//     console.log("min"+num1);

// }else if(num2 < num1 && num2 < num3){
//     log("min"+num2)
// }else if(num3 < num1 && num3 < num2){
//     console.log("min"+num3)
// }






// function calcsum(x,y) {
//     console.log(x+y);
// }

// calcsum(200)




// var imgslist = document.querySelectorAll('.item img');
// var imgsdemo = document.querySelector('#imagedemo');


// for(var i=0; i<imgslist.length; i++){
//     imgslist[i].addEventListener('click', function(e){
//         var imgScr = e.target.getAttribute('src');
//         console.log(imgScr);
//         imagedemo.setAttribute('src',imgScr);
//     })
// }




// function calcsum(sum1, sum2) {
//     var result = sum1 + sum2;
//     return "result"
// }

// var x = Number(window.prompt("number1"))
// var y = Number(window.prompt("number2"))

// var data = calcsum(x, y);

// if (data > 1000) {
//     console.log("yesssssssss");    
// } else {
//     console.log("noooooooooo");
// }




// function addproduct(name, price, category) {

//     if (name != "" && price < 1000) {
//         return true
//     } else {
//         return false
//     }

// }

// var data = addproduct("a", 8000, "mobil")
// if (data == true) {
//     console.log("valid");

// } else {
//     console.log("invalid");
// }






// var data = document.getElementById("username")
// data.value = "ahmeddddddddddd"
// console.log(data.value);


// var demoelement=document.getElementById("demo")
// demoelement.id="text"
// console.log(demoelement);




// var form = document.getElementById("username")
// var form2 = document.getElementById("lastname")
// var demo= document.getElementById("demo")
// function welcome() {
// var data2=form2.value;


// var data=form.value
//    demo.innerHTML="helllo "+data+" "+ data2 
// }
// function changecolor() {

//     form.style.color = "red"
//     form2.style.color = "red"

// }




//           0        1       2        3          4
// var user = ["shady", "amr", "magdy", "mona", "mostafa"]
// var user2 = ["esraa", "menna"]


// user.splice(2, 0, "amir")

// console.log(user);  





// var product = {
//     name :"iphone",
//     color:["gold","black","white"],
//     price:3000,
//     category:"mobile",
//     sale:true
// }
// console.log(product.color[2]);



// var productlist = [
//     { name: "iphone", price: 7000, category: "mobile", sale: true },
//     { name: "samsung", price: 3000, category: "mobile", sale: false },
//     { name: "jac", price: 70000, category: "tv", sale: true },
//     { name: "oppo", price: 4000, category: "mobile", sale: false },
// ];
// productlist.push({ name: "iphone", price: 7000, category: "mobile", sale: true })
// for (var i = 0; i < productlist.length; i++) {
//     console.log(" name " + productlist[i].name + " price " + productlist[i].price + " category " + productlist[i].category);
// }
var productNameinput = document.getElementById("productName")
var productpriceinput = document.getElementById("productprice")
var productimageinput = document.getElementById("productimage")
var productcategoryinput = document.getElementById("productcategory")
var productsaleinput = document.getElementById("productsale")
var productdescriptioninput = document.getElementById("productdescription")
var searchinput = document.getElementById("searchinput")
var productlist = [];
if (localStorage.getItem("productlist") != null) {
    productlist = JSON.parse(localStorage.getItem("productlist"))
    datalist()
}

console.log(productlist);
function addproduct() {
    var product = {
        name: productNameinput.value,
        price: productpriceinput.value,
        Image: productimageinput.files[0]?.name,
        cate: productcategoryinput.value,
        sale: productsaleinput.checked,
        desc: productdescriptioninput.value,
    }
    productlist.unshift(product);
    localStorage.setItem("productlist", JSON.stringify(productlist))
    datalist()
    console.log(productlist);

}

function datalist() {

    var temp = ""
    for (var i = 0; i < productlist.length; i++) {
        temp = temp + ` <div class="col-md-3 py-3 items">
<div class="text-center border border-info">
    <img src="images/${(productlist[i].Image)?productlist[i].Image:"1.jpg"}" class=" w-100" alt="">
    <h5>name:`+ productlist[i].name + ` </h5>
    <p class="${(productlist[i].price>2000)?"text-info":"text-danger"}">price: `+ productlist[i].price + `</p>
    <p class="text-secondary">desc: `+ productlist[i].desc + `</p>
    <p class="text-secondary">cate:`+ productlist[i].cate + `</p>
    <p class="text-danger">${(productlist[i].sale)?"sale":"not sale"}</p>
    <p class="text-danger">`+ i + `</p>
    <button onclick="editProduct(`+i+`)"  type="button" class="btn btn-outline-info py-2">updata</button>
    <button onclick="deleteproduct(`+ i + `)" type="button" class="btn btn-outline-danger py-2">delete</button>
</div>
</div>`
    }
    document.getElementById("myrow").innerHTML = temp
}
function editProduct(index){
    productNameinput.value=productlist[index].name
    productpriceinput.value=productlist[index].price
    productcategoryinput.value=productlist[index].cate
    productsaleinput.checked=productlist[index].sale
    productdescriptioninput.value=productlist[index].desc


console.log(index);
console.log(productlist);

}

function deleteproduct(x) {
    productlist.splice(x, 1)
    localStorage.setItem("productlist", JSON.stringify(productlist))
    datalist()
    console.log(productlist);
}

function clearform() {
    productNameinput.value = ""
    productpriceinput.value = ""
    productimageinput.value = ""
    productcategoryinput.value = ""
    productsaleinput.checked = false
    productdescriptioninput.value = ""

}

function search() {
    var searchvhl = searchinput.value.toLowerCase()

    var temp = ""

    for (var i = 0; i < productlist.length; i++) {
        if (productlist[i].name.toLowerCase().includes(searchvhl) == true || productlist[i].cate.toLowerCase().includes(searchvhl) == true) {
            temp = temp + ` <div class="col-md-3 py-3 ">
                <div class="text-center border border-info">
                <img src="images/`+ productlist[i].Image + `" class="w-100" alt="">
                <h5>name:`+ productlist[i].name.toLowerCase().replace( searchvhl ,"<span class='bg-info'>"+searchvhl+"</span>"  ) + ` </h5>
                <p class="text-secondary">price: `+ productlist[i].price + `</p>
                <p class="text-secondary">desc: `+ productlist[i].desc + `</p>
                <p class="text-secondary">cate:`+ productlist[i].cate + `</p>
                <p class="text-danger">sale:`+ productlist[i].sale + `</p>
                <p class="text-danger">`+ i + `</p>
                <button type="button" class="btn btn-outline-info py-2">updata</button>
                <button onclick="deleteproduct(`+ i + `)" type="button" class="btn btn-outline-danger py-2">delete</button>
                </div>
                </div>`
        }

    }

    document.getElementById("myrow").innerHTML = temp


}

// function search() {
//     var searchvl = searchinput.value.toLowerCase()

//     var temp = ""
//     for (var i = 0; i < productlist.length; i++) {
//         if (productlist[i].cate.toLowerCase().includes(searchvl) == true || productlist[i].name.toLowerCase().includes(searchvl) == true) {
//             temp = temp + ` <div class="col-md-3 py-3 ">
// <div class="text-center border border-info">
//     <img src="images/`+ productlist[i].Image + `" class="w-100" alt="">
//     <h5>name:`+ productlist[i].name + ` </h5>
//     <p class="text-secondary">price: `+ productlist[i].price + `</p>
//     <p class="text-secondary">desc: `+ productlist[i].desc + `</p>
//     <p class="text-secondary">cate:`+ productlist[i].cate + `</p>
//     <p class="text-danger">sale:`+ productlist[i].sale + `</p>
//     <p class="text-danger">`+ i + `</p>
//     <button type="button" class="btn btn-outline-info py-2">updata</button>
//     <button onclick="deleteproduct(`+ i + `)" type="button" class="btn btn-outline-danger py-2">delete</button>
// </div>
// </div>`
//         }
//     }
//     document.getElementById("myrow").innerHTML = temp
// }


// var data = "hello in js file"
// console.log(data.charCodeAt(0));
// var newdata=data.includes("i")
// console.log(newdata);
// localStorage.setItem("route", "fround-end")
// localStorage.setItem("route2", "back-end")
// localStorage.setItem("route3", "andrioud")
// localStorage.setItem("route4", "samsung")
// localStorage.setItem("route5", "ios")

// // var x= localStorage.getItem("route3")
// var x= localStorage.length
// // var x= localStorage.removeItem("shady")
// console.log(x);

// json
// var list = [

//     { name: "iphone", price: 4000, slae: true, },
//     { name: "iphone", price: 4000, slae: true, },
//     { name: "iphone", price: 4000, slae: true, },
//     { name: "iphone", price: 4000, slae: true, },
//     { name: "iphone", price: 4000, slae: true, },
//     { name: "iphone", price: 4000, slae: true, },
//     { name: "iphone", price: 4000, slae: true, },

// ]
// var dataa = JSON.stringify(list)
// localStorage.setItem("list item",dataa)

// var list2 = localStorage.getItem("list item")

// var list3 = JSON.parse(list2)

// console.log(list3);
