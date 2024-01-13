function searchProduct(){
    let searchBar = document.querySelector('#search').value.toUpperCase();
    let productItem = Array.from(document.querySelectorAll('.product-item'));
    let productName = document.querySelectorAll('h3');
    console.log(productName)

    for (let i=0; i<productName.length; i++){
        if(productName[i].innerHTML.toUpperCase().indexOf(searchBar)>=0){
            productItem[i].style.display = "";
            console.log("haha")
        }else{
            productItem[i].style.display = "none";
        }
    }
}

var searchBox = document.querySelector(".search")
console.log(searchBox)
searchBox.addEventListener("keyup", searchProduct)



window.addEventListener("load", ()=>{
    var trangchu = document.querySelector("#trangchu")
    var gioithieu = document.querySelector("#gioithieu")
    var tragop = document.querySelector("#installment")
    var newcar = document.querySelector("#newcar")
    var news = document.querySelector("#news")
    var contact = document.querySelector("#contact")
    var installmentFooter = document.querySelector("#installmentFooter")
    trangchu.addEventListener("click", ()=>{
        window.location.href = "index.html"
    })
    gioithieu.addEventListener("click", ()=>{
        window.location.href = "introduce.html"
    })
    tragop.addEventListener("click", ()=>{
        window.location.href = "installment.html"
    })
    newcar.addEventListener("click", ()=>{
        window.location.href = "newcarprice.html"
    })
    news.addEventListener("click", ()=>{
        window.location.href = "news.html"
    })
    contact.addEventListener("click", ()=>{
        window.location.href = "contact.html"
    })
    installmentFooter.addEventListener("click", ()=>{
        window.location.href = "installment.html"
    })
})




