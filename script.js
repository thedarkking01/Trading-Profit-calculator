// var leverageInput = document.getElementById("leverage");
// var leverageValueSpan = document.getElementById("leverageValue");
// const today = new Date();
// const offset = today.getTimezoneOffset(); // Get the timezone offset in minutes
// const localDateTime = new Date(today.getTime() - offset * 60 * 1000);
// const todayString = localDateTime.toISOString().slice(0, 16); // Format: "YYYY-MM-DDTHH:mm"
// document.getElementById("date").value = todayString;

// var avatarImage;
// var qrImage = "images/qrcode.png";

// function cardBackBackGround(profit) {
//   // Get references to the necessary DOM elements
//   const cardBack = document.getElementById("output");
//   const cardType = document.getElementById("cardtype");

//   // Define CSS classes for different card types
//   const cardClasses = {
//     bybit: ["bybit"],
//     bitget: ["bitget"],
//     binance1: ["binance-bg-rocket"],
//     binance2: ["binance-bg-circle"],
//   };

//   // Function to update card classes based on the selected card type
//   function updateCardClasses(selectedType) {
//     // Remove all existing classes from the cardBack element
//     cardBack.classList.remove(
//       ...cardClasses["bybit"],
//       ...cardClasses["bitget"],
//       ...cardClasses["binance1"],
//       ...cardClasses["binance2"]
//     );

//     // Add classes based on the selected card type
//     cardBack.classList.add(...cardClasses[selectedType]);
//   }

//   // Accessing individual elements of the 'binance' array
//   const binanceFirstElement = "binance1"; // Updated key
//   const binanceSecondElement = "binance2"; // Updated key

//   // Checking the card type and profit condition
//   if (cardType.value === "binance") {
//     if (profit >= 100) {
//       // If profit is greater than or equal to 100, use the first element of the 'binance' array
//       updateCardClasses(binanceSecondElement);
//     } else {
//       // Otherwise, use the second element of the 'binance' array
//       updateCardClasses(binanceFirstElement);
//     }
//   } else {
//     // Handle other card types if needed
//     updateCardClasses(cardType.value);
//   }
// }

// function validateForm() {
//   const handleInput = document.getElementById("handle");
//   const handleSubInput = document.getElementById("handleSub");
//   const symbolInput = document.getElementById("symbol");
//   const entryPriceInput = document.getElementById("entryPrice");
//   const currentPriceInput = document.getElementById("currentPrice");
//   const referralCodeInput = document.getElementById("referralCode");
//   const displayTradeBtn = document.getElementById("displayTradeBtn");

//   // Empty validation
//   const handleIsEmpty = handleInput.value.trim() === "";
//   const symbolIsEmpty = symbolInput.value.trim() === "";
//   const entryPriceIsEmpty = entryPriceInput.value.trim() === "";
//   const currentPriceIsEmpty = currentPriceInput.value.trim() === "";
//   const referralCodeIsEmpty = referralCodeInput.value.trim() === "";

//   // Enable/disable the button based on validation
//   displayTradeBtn.disabled =
//     handleIsEmpty ||
//     symbolIsEmpty ||
//     entryPriceIsEmpty ||
//     currentPriceIsEmpty ||
//     referralCodeIsEmpty;
// }
// validateForm();

// function readAvatar(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     avatarImage = URL.createObjectURL(input.files[0]);

//     reader.onload = function (e) {
//       document.querySelector(
//         ".handleAvatar"
//       ).style.backgroundImage = `url('${e.target.result}')`;
//     };

//     reader.readAsDataURL(input.files[0]);
//   }
// }

// function readQr(input) {
//   if (input.files && input.files[0]) {
//     qrImage = URL.createObjectURL(input.files[0]);
//   }
// }

// function resetForm() {
//   var tradeCard = document.getElementById("tradeCard");
//   var output = document.getElementById("output");

//   // Reset form fields to initial values
//   document.getElementById("date").value = todayString;
//   document.getElementById("handle").value = "@JustProfit";
//   document.getElementById("handleSub").value = "JustProfit";
//   document.querySelector(".tab.active").classList.remove("active");
//   document.querySelector(".tab").classList.add("active");
//   document.getElementById("leverage").value = "20";
//   leverageValueSpan.innerHTML = "20x";
//   document.getElementById("entryPrice").value = "8.2487";
//   document.getElementById("currentPrice").value = "9.2154";
//   document.getElementById("referralCode").value = "1XV1FJV3";

