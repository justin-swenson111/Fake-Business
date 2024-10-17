    var searchResult
    var searchBtn=document.getElementById("Search")


searchBtn.addEventListener('click', checkSearch)

function checkSearch(){
    searchResult=document.getElementById("TextBox").value.toUpperCase()
    if (searchResult=="GALLERY"){
        window.location.href="gallery.html"
    }
    if (searchResult=="SERVICES"){
        window.location.href="services.html"
    }
    if (searchResult=="ORDERS"){
        window.location.href="orders.html"
    }
    if (searchResult=="HOME"){
        window.location.href="index.html"
    }
    // alert(searchResult)
    return false
}