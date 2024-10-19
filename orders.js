document.addEventListener('DOMContentLoaded', function() {
    var amt1=0
    var amt2=0
    var totalCost
    
    var prod1Check=document.getElementById("product1check")
    var prod1AmtBox=document.getElementById("product1Num")

    var prod2Check=document.getElementById("product2check") 
    var prod2AmtBox=document.getElementById("product2Num")

    var cost=document.getElementById("cost")

    prod1Check.onchange = function(){ increaseProd1()}
    prod1AmtBox.onchange = function(){ increaseProd1()}

    prod2Check.onchange = function(){ increaseProd2()}
    prod2AmtBox.onchange = function(){ increaseProd2()}

    function increaseProd1(){
        if (prod1Check.checked){
            if (prod1AmtBox.value<0){
                prod1AmtBox.value=0
            }
        checkCost()
        }
        if (prod1Check.checked==false){
            prod1AmtBox.value=0
            checkCost()
            cost.textContent= "Cost: $" + totalCost;

        }
    }

    function increaseProd2(){
        if (prod2Check.checked){
            if (prod2AmtBox.value<0){
                prod2AmtBox.value=0
            }
        checkCost()
        }
        if (prod2Check.checked==false){
            prod2AmtBox.value=0
            checkCost()
            // alert(totalCost)
            cost.textContent= "Cost: $" + totalCost;

        }
    
    }

    function checkCost(){
        amt1=prod1AmtBox.value
        amt2=prod2AmtBox.value
        totalCost=amt1*20+amt2*50
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