//   // Toggle card flip to front side
//   tradeCard.classList.remove("flipped");
//   output.innerHTML = "";
// }

// leverageInput.addEventListener("input", function () {
//   leverageValueSpan.innerHTML = leverageInput.value + "x";
// });

// function setTab(tabName) {
//   var tabs = document.querySelectorAll(".tab");
//   tabs.forEach(function (tab) {
//     tab.classList.remove("active");
//   });
//   var selectedTab = event.target;
//   selectedTab.classList.add("active");
// }

// function padZero(num) {
//   return num < 10 ? `0${num}` : `${num}`;
// }

// function toggleTradeInfo() {
//   var tradeCard = document.getElementById("tradeCard");
//   var output = document.getElementById("output");

//   // Toggle card flip
//   tradeCard.classList.toggle("flipped");

//   // Display trade information on the back of the card
//   if (tradeCard.classList.contains("flipped")) {
//     const inputDateString = new Date(document.getElementById("date").value);

//     const formattedDate = `${inputDateString.getFullYear()}/${padZero(
//       inputDateString.getMonth() + 1
//     )}/${padZero(inputDateString.getDate())} ${padZero(
//       inputDateString.getHours()
//     )}:${padZero(inputDateString.getMinutes())}`;

//     const entryPrice = parseFloat(document.getElementById("entryPrice").value);
//     const currentPrice = parseFloat(
//       document.getElementById("currentPrice").value
//     );
//     const leverage = parseFloat(document.getElementById("leverage").value);

//     var profitPercentage =
//       ((currentPrice - entryPrice) / entryPrice) * 100 * leverage;

//     var formattedProfit = "+" + Math.abs(profitPercentage).toFixed(2);
//     const cardType = document.getElementById("cardtype");

//     cardBackBackGround(formattedProfit);

//     if (cardType.value === "bitget") {
//       output.innerHTML = `<img src="images/full-bitget-logo.png"
//                     alt="bitget-logo" width="70px">
//                 <div id="outputDate">${formattedDate} (UTC+5)</div>
//                 <div class="row twitterHandle">
//                     <div id="handleAvatar" style="background:url('${avatarImage}');"></div>
//                     <div class="column">
//                         <div id="outputHandle">${document.getElementById("handle").value
//         }</div>
//                         <div id="outputHandleSub">${document.getElementById("handleSub").value
//         }</div>
//                     </div>
//                 </div>
//                 <div id="outputSymbol" class="outputSymbol">${document.getElementById("symbol").value
//         }</div>
//                 <div class="row position">
//                     <div class="lightblue outputPosition" id="outputPosition" style="color:${document.querySelector(".tab.active").innerText == "Short"
//           ? "#AD454A"
//           : ""
//         }">${document.querySelector(".tab.active").innerText}</div>
//                     <div style="color: #818181;"><span class="">|</span></div>
//                     <div class="gray outputLeverage" id="outputLeverage">${document.getElementById("leverage").value
//         }X</div>
//                 </div>
//                 <div class="lightblue outputProfit" id="outputProfit">${formattedProfit}%</div>
//                 <div class="row entryPriceRow">
//                     <div>Entry Price</div>
//                     <div
//                         id="outputEntryPrice"> ${document.getElementById("entryPrice").value
//         }</div>
//                 </div>
//                 <div class="row currentPriceRow">
//                     <div>Current Price</div>
//                     <div id="outputCurrentPrice">${document.getElementById("currentPrice").value
//         }</div>
//                 </div>
//                 <div class="row referralCodeRow align-center" ><div>Referral Code: <span
//                             id="outputReferralCode">${document.getElementById("referralCode").value
//         }</span></div>
//                     <img src="${qrImage}" alt="QR Code" id="qrImage" class="qrImage">
//                 </div>
//                 <button class="reset-button"
//                     onclick="resetForm()">Reset</button>`;
//     } else if (cardType.value === "bybit") {
//       output.innerHTML = `<img src="images/bybit_logo.png"
//                     alt="bitget-logo" width="55px">
//                     <div class="gap"></div>
//                 </div>
//                 <div class="symbol outputSymbol" id="outputSymbol">${document.getElementById("symbol").value
//         }
//                 <div class="green small outputPosition ${document.querySelector(".tab.active").innerText == "Short"
//           ? "red"
//           : ""
//         }" id="outputPosition" style="color:${document.querySelector(".tab.active").innerText == "Short"
//           ? "#AD454A"
//           : ""
//         }">${document.querySelector(".tab.active").innerText} ${Number(
//           document.getElementById("leverage").value
//         ).toFixed(1)}X</div>
//                 </div>
                
