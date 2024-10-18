document.addEventListener('DOMContentLoaded', function() {
    var searchResult
    // Create a variable to put the search result in
    var searchBtn=document.getElementById("Search")
    // set the button to a variable
    var searchBar=document.getElementById("TextBox")
    var searchDatabase = 
    {"SEARCH":["GALLERY", "SERVICES", "ORDERS", "HOME"],
        "SOURCE":["gallery.html","services.html","orders.html","index.html"],
    }
    // create a dictionary for ease of searching


searchBtn.addEventListener('click', checkSearch)
// detect when the button is pressed and run the function checkSearch

function checkSearch(){
    searchResult=searchBar.value.toUpperCase()
    // take the input of the text box and make it uppercase
    for (let i =0; i<4; i++){
        if (searchResult==searchDatabase.SEARCH[i]){
            window.location.href=searchDatabase.SOURCE[i]
            // go through the dictionary and check if it matches any items
            // If it does send to the corresponding page
        }
    }
    searchBar.value=""
    return false
}
var searchBar=document.getElementById("TextBox")
var recom = document.getElementById("recom")

recom.onclick = function() {RecommendedSearch()}
searchBar.onkeyup = function() {Recommended()}


function Recommended(){
    searchResult=searchBar.value.toUpperCase()
    var correct =false
    var len = searchResult.length
    for (let i=0; i<4; i++){
        var Check = searchDatabase.SEARCH[i].slice(0,len)
        if (searchResult==Check && Check!=""){
            // alert(Check)
            correct=true
            recom.value=searchDatabase.SEARCH[i]
        }
        else if(correct==false){
            recom.value=""
        }
        }
    if (searchResult==""){
        recom.value=""
    }
    console.log(correct)
}

function RecommendedSearch(){
    searchResult=searchBar.value.toUpperCase()
    var len = searchResult.length
    for (let i=0; i<4; i++){
        var Check = searchDatabase.SEARCH[i].slice(0,len)
        if (searchResult==Check && Check!=""){
            window.location.href=searchDatabase.SOURCE[i]

        }
    }
}

}, false);


