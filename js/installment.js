window.addEventListener("load", ()=>{
    var trangchu = document.querySelector("#trangchu")
    var gioithieu = document.querySelector("#gioithieu")
    var newcar = document.querySelector("#newcar")
    var sanpham = document.querySelector("#sanpham")
    var news = document.querySelector("#news")
    var contact =document.querySelector("#contact")
    var gioithieuFooter = document.querySelector("#gioithieuFooter")
    var newcarFooter = document.querySelector("#newcarFooter")
    trangchu.addEventListener("click", ()=>{
        window.location.href = "index.html"
    })
    gioithieu.addEventListener("click", ()=>{
        window.location.href = "introduce.html"
    })
    newcar.addEventListener("click", ()=>{
        window.location.href = "newcarprice.html"
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
        window.location.href = "introduce.html"
    })
    newcarFooter.addEventListener("click", ()=>{
        window.location.href = "newcarprice.html"
    })
})