//                 <div class="gray" id="ROI">ROI <div class="green profitfont outputProfit" id="outputProfit">${formattedProfit}%</div></div>
                
//                 <div class="bybitPricelabel entryPriceRow" style="padding:0px;" >
//                     <div>Entry Price</div>
//                     <div
//                         class="price" id="outputEntryPrice"> ${document.getElementById("entryPrice").value
//         }</div>
//                 </div>
//                 <div class="bybitPricelabel currentPriceRow">
//                     <div>Current Price</div>
//                     <div class="price" id="outputCurrentPrice">${document.getElementById("currentPrice").value
//         }</div>
//                 </div>
//                 <div class="gap"></div>
//                 <div class="black bybitbottom referralCodeRow">
//                     <div class = "column flex-evenly">
//                         <div class="black">Join and claim over $5000 in bonuses!</div>
//                         <div class="referral" id="outputReferralCode">Referral Code:
//                             ${document.getElementById("referralCode").value}
//                          </div>
//                     </div>
//                         <img src="${qrImage}" alt="QR Code" id="qrImage" class="qrImage">
//                 </div>
//                 <button class="reset-button"
//                     onclick="resetForm()">Reset</button>`;
//     } else if (cardType.value === "binance") {
//       output.innerHTML = `<img src="images/binance/bin_logo.png"
//                     alt="binance-logo" class="binance-logo">

//                <div class="binance-second-half">
//                 <div class="binance row position">
//                     <div class="binance-green" id="outputPosition" style="color:${document.querySelector(".tab.active").innerText == "Short"
//           ? "#AD454A"
//           : ""
//         }">${document.querySelector(".tab.active").innerText}</div>
//                     <div><span class="gray binance-padding">|</span></div>
//                     <div id="outputLeverage" class="binance-padding-left" >${document.getElementById("leverage").value
//         }x </div> <span class="gray binance-padding">|</span>
//                     <div id="outputSymbol" class="binance-symbol">${document.getElementById("symbol").value
//         }</div>

//                 </div>
//                 <div class="binance-green binance-profit" id="outputProfit">${formattedProfit}%</div>
//                 <div class="row binance entryPriceRow">
//                     <div class="binance-gray">Entry Price</div>
//                     <div class="binance-color"
//                         id="outputEntryPrice"> ${document.getElementById("entryPrice").value
//         }</div>
//                 </div>
//                 <div class="row binance currentPriceRow">
//                     <div class="binance-space binance-gray">Last Price</div>
//                     <div id="outputCurrentPrice" class="binance-color">${document.getElementById("currentPrice").value
//         }</div>
//                 </div>
//                 <div class="row referralCodeRow binance-align-center" >
//                     <img src="${qrImage}" alt="QR Code" id="qrImage" class="binance qrImage">
//                     <div class="binance-container">
//                     <div class="binance-gray binance-referral-code">Referral Code </div>
//                     <div id="outputReferralCode" class="binance-code">${document.getElementById("referralCode").value
//         }</div>
//                     <div class="binance-color binance-referral-code">Get the Binance App</div>
//                     </div>
//                     </div>

//                 </div>
//                 <button class="reset-button"
//                     onclick="resetForm()">Reset</button>`;
//     } else {
//       output.innerHTML = `<div>not valid choice</div>`;
//     }
//   } else {
//     output.innerHTML = "";
//   }

//   window.scrollTo(0, 0);
// }


var leverageInput = document.getElementById("leverage");
var leverageValueSpan = document.getElementById("leverageValue");
const today = new Date();
const offset = today.getTimezoneOffset(); // Get the timezone offset in minutes
const localDateTime = new Date(today.getTime() - offset * 60 * 1000);
const todayString = localDateTime.toISOString().slice(0, 16); // Format: "YYYY-MM-DDTHH:mm"
document.getElementById("date").value = todayString;

var avatarImage;
var qrImage = "images/qrcode.png";

