var clickMe = function(){
    var input = document.getElementById("amount");

    var amount = Number(input.value);
    if (isNaN(amount)){
        alert("Please enter numbers")
    }else{
        var tax = 50;
        var total = amount + tax;
        alert(total);
    }
}