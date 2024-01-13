window.addEventListener("load", ()=>{
    var trangchu = document.querySelector("#trangchu")
    var gioithieu = document.querySelector("#gioithieu")
    var tragop = document.querySelector("#installment")
    var sanpham = document.querySelector("#sanpham")
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
    sanpham.addEventListener("click", ()=>{
        window.location.href = "../html/product.html"
    })
    news.addEventListener("click", ()=>{
        window.location.href = "../html/news.html"
    })
    contact.addEventListener("click", ()=>{
        window.location.href = "../html/contact.html"
    })
    installmentFooter.addEventListener("click", ()=>{
        window.location.href = "installment.html"
    })
})