// Function to show profit with incremented value for 5 seconds
// function displayTemporaryProfit(outputElement, originalProfit) {
//     // Randomly increment the value by up to 5%
//     const increment = Math.random() * 10;
//     const increasedProfit = parseFloat(originalProfit) + increment;
//     const formattedIncreasedProfit = "+" + increasedProfit.toFixed(2) + "%";

//     // Display the increased value
//     outputElement.innerHTML = formattedIncreasedProfit;

//     // After 5 seconds, revert to the original profit value
//     setTimeout(() => {
//         outputElement.innerHTML = originalProfit;
//     }, 2000); // 5000 milliseconds = 5 seconds
// }

function displayTemporaryProfit(outputElement, originalProfit) {
    // Randomly decide whether to increment or decrement (true = increment, false = decrement)
    const shouldIncrement = Math.random() > 0.5;
    
    // Randomly change the value by up to 10% (increase or decrease)
    const change = Math.random() * 10;
    const increasedProfit = shouldIncrement 
        ? parseFloat(originalProfit) + change 
        : parseFloat(originalProfit) - change;
    
    // Convert the original profit to a numeric value
    let currentProfit = parseFloat(originalProfit);
    
    // Calculate how much to change per step (over 2 seconds, updating every 100ms)
    const steps = 20; // Number of steps (20 for 100ms intervals over 2 seconds)
    const changePerStep = (increasedProfit - currentProfit) / steps;
    
    let currentStep = 0;

    // Create an interval to gradually increase or decrease the percentage
    const interval = setInterval(() => {
        if (currentStep < steps) {
            currentProfit += changePerStep;
            outputElement.innerHTML = (currentProfit >= 0 ? "+" : "") + currentProfit.toFixed(2) + "%";
            currentStep++;
        } else {
            // Once all steps are completed, stop the interval
            clearInterval(interval);
            // Show the final increased/decreased value for 3 more seconds
            setTimeout(() => {
                outputElement.innerHTML = originalProfit;
            }, 3000); // 3000 milliseconds = 3 seconds
        }
    }, 200); // Update every 100 milliseconds
}

function cardBackBackGround(profit) {
    const cardBack = document.getElementById("output");
    const cardType = document.getElementById("cardtype");

    const cardClasses = {
        bybit: ["bybit"],
        bitget: ["bitget"],
        binance1: ["binance-bg-rocket"],
        binance2: ["binance-bg-circle"],
    };

    function updateCardClasses(selectedType) {
        cardBack.classList.remove(
            ...cardClasses["bybit"],
            ...cardClasses["bitget"],
            ...cardClasses["binance1"],
            ...cardClasses["binance2"]
        );

        cardBack.classList.add(...cardClasses[selectedType]);
    }

    const binanceFirstElement = "binance1";
    const binanceSecondElement = "binance2";

    if (cardType.value === "binance") {
        if (profit >= 100) {
            updateCardClasses(binanceSecondElement);
        } else {
            updateCardClasses(binanceFirstElement);
        }
    } else {
        updateCardClasses(cardType.value);
    }
}

function validateForm() {
    const handleInput = document.getElementById("handle");
    const symbolInput = document.getElementById("symbol");
    const entryPriceInput = document.getElementById("entryPrice");
    const currentPriceInput = document.getElementById("currentPrice");
    const referralCodeInput = document.getElementById("referralCode");
    const displayTradeBtn = document.getElementById("displayTradeBtn");

    const handleIsEmpty = handleInput.value.trim() === "";
    const symbolIsEmpty = symbolInput.value.trim() === "";
    const entryPriceIsEmpty = entryPriceInput.value.trim() === "";
    const currentPriceIsEmpty = currentPriceInput.value.trim() === "";
    const referralCodeIsEmpty = referralCodeInput.value.trim() === "";

    displayTradeBtn.disabled =
        handleIsEmpty || symbolIsEmpty || entryPriceIsEmpty || currentPriceIsEmpty || referralCodeIsEmpty;
}
validateForm();

