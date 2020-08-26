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

    var inputVal = document.getElementById("cashTipInput").value;
    var cashTipVal = parseFloat(inputVal);

    var tipTotalElement = document.getElementById("tipTotal");

    if(inputVal.length < 1) {
        alert("Please enter a tip amount");
    }

    //Using math.round here prevents extremely long decimals from being created within the shift summary table.
    else {
        cashTipTotalElement.innerHTML = Math.round((shiftSummary.cashTipTotal + cashTipVal) * 100) / 100;
        tipTotalElement.innerHTML = Math.round((shiftSummary.tipTotal + cashTipVal) * 100) / 100;

        shiftSummary.cashTipTotal = Math.round((shiftSummary.cashTipTotal + cashTipVal) * 100) / 100;
        shiftSummary.tipTotal = Math.round((shiftSummary.tipTotal + cashTipVal) * 100) / 100;

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
        cardTipTotalElement.innerHTML = Math.round((shiftSummary.cardTipTotal + cardTipVal) * 100) / 100;
        tipTotalElement.innerHTML = Math.round((shiftSummary.tipTotal + cardTipVal) * 100) / 100;

        shiftSummary.cardTipTotal = Math.round((shiftSummary.cardTipTotal + cardTipVal) * 100) / 100;
        shiftSummary.tipTotal = Math.round((shiftSummary.tipTotal + cardTipVal) * 100) / 100;

        localStorage.setItem('shiftSummary', JSON.stringify(shiftSummary));

        document.getElementById("cardTipInput").value = "";
    }
}

var display = {

    handleButtons: function(button) {
       var totalDeliveriesElement = document.getElementById("totalDeliveries");
       var inTownOrdersElement = document.getElementById("inTownOrders");
       var outOfTownOrdersElement = document.getElementById("outOfTownOrders");
       var startingMilesElement = document.getElementById("startingMiles");
       var endingMilesElement = document.getElementById("endingMiles");
       var totalMilesElement = document.getElementById("totalMiles");
       
       var toastInTown = document.getElementById("toastInTown");
       var toastOutOfTown = document.getElementById("toastOutOfTown");

   
       if (button == "newOrder") {
            totalDeliveriesElement.innerHTML = shiftSummary.totalDeliveries += 1;
       } else if (button == "inTown") {
            inTownOrdersElement.innerHTML = shiftSummary.inTownOrders += 1;

            toastInTown.innerHTML = "+1 to In Town Order"
            toastInTown.className = "show";

            setTimeout(function() {
                toastInTown.className = toastInTown.className.replace("show", "");
            }, 3000);
       } else if (button == "outOfTown") {
            outOfTownOrdersElement.innerHTML = shiftSummary.outOfTownOrders += 1;

            toastOutOfTown.innerHTML = "+1 to Out of Town Order"
            toastOutOfTown.className = "show";

            setTimeout(function() {
                toastOutOfTown.className = toastOutOfTown.className.replace("show", "");
            }, 3000);
       } else if(button == "startShift") {
            var inputValue = prompt("Please enter your cars mile range at the START of your shift.")
            var inputValueInt = parseFloat(inputValue);

                if(inputValue) {
                    shiftSummary.startingMiles = inputValueInt;

                    startingMilesElement.innerHTML = inputValueInt;
                } else {
                    console.log("Invalid entry on STARTSHIFT");
                }

       } else if(button == "endShift") {
           var inputValue = prompt("Please enter your cars mile range at the END of your shift.");
           var inputValueInt = parseFloat(inputValue);

           if(inputValue) {
            shiftSummary.endingMiles = inputValueInt;
            shiftSummary.totalMiles = shiftSummary.startingMiles - shiftSummary.endingMiles;
 
            endingMilesElement.innerHTML = inputValueInt;
            totalMilesElement.innerHTML = shiftSummary.startingMiles - shiftSummary.endingMiles;
           } else {
               console.log("Invalid entry on ENDSHIFT");
           }

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
    }
    
    else {
        console.log("weewees")
    }
   }
}