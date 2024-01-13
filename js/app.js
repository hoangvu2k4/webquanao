
var imageToyota = document.querySelectorAll(".imageToyota img")
var leftBtn = document.querySelector(".left")
var rightBtn = document.querySelector('.right')
let index=0
rightBtn.addEventListener("click" , ()=>{
    index++
    if(index>imageToyota.length-1){
        index = 0
    }
    removeActive()
    imgNumber[index].classList.add('active')
    document.querySelector('.imageToyota').style.right = index *100+"%" 
})

leftBtn.addEventListener("click", ()=>{
    index--
    if(index<0){
        index = imageToyota.length-1
    }
    removeActive()
    imgNumber[index].classList.add('active')
    document.querySelector('.imageToyota').style.right = index *100+"%" 
})
function sliderAuto(){
    index = index + 1
    if(index>imageToyota.length-1){
        index = 0
    }
    document.querySelector('.imageToyota').style.right = index *100+"%"
    removeActive()
    imgNumber[index].classList.add('active')
}
setInterval(sliderAuto,3000)

const imgNumber = document.querySelectorAll(".box-list span")
imgNumber.forEach(function(image,index){
    image.addEventListener("click", function(){
        removeActive()
        document.querySelector('.imageToyota').style.right = index *100+"%" 
        image.classList.add("active")
    })
})

function removeActive(){
    let imgactive = document.querySelector(".active")
    imgactive.classList.remove("active")
}

// ---------product1----------

window.addEventListener("load", function(){
    var productLeft = document.querySelector(".leftproduct")
    var productRight = document.querySelector(".rightproduct")
    var productToyota = document.querySelectorAll(".product-toyotaxe .product-xe")
    console.log(productToyota.length)
    let IndexProduct = 0
    var producNumber = productToyota.length-1

    productLeft.addEventListener("click", ()=>{
        console.log(productLeft)
        IndexProduct--
        if(IndexProduct<0){
            IndexProduct = producNumber
        }
        document.querySelector(".product-toyotaxe").style.right= IndexProduct *100+"%"
    })
    productRight.addEventListener("click", ()=>{
        console.log(productLeft)
        IndexProduct++
        if(IndexProduct>producNumber){
            IndexProduct = 0
        }
        document.querySelector(".product-toyotaxe").style.right= IndexProduct *100+"%"
    })
})

// ----------product2--------------

window.addEventListener("load", function(){
    var productLeft2 = document.querySelector(".leftproduct2")
    var productRight2 = document.querySelector(".rightproduct2")
    var productToyota2 = document.querySelectorAll(".product2-toyotaxe .product-xe")
    let IndexProduct2 = 0
    var producNumber2 = productToyota2.length-1

    productLeft2.addEventListener("click", ()=>{
        IndexProduct2--
        if(IndexProduct2<0){
            IndexProduct2 = producNumber2
        }
        document.querySelector(".product2-toyotaxe").style.right= IndexProduct2 *100+"%"
    })
    productRight2.addEventListener("click", ()=>{
        IndexProduct2++
        if(IndexProduct2>producNumber2){
            IndexProduct2 = 0
        }
        document.querySelector(".product2-toyotaxe").style.right= IndexProduct2 *100+"%"
    })
})

// ------product3--------------

window.addEventListener("load", function(){
    var productLeft3 = document.querySelector(".leftproduct3")
    var productRight3 = document.querySelector(".rightproduct3")
    var productToyota3 = document.querySelectorAll(".product3-toyotaxe .product-xe")
    let IndexProduct3 = 0
    var producNumber3 = productToyota3.length-1

    productLeft3.addEventListener("click", ()=>{
        IndexProduct3--
        if(IndexProduct3<0){
            IndexProduct3 = producNumber3
        }
        document.querySelector(".product3-toyotaxe").style.right= IndexProduct3 *100+"%"
    })
    productRight3.addEventListener("click", ()=>{
        IndexProduct3++
        if(IndexProduct3>producNumber3){
            IndexProduct3 = 0
        }
        document.querySelector(".product3-toyotaxe").style.right= IndexProduct3 *100+"%"
    })
})

// ------------product4-------------

window.addEventListener("load", function(){
    var productLeft4 = document.querySelector(".leftproduct4")
    var productRight4 = document.querySelector(".rightproduct4")
    var productToyota4 = document.querySelectorAll(".product4-toyotaxe .product-xe")
    let IndexProduct4 = 0
    var producNumber4 = productToyota4.length-1

    productLeft4.addEventListener("click", ()=>{
        IndexProduct4--
        if(IndexProduct4<0){
            IndexProduct4 = producNumber4
        }
        document.querySelector(".product4-toyotaxe").style.right= IndexProduct4 *100+"%"
    })
    productRight4.addEventListener("click", ()=>{
        IndexProduct4++
        if(IndexProduct4>producNumber4){
            IndexProduct4 = 0
        }
        document.querySelector(".product4-toyotaxe").style.right= IndexProduct4 *100+"%"
    })
})

// ---------product5-------------
window.addEventListener("load", function(){
    var productLeft5 = document.querySelector(".leftproduct5")
    var productRight5 = document.querySelector(".rightproduct5")
    var productToyota5 = document.querySelectorAll(".product5-toyotaxe .product-xe")
    let IndexProduct5 = 0
    var producNumber5 = productToyota5.length-1

    productLeft5.addEventListener("click", ()=>{
        IndexProduct5--
        if(IndexProduct5<0){
            IndexProduct5 = producNumber5
        }
        document.querySelector(".product5-toyotaxe").style.right= IndexProduct5 *100+"%"
    })
    productRight5.addEventListener("click", ()=>{
        IndexProduct5++
        if(IndexProduct5>producNumber5){
            IndexProduct5 = 0
        }
        document.querySelector(".product5-toyotaxe").style.right= IndexProduct5 *100+"%"
    })
})

window.addEventListener("load", ()=>{
    var gioithieu = document.querySelector("#gioithieu")
    var trangchu = document.querySelector("#trangchu")
    var tragop = document.querySelector("#installment")
    var newcar = document.querySelector("#newcar")
    var sanpham = document.querySelector("#sanpham")
    var news = document.querySelector("#news")
    var contact = document.querySelector("#contact")
    var gioithieuFooter = document.querySelector("#gioithieuFooter")
    var installmentFooter = document.querySelector("#installmentFooter")
    var newcarFooter = document.querySelector("#newcarFooter")
    gioithieu.addEventListener("click", ()=>{
        window.location.href = "../html/introduce.html"
    })
    trangchu.addEventListener("click", ()=>{
        window.location.href = "../html/index.html"
    })
    tragop.addEventListener("click", ()=>{
        window.location.href = "../html/installment.html"
    })
    newcar.addEventListener("click", ()=>{
        console.log(gioithieuFooter)
        window.location.href = "../html/newcarprice.html"
    })
    sanpham.addEventListener("click", ()=>{
        window.location.href = "../html/product.html"
    })
    news.addEventListener("click", ()=>{
        window.location.href = "../html/news.html"
    })
    contact.addEventListener("click", ()=>{
        window.location.href = "../html/contact.html"
    })
    gioithieuFooter.addEventListener("click", ()=>{
        console.log(gioithieuFooter)
        window.location.href = "../html/introduce.html"
    })
    installmentFooter.addEventListener("click", ()=>{
        console.log(gioithieuFooter)
        window.location.href = "../html/installment.html"
    })
    newcarFooter.addEventListener("click", ()=>{
        console.log(gioithieuFooter)
        window.location.href = "../html/newcarprice.html"
    })
})