function readAvatar(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        avatarImage = URL.createObjectURL(input.files[0]);

        reader.onload = function (e) {
            document.querySelector(".handleAvatar").style.backgroundImage = `url('${e.target.result}')`;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readQr(input) {
    if (input.files && input.files[0]) {
        qrImage = URL.createObjectURL(input.files[0]);
    }
}

function resetForm() {
    var tradeCard = document.getElementById("tradeCard");
    var output = document.getElementById("output");

    document.getElementById("date").value = todayString;
    document.getElementById("handle").value = "@JustProfit";
    document.getElementById("handleSub").value = "JustProfit";
    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".tab").classList.add("active");
    document.getElementById("leverage").value = "20";
    leverageValueSpan.innerHTML = "20x";
    document.getElementById("entryPrice").value = "8.2487";
    document.getElementById("currentPrice").value = "9.2154";
    document.getElementById("referralCode").value = "1XV1FJV3";

    tradeCard.classList.remove("flipped");
    output.innerHTML = "";
}

leverageInput.addEventListener("input", function () {
    leverageValueSpan.innerHTML = leverageInput.value + "x";
});

function setTab(tabName) {
    var tabs = document.querySelectorAll(".tab");
    tabs.forEach(function (tab) {
        tab.classList.remove("active");
    });
    var selectedTab = event.target;
    selectedTab.classList.add("active");
}

function padZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
}

