    var searchResult
    // Create a variable to put the search result in
    var searchBtn=document.getElementById("Search")
    // set the button to a variable
    var searchDatabase = 
    {"SEARCH":["GALLERY", "SERVICES", "ORDERS", "HOME"],
        "SOURCE":["gallery.html","services.html","orders.html","index.html"],
    }
    // create a dictionary for ease of searching


searchBtn.addEventListener('click', checkSearch)
// detect when the button is pressed and run the function checkSearch

function checkSearch(){
    searchResult=document.getElementById("TextBox").value.toUpperCase()
    // take the input of the text box and make it uppercase
    for (let i =0; i<4; i++){
        if (searchResult==searchDatabase.SEARCH[i]){
            window.location.href=searchDatabase.SOURCE[i]
            // go through the dictionary and check if it matches any items
            // If it does send to the corresponding page
        }
    }
    return false
}

