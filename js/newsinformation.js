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