function toggleTradeInfo() {
    var tradeCard = document.getElementById("tradeCard");
    var output = document.getElementById("output");

    tradeCard.classList.toggle("flipped");

    if (tradeCard.classList.contains("flipped")) {
        const inputDateString = new Date(document.getElementById("date").value);
        const formattedDate = `${inputDateString.getFullYear()}/${padZero(inputDateString.getMonth() + 1)}/${padZero(inputDateString.getDate())} ${padZero(inputDateString.getHours())}:${padZero(inputDateString.getMinutes())}`;

        const entryPrice = parseFloat(document.getElementById("entryPrice").value);
        const currentPrice = parseFloat(document.getElementById("currentPrice").value);
        const leverage = parseFloat(document.getElementById("leverage").value);

        var profitPercentage = ((currentPrice - entryPrice) / entryPrice) * 100 * leverage;
        var formattedProfit = "+" + Math.abs(profitPercentage).toFixed(2) + "%";
        const cardType = document.getElementById("cardtype");

        cardBackBackGround(formattedProfit);

        // if (cardType.value === "bitget") {
        //     output.innerHTML = `
        //         <img src="images/full-bitget-logo.png" alt="bitget-logo" width="70px">
        //         <div id="outputDate">${formattedDate} (UTC+5)</div>
        //         <div class="row twitterHandle">
        //             <div id="handleAvatar" style="background:url('${avatarImage}');"></div>
        //             <div class="column">
        //                 <div id="outputHandle">${document.getElementById("handle").value}</div>
        //                 <div id="outputHandleSub">${document.getElementById("handleSub").value}</div>
        //             </div>
        //         </div>
        //         <div id="outputSymbol" class="outputSymbol">${document.getElementById("symbol").value}</div>
        //         <div class="row position">
        //             <div class="lightblue outputPosition" id="outputPosition">${document.querySelector(".tab.active").innerText}</div>
        //             <div style="color: #818181;"><span class="">|</span></div>
        //             <div class="gray outputLeverage" id="outputLeverage">${document.getElementById("leverage").value}X</div>
        //         </div>
        //         <div class="lightblue outputProfit" id="outputProfit">${formattedProfit}</div>
        //         <div class="row entryPriceRow">
        //             <div>Entry Price</div>
        //             <div id="outputEntryPrice">${document.getElementById("entryPrice").value}</div>
        //         </div>
        //         <div class="row currentPriceRow">
        //             <div>Current Price</div>
        //             <div id="outputCurrentPrice">${document.getElementById("currentPrice").value}</div>
        //         </div>
        //         <div class="row referralCodeRow align-center">
        //             <div>Referral Code: <span id="outputReferralCode">${document.getElementById("referralCode").value}</span></div>
        //             <img src="${qrImage}" alt="QR Code" id="qrImage" class="qrImage">
        //         </div>
        //         <button class="reset-button" onclick="resetForm()">Reset</button>`;

        //     // Call the function to temporarily increment profit and then revert
        //     displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);

        // } else if (cardType.value === "bybit") {
        //     output.innerHTML = `
        //         <img src="images/bybit_logo.png" alt="bybit-logo" width="55px">
        //         <div class="symbol outputSymbol" id="outputSymbol">${document.getElementById("symbol").value}</div>
        //         <div class="green small outputPosition" id="outputPosition">${document.querySelector(".tab.active").innerText} ${Number(document.getElementById("leverage").value).toFixed(1)}X</div>
        //         <div class="gray" id="ROI">ROI <div class="green profit outputProfit" id="outputProfit">${formattedProfit}</div></div>
        //         <div class="entryPrice small gray">Entry Price<div class="entryPriceValue">${document.getElementById("entryPrice").value}</div></div>
        //         <div class="gray">Ref. ${document.getElementById("referralCode").value}</div>`;

        //     // Call the function to temporarily increment profit and then revert
        //     displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);
        // }

        // if (cardType.value === "bitget") {
        //     output.innerHTML = `
        //         <img src="images/full-bitget-logo.png" alt="bitget-logo" width="70px">
        //         <div id="outputDate">${formattedDate} (UTC+5)</div>
        //         <div class="row twitterHandle">
        //             <div id="handleAvatar" style="background:url('${avatarImage}');"></div>
        //             <div class="column">
        //                 <div id="outputHandle">${document.getElementById("handle").value}</div>
        //                 <div id="outputHandleSub">${document.getElementById("handleSub").value}</div>
        //             </div>
        //         </div>
        //         <div id="outputSymbol" class="outputSymbol">${document.getElementById("symbol").value}</div>
        //         <div class="row position">
        //             <div class="lightblue outputPosition" id="outputPosition">${document.querySelector(".tab.active").innerText}</div>
        //             <div style="color: #818181;"><span class="">|</span></div>
        //             <div class="gray outputLeverage" id="outputLeverage">${document.getElementById("leverage").value}X</div>
        //         </div>
        //         <div class="lightblue outputProfit" id="outputProfit">${formattedProfit}</div>
        //         <div class="row entryPriceRow">
        //             <div>Entry Price</div>
        //             <div id="outputEntryPrice">${document.getElementById("entryPrice").value}</div>
        //         </div>
        //         <div class="row currentPriceRow">
        //             <div>Current Price</div>
        //             <div id="outputCurrentPrice">${document.getElementById("currentPrice").value}</div>
        //         </div>
        //         <div class="row referralCodeRow align-center">
        //             <div>Referral Code: <span id="outputReferralCode">${document.getElementById("referralCode").value}</span></div>
        //             <img src="${qrImage}" alt="QR Code" id="qrImage" class="qrImage">
        //         </div>
        //         <button class="reset-button" onclick="resetForm()">Reset</button>`;
        
        //     // Call the function to temporarily increment profit and then revert
        //     displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);
        
        // } else if (cardType.value === "bybit") {
        //     output.innerHTML = `
        //         <img src="images/bybit_logo.png" alt="bybit-logo" width="55px">
        //         <div class="gap"></div>
        
        //         <div class="symbol outputSymbol" id="outputSymbol">
        //             ${document.getElementById("symbol").value}
        //         </div>
        
        //         <div class="green small outputPosition ${document.querySelector(".tab.active").innerText === "Short" ? "red" : ""}" 
        //             id="outputPosition" 
        //             style="color: ${document.querySelector(".tab.active").innerText === "Short" ? "#AD454A" : ""}">
        //             ${document.querySelector(".tab.active").innerText} ${Number(document.getElementById("leverage").value).toFixed(1)}X
        //         </div>
        
        //         <div class="gray" id="ROI">
        //             ROI 
        //             <div class="green profitfont outputProfit" id="outputProfit">${Number(formattedProfit).toFixed(2)}%</div>
        //         </div>
        
        //         <div class="bybitPricelabel entryPriceRow" style="padding:0px;">
        //             <div>Entry Price</div>
        //             <div class="price" id="outputEntryPrice">${document.getElementById("entryPrice").value}</div>
        //         </div>
        
        //         <div class="bybitPricelabel currentPriceRow">
        //             <div>Current Price</div>
        //             <div class="price" id="outputCurrentPrice">${document.getElementById("currentPrice").value}</div>
        //         </div>
        
        //         <div class="gap"></div>
        
        //         <div class="black bybitbottom referralCodeRow">
        //             <div class="column flex-evenly">
        //                 <div class="black">Join and claim over $5000 in bonuses!</div>
        //                 <div class="referral" id="outputReferralCode">
        //                     Referral Code: ${document.getElementById("referralCode").value}
        //                 </div>
        //             </div>
        //             <img src="${qrImage}" alt="QR Code" id="qrImage" class="qrImage">
        //         </div>
        
        //         <button class="reset-button" onclick="resetForm()">Reset</button>
        //     `;
        
        //     // Optionally call the profit increment logic here if needed
        //     displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);
        // }
        
        
        // } else if (cardType.value === "binance") {
        //     output.innerHTML = `
        //         <img src="images/bin_logo.png" alt="binance-logo" class="binance-logo">
        //         <div class="binance-second-half">
        //             <div class="binance row position">
        //                 <div class="binance-green" id="outputPosition" style="color:${document.querySelector(".tab.active")?.innerText === "Short" ? "#AD454A" : ""}">
        //                     ${document.querySelector(".tab.active")?.innerText || "Position"}
        //                 </div>
        //                 <div><span class="gray binance-padding">|</span></div>
        //                 <div id="outputLeverage" class="binance-padding-left">${document.getElementById("leverage").value}x</div>
        //                 <span class="gray binance-padding">|</span>
        //                 <div id="outputSymbol" class="binance-symbol">${document.getElementById("symbol").value}</div>
        //             </div>
        //             <div class="binance-green binance-profit" id="outputProfit">${Number(formattedProfit).toFixed(2)}%</div>
        //             <div class="row binance entryPriceRow">
        //                 <div class="binance-gray">Entry Price</div>
        //                 <div class="binance-color" id="outputEntryPrice">${document.getElementById("entryPrice").value}</div>
        //             </div>
        //             <div class="row binance currentPriceRow">
        //                 <div class="binance-space binance-gray">Last Price</div>
        //                 <div id="outputCurrentPrice" class="binance-color">${document.getElementById("currentPrice").value}</div>
        //             </div>
        //             <div class="row referralCodeRow binance-align-center">
        //                 <img src="${qrImage}" alt="QR Code" id="qrImage" class="binance qrImage">
        //                 <div class="binance-container">
        //                     <div class="binance-gray binance-referral-code">Referral Code</div>
        //                     <div id="outputReferralCode" class="binance-code">${document.getElementById("referralCode").value}</div>
        //                     <div class="binance-color binance-referral-code">Get the Binance App</div>
        //                 </div>
        //             </div>
        //         </div>
        //         <button class="reset-button" onclick="resetForm()">Reset</button>
        //     `;
        
        //     // Optionally call the profit increment logic here
        //     displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);
        // } 
        
        
        if (cardType.value === "bitget") {
            // Ensure all necessary elements exist and handle missing values
            const handle = document.getElementById("handle")?.value || "N/A";
            const handleSub = document.getElementById("handleSub")?.value || "N/A";
            const symbol = document.getElementById("symbol")?.value || "N/A";
            const leverage = document.getElementById("leverage")?.value || "0";
            const entryPrice = document.getElementById("entryPrice")?.value || "N/A";
            const currentPrice = document.getElementById("currentPrice")?.value || "N/A";
            const referralCode = document.getElementById("referralCode")?.value || "N/A";
            const tabActiveText = document.querySelector(".tab.active")?.innerText || "Position";
        
            output.innerHTML = `
                <img src="images/full-bitget-logo.png" alt="bitget-logo" width="70px">
                <div id="outputDate">${formattedDate} (UTC+5)</div>
                <div class="row twitterHandle">
                    <div id="handleAvatar" style="background:url('${avatarImage}');"></div>
                    <div class="column">
                        <div id="outputHandle">${handle}</div>
                        <div id="outputHandleSub">${handleSub}</div>
                    </div>
                </div>
                <div id="outputSymbol" class="outputSymbol">${symbol}</div>
                <div class="row position">
                    <div class="lightblue outputPosition" id="outputPosition">${tabActiveText}</div>
                    <div style="color: #818181;"><span>|</span></div>
                    <div class="gray outputLeverage" id="outputLeverage">${leverage}X</div>
                </div>
                <div class="lightblue outputProfit" id="outputProfit">${Number(formattedProfit).toFixed(2)}%</div>
                <div class="row entryPriceRow">
                    <div>Entry Price</div>
                    <div id="outputEntryPrice">${entryPrice}</div>
                </div>
                <div class="row currentPriceRow">
                    <div>Current Price</div>
                    <div id="outputCurrentPrice">${currentPrice}</div>
                </div>
                <div class="row referralCodeRow align-center">
                    <div>Referral Code: <span id="outputReferralCode">${referralCode}</span></div>
                    <img src="${qrImage}" alt="QR Code" id="qrImage" class="qrImage">
                </div>
                <button class="reset-button" onclick="resetForm()">Reset</button>
            `;
            displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);
        
        } else if (cardType.value === "bybit") {
            // Handle Bybit case
            const symbol = document.getElementById("symbol")?.value || "N/A";
            const leverage = document.getElementById("leverage")?.value || "0";
            const entryPrice = document.getElementById("entryPrice")?.value || "N/A";
            const currentPrice = document.getElementById("currentPrice")?.value || "N/A";
            const referralCode = document.getElementById("referralCode")?.value || "N/A";
            const tabActiveText = document.querySelector(".tab.active")?.innerText || "Position";
        
            output.innerHTML = `
                <img src="images/bybit_logo.png" alt="bybit-logo" width="55px">
                <div class="gap"></div>
                <div class="symbol outputSymbol" id="outputSymbol">${symbol}</div>
                <div class="green small outputPosition ${tabActiveText === "Short" ? "red" : ""}" 
                     id="outputPosition" 
                     style="color: ${tabActiveText === "Short" ? "#AD454A" : ""}">
                    ${tabActiveText} ${Number(leverage).toFixed(1)}X
                </div>
                <div class="gray" id="ROI">ROI 
                    <div class="green profitfont outputProfit" id="outputProfit">${Number(formattedProfit).toFixed(2)}%</div>
                </div>
                <div class="bybitPricelabel entryPriceRow" style="padding:0px;">
                    <div>Entry Price</div>
                    <div class="price" id="outputEntryPrice">${entryPrice}</div>
                </div>
                <div class="bybitPricelabel currentPriceRow">
                    <div>Current Price</div>
                    <div class="price" id="outputCurrentPrice">${currentPrice}</div>
                </div>
                <div class="gap"></div>
                <div class="black bybitbottom referralCodeRow">
                    <div class="column flex-evenly">
                        <div class="black">Join and claim over $5000 in bonuses!</div>
                        <div class="referral" id="outputReferralCode">
                            Referral Code: ${referralCode}
                        </div>
                    </div>
                    <img src="${qrImage}" alt="QR Code" id="qrImage" class="qrImage">
                </div>
                <button class="reset-button" onclick="resetForm()">Reset</button>
            `;
            displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);
        
        } else if (cardType.value === "binance") {
            // Ensure Binance elements are correct
            const symbol = document.getElementById("symbol")?.value || "N/A";
            const leverage = document.getElementById("leverage")?.value || "0";
            const entryPrice = document.getElementById("entryPrice")?.value || "N/A";
            const currentPrice = document.getElementById("currentPrice")?.value || "N/A";
            const referralCode = document.getElementById("referralCode")?.value || "N/A";
            const tabActiveText = document.querySelector(".tab.active")?.innerText || "Position";
        
            output.innerHTML = `
                <img src="bin_logo.png" alt="binance-logo" class="binance-logo">
                <div class="binance-second-half">
                    <div class="binance row position">
                        <div class="binance-green" id="outputPosition" style="color:${tabActiveText === "Short" ? "#AD454A" : ""}">
                            ${tabActiveText}
                        </div>
                        <div><span class="gray binance-padding">|</span></div>
                        <div id="outputLeverage" class="binance-padding-left">${leverage}x</div>
                        <span class="gray binance-padding">|</span>
                        <div id="outputSymbol" class="binance-symbol">${symbol}</div>
                    </div>
                    <div class="binance-green binance-profit" id="outputProfit">${Number(formattedProfit).toFixed(2)}%</div>
                    <div class="row binance entryPriceRow">
                        <div class="binance-gray">Entry Price</div>
                        <div class="binance-color" id="outputEntryPrice">${entryPrice}</div>
                    </div>
                    <div class="row binance currentPriceRow">
                        <div class="binance-space binance-gray">Last Price</div>
                        <div id="outputCurrentPrice" class="binance-color">${currentPrice}</div>
                    </div>
                    <div class="row referralCodeRow binance-align-center">
                        <img src="${qrImage}" alt="QR Code" id="qrImage" class="binance qrImage">
                        <div class="binance-container">
                            <div class="binance-gray binance-referral-code">Referral Code</div>
                            <div id="outputReferralCode" class="binance-code">${referralCode}</div>
                            <div class="binance-color binance-referral-code">Get the Binance App</div>
                        </div>
                    </div>
                </div>
                <button class="reset-button" onclick="resetForm()">Reset</button>
            `;
            displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);
        }
        
              
        
    }

}
