
document.addEventListener('DOMContentLoaded', function() {
    var amt1=0
    var amt2=0
    var totalCost
    var prod1Check=document.getElementById("product1check")
    var prod2Check=document.getElementById("product2check")
    var prod1AmtBox=document.getElementById("product1Num")
    var prod2AmtBox=document.getElementById("product2Num")
    var cost=document.getElementById("cost")
    prod1Check.addEventListener('change', increaseProd1)
    prod1AmtBox.addEventListener('change', increaseProd1)
    prod2Check.addEventListener('change', increaseProd2)
    prod2AmtBox.addEventListener('change', increaseProd2)
    function increaseProd1(){
        if (prod1Check==null){
            prod1Check.checked==false
        }
        if (prod1Check.checked){
        amt1=prod1AmtBox.value
        if (amt1<0){
            prod1AmtBox.value=0
            setTimeout()
        }
        totalCost=amt1*20+amt2*50
        cost.textContent= "Cost: $" + totalCost;
        console.log(amt2)
        console.log(totalCost)
        }
    }
    function increaseProd2(){
    if (prod2Check.checked){
        amt2=prod2AmtBox.value
        if (amt2<0){
            prod2AmtBox.value=0
            setTimeout()
        }
        totalCost=amt1*20+amt2*50
        cost.textContent= "Cost: $" + totalCost;
    }
}
var purchase=document.getElementById("purchase")
purchase.addEventListener('click', purchaseEffects)

    const aud = new Audio(mediaFiles/bad.mp4)
    function purchaseEffects(){
        alert("Audio")
        aud.play()
        window.location.href="index.html"
        return false
    }
  
  }, false);
