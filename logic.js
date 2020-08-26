window.onload = init;

var shiftSummary = {

    totalDeliveries: 0,
    outOfTownOrders: 0,
    inTownOrders: 0,
    cashTipTotal: 0,
    cardTipTotal: 0,
    tipTotal: 0,
    startingMiles: 0,
    endingMiles: 0,
    totalMiles: 0

}

function init() {

    //localStorage.clear();

if(!localStorage.getItem('shiftSummary')) {
        localStorage.setItem('shiftSummary', JSON.stringify({
            
            totalDeliveries: 0,
            outOfTownOrders: 0,
            inTownOrders: 0,
            cashTipTotal: 0,
            cardTipTotal: 0,
            tipTotal: 0,
            startingMiles: 0,
            endingMiles: 0,
            totalMiles: 0

        })
    )
}  else if (localStorage.getItem('shiftSummary')) {
    var localShiftSummary = localStorage.getItem('shiftSummary');
    var parsedShiftSummary = JSON.parse(localShiftSummary);

    var cardTipTotalElement = document.getElementById("cardTipTotal");
    var tipTotalElement = document.getElementById("tipTotal");
    var cashTipTotalElement = document.getElementById("cashTipTotal");
    var totalDeliveriesElement = document.getElementById("totalDeliveries");
    var outOfTownOrdersElement = document.getElementById("outOfTownOrders");
    var inTownOrdersElement = document.getElementById("inTownOrders");
    var startingMilesElement = document.getElementById("startingMiles");
    var endingMilesElement = document.getElementById("endingMiles");
    var totalMilesElement = document.getElementById("totalMiles");

    shiftSummary.totalDeliveries = parsedShiftSummary.totalDeliveries
    shiftSummary.outOfTownOrders = parsedShiftSummary.outOfTownOrders
    shiftSummary.inTownOrders = parsedShiftSummary.inTownOrders
    shiftSummary.cashTipTotal = parsedShiftSummary.cashTipTotal
    shiftSummary.cardTipTotal = parsedShiftSummary.cardTipTotal
    shiftSummary.tipTotal = parsedShiftSummary.tipTotal
    shiftSummary.startingMiles = parsedShiftSummary.startingMiles
    shiftSummary.endingMiles = parsedShiftSummary.endingMiles
    shiftSummary.totalMiles = parsedShiftSummary.totalMiles

    //console.log(shiftSummary.cardTipTotal);

    cardTipTotalElement.innerHTML = parsedShiftSummary.cardTipTotal
    tipTotalElement.innerHTML = parsedShiftSummary.tipTotal
    cashTipTotalElement.innerHTML = parsedShiftSummary.cashTipTotal
    totalDeliveriesElement.innerHTML = parsedShiftSummary.totalDeliveries
    outOfTownOrdersElement.innerHTML = parsedShiftSummary.outOfTownOrders
    inTownOrdersElement.innerHTML = parsedShiftSummary.inTownOrders
    startingMilesElement.innerHTML = parsedShiftSummary.startingMiles
    endingMilesElement.innerHTML = parsedShiftSummary.endingMiles
    totalMilesElement.innerHTML = parsedShiftSummary.totalMiles


    console.log(shiftSummary);
    //console.log(parsedShiftSummary.cardTipTotal);
}

    var newOrder = document.getElementById("newOrder");
    var inTown = document.getElementById("inTown");
    var outOfTown = document.getElementById("outOfTown");
    var startShift = document.getElementById("startShift");
    var endShift = document.getElementById("endShift");
    var resetShift = document.getElementById("resetShift");
    

    function onClickHandler(button) {
        return function() { display.handleButtons(button); };
    }

    newOrder.onclick = onClickHandler("newOrder");
    inTown.onclick = onClickHandler("inTown");
    outOfTown.onclick = onClickHandler("outOfTown");
    startShift.onclick = onClickHandler("startShift");
    endShift.onclick = onClickHandler("endShift");
    resetShift.onclick = onClickHandler("resetShift");

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
        cashTipTotalElement.innerHTML = shiftSummary.cashTipTotal + cashTipVal;
        tipTotalElement.innerHTML = shiftSummary.tipTotal + cashTipVal;

        shiftSummary.cashTipTotal = shiftSummary.cashTipTotal + cashTipVal
        shiftSummary.tipTotal = shiftSummary.tipTotal + cashTipVal

        localStorage.setItem('shiftSummary', JSON.stringify(shiftSummary));

        document.getElementById("cashTipInput").value = "";
    }
}

function cardTip() {
    var cardTipTotalElement = document.getElementById("cardTipTotal");

    var inputVal = document.getElementById("cardTipInput").value;
    var cardTipVal = parseFloat(inputVal);

    var tipTotalElement = document.getElementById("tipTotal");

    if(inputVal.length < 1) {
        alert("Please enter a tip amount")
    }

    else {
        cardTipTotalElement.innerHTML = shiftSummary.cardTipTotal + cardTipVal;
        tipTotalElement.innerHTML = shiftSummary.tipTotal + cardTipVal;

        shiftSummary.cardTipTotal = shiftSummary.cardTipTotal + cardTipVal
        shiftSummary.tipTotal = shiftSummary.tipTotal + cardTipVal

        localStorage.setItem('shiftSummary', JSON.stringify(shiftSummary));

        document.getElementById("cardTipInput").value = "";
        //console.log(shiftSummary);
        //console.log(cardTipVal);
        //console.log(shiftSummary.cardTipTotal);
        // Above I'm assigning the shift value.  I need to add it to the cardtipval, and assign it seperately!
    }
}

var display = {

    handleButtons: function(button) {
       var totalDeliveriesElement = document.getElementById("totalDeliveries");

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
            totalDeliveriesElement.innerHTML = shiftSummary.totalDeliveries += 1;
       } else if (button == "inTown") {
            inTownOrdersElement.innerHTML = shiftSummary.inTownOrders += 1;
       } else if (button == "outOfTown") {
            outOfTownOrdersElement.innerHTML = shiftSummary.outOfTownOrders += 1;
       } else if(button == "startShift") {
            var inputValue = prompt("Please enter your cars mile range at the START of your shift.")
            var inputValueInt = parseFloat(inputValue);

            shiftSummary.startingMiles = inputValueInt;

            startingMilesElement.innerHTML = inputValueInt;
       } else if(button == "endShift") {
           var inputValue = prompt("Please enter your cars mile range at the END of your shift.");
           var inputValueInt = parseFloat(inputValue);

           shiftSummary.endingMiles = inputValueInt;
           shiftSummary.totalMiles = shiftSummary.startingMiles - shiftSummary.endingMiles;

           endingMilesElement.innerHTML = inputValueInt;
           totalMilesElement.innerHTML = shiftSummary.startingMiles - shiftSummary.endingMiles;
       } else {
           console.log("why is this being logged");
     }
     localStorage.setItem('shiftSummary', JSON.stringify(shiftSummary));

        if(button == "resetShift") {
            if(confirm("WARNING: Clicking OKAY will wipe all shift information back to 0!")) {
                localStorage.clear();
                location.reload();
        } else {
            console.log("weewees");
        }
    } else {
        console.log("weewees")
    }
   }
}

            //localStorage.clear()
            //localStorage.setItem('myCat', 'Tom');

            //var cat = localStorage.getItem('myCat');
            //alert(cat);