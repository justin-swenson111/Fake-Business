document.addEventListener('DOMContentLoaded', function() {
    var amt1=0
    var amt2=0
    var amt3=0
    var amt4=0
    var totalCost
    
    var prod1Check=document.getElementById("product1check")
    var prod1AmtBox=document.getElementById("product1Num")

    var prod2Check=document.getElementById("product2check") 
    var prod2AmtBox=document.getElementById("product2Num")

    var prod3Check=document.getElementById("product3check") 
    var prod3AmtBox=document.getElementById("product3Num")

    var prod4Check=document.getElementById("product4check") 
    var prod4AmtBox=document.getElementById("product4Num")

    var cost=document.getElementById("cost")

    prod1Check.onchange = function(){ increaseProd()}
    prod1AmtBox.onchange = function(){ increaseProd()}

    prod2Check.onchange = function(){ increaseProd()}
    prod2AmtBox.onchange = function(){ increaseProd()}

    prod3Check.onchange = function(){ increaseProd()}
    prod3AmtBox.onchange = function(){ increaseProd()}

    prod4Check.onchange = function(){ increaseProd()}
    prod4AmtBox.onchange = function(){ increaseProd()}

    function increaseProd(){
        if (prod1Check.checked){
            if (prod1AmtBox.value<0){
                prod1AmtBox.value=0
            }
        checkCost()
        }
        else if (prod1Check.checked==false){
            prod1AmtBox.value=0
            checkCost()
            cost.textContent= "Cost: $" + totalCost;

        }
        if (prod2Check.checked){
            if (prod2AmtBox.value<0){
                prod2AmtBox.value=0
            }
        checkCost()
        }
        else if (prod2Check.checked==false){
            prod2AmtBox.value=0
            checkCost()
            // alert(totalCost)
            cost.textContent= "Cost: $" + totalCost;

        }
        if (prod3Check.checked){
            prod3AmtBox.value=1
            checkCost()

        }
        else if (prod3Check.checked==false){
                prod3AmtBox.value=0
                checkCost()
        }
        if (prod4Check.checked){
            prod4AmtBox.value=1
            checkCost()

        }
        else if (prod4Check.checked==false){
                prod4AmtBox.value=0
                checkCost()
        }
    }


    function checkCost(){
        amt1=prod1AmtBox.value
        amt2=prod2AmtBox.value
        amt3=prod3AmtBox.value
        amt4=prod4AmtBox.value
        totalCost=amt1*20+amt2*50+amt3*500+amt4*250.83
        cost.textContent= "Cost: $" + totalCost;
    }
    var purchase=document.getElementById("purchase")
    purchase.onclick =function() {purchaseEffects()} 

    function purchaseEffects(){
        setInterval(function(){window.location.href="index.html"}, 3100)
        var audio = new Audio('mediaFiles/bad.mp3');
         audio.play();

    }
}, false);
