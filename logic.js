window.onload = init;

function init() {
    var newOrder = document.getElementById("newOrder");
    var inTown = document.getElementById("inTown");
    var outOfTown = document.getElementById("outOfTown");
    var startShift = document.getElementById("startShift");
    var endShift = document.getElementById("endShift");
    

    function onClickHandler(button) {
        return function() { display.handleButtons(button); };
    }

    newOrder.onclick = onClickHandler("newOrder");
    inTown.onclick = onClickHandler("inTown");
    outOfTown.onclick = onClickHandler("outOfTown");
    startShift.onclick = onClickHandler("startShift");
    endShift.onclick = onClickHandler("endShift");

}

function cashTip() {
    var cashTipTotalElement = document.getElementById("cashTipTotal");
    var cashTipTotal = parseFloat(cashTipTotalElement.innerHTML);

    var inputVal = document.getElementById("cashTipInput").value;
    var cashTipVal = parseFloat(inputVal);

    var tipTotalElement = document.getElementById("tipTotal");
    var tipTotal = parseFloat(tipTotalElement.innerHTML);

    if(inputVal.length < 1) {
        alert("Please enter a tip amount")
    }

    else {
        cashTipTotalElement.innerHTML = cashTipTotal += cashTipVal;
        tipTotalElement.innerHTML = tipTotal += cashTipVal;

        document.getElementById("cashTipInput").value = "";
    }
}

function cardTip() {
    var cardTipTotalElement = document.getElementById("cardTipTotal");
    var cardTipTotal = parseFloat(cardTipTotalElement.innerHTML);

    var inputVal = document.getElementById("cardTipInput").value;
    var cardTipVal = parseFloat(inputVal);

    var tipTotalElement = document.getElementById("tipTotal");
    var tipTotal = parseFloat(tipTotalElement.innerHTML);

    if(inputVal.length < 1) {
        alert("Please enter a tip amount")
    }

    else {
        cardTipTotalElement.innerHTML = cardTipTotal += cardTipVal;
        tipTotalElement.innerHTML = tipTotal += cardTipVal;

        document.getElementById("cardTipInput").value = "";
    }
}

var display = {

    handleButtons: function(button) {
       var totalDeliveriesElement = document.getElementById("totalDeliveries");
       var totalDeliveries = parseFloat(totalDeliveriesElement.innerHTML);

       var inTownOrdersElement = document.getElementById("inTownOrders");
       var inTownOrders = parseFloat(inTownOrdersElement.innerHTML);

       var outOfTownOrdersElement = document.getElementById("outOfTownOrders");
       var outOfTownOrders = parseFloat(outOfTownOrdersElement.innerHTML);

       var startingMilesElement = document.getElementById("startingMiles");
       var startingMiles = parseFloat(startingMilesElement.innerHTML);

       var endingMilesElement = document.getElementById("endingMiles");
       var endingMiles = parseFloat(endingMilesElement.innerHTML);

       var totalMilesElement = document.getElementById("totalMiles");
       var totalMiles = parseFloat(totalMilesElement.innerHTML);
   
       if (button == "newOrder") {
            totalDeliveriesElement.innerHTML = totalDeliveries += 1;
       } else if (button == "inTown") {
            inTownOrdersElement.innerHTML = inTownOrders += 1;
       } else if (button == "outOfTown") {
            outOfTownOrdersElement.innerHTML = outOfTownOrders += 1;
       } else if(button == "startShift") {
            var inputValue = prompt()
            var inputValueInt = parseFloat(inputValue);

            startingMilesElement.innerHTML = startingMiles += inputValueInt;
       } else if(button == "endShift") {
           var inputValue = prompt();
           var inputValueInt = parseFloat(inputValue);

           endingMilesElement.innerHTML = endingMiles += inputValueInt;
           totalMilesElement.innerHTML = startingMiles -= endingMiles;
       } else {
           console.log("why is this being logged");
     }
   }
}