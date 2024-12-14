var leverageInput = document.getElementById("leverage");
var leverageValueSpan = document.getElementById("leverageValue");
const today = new Date();
const offset = today.getTimezoneOffset(); // Get the timezone offset in minutes
const localDateTime = new Date(today.getTime() - offset * 60 * 1000);
const todayString = localDateTime.toISOString().slice(0, 16); // Format: "YYYY-MM-DDTHH:mm"
document.getElementById("date").value = todayString;

var avatarImage;
var qrImage = "images/qrcode.png";

function displayTemporaryProfit(outputElement, originalProfit) {
    // Randomly decide whether to increment or decrement (true = increment, false = decrement)
    const shouldIncrement = Math.random() > 0.5;
    
    // Randomly change the value by up to 10% (increase or decrease)
    const change = Math.random() * 10;
    const increasedProfit = shouldIncrement 
        ? parseFloat(originalProfit) + change 
        : parseFloat(originalProfit) - change;
    
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

        const formData = {
            handle: document.getElementById("handle")?.value || "N/A",
            handleSub: document.getElementById("handleSub")?.value || "N/A",
            symbol: document.getElementById("symbol")?.value || "N/A",
            leverage: document.getElementById("leverage")?.value || "0",
            entryPrice: document.getElementById("entryPrice")?.value || "N/A",
            currentPrice: document.getElementById("currentPrice")?.value || "N/A",
            referralCode: document.getElementById("referralCode")?.value || "N/A",
            tabActiveText: document.querySelector(".tab.active")?.innerText || "Position",
        };

        const cardContent = {
            "bitget": `
                <img src="images/full-bitget-logo.png" alt="bitget-logo" width="70px">
                <div id="outputDate">${formattedDate} (UTC+5)</div>
                <div class="row twitterHandle">
                    <div id="handleAvatar" style="background:url('${avatarImage}');"></div>
                    <div class="column">
                        <div id="outputHandle">${formData.handle}</div>
                        <div id="outputHandleSub">${formData.handleSub}</div>
                    </div>
                </div>
                <div id="outputSymbol" class="outputSymbol">${formData.symbol}</div>
                <div class="row position">
                    <div class="lightblue outputPosition" id="outputPosition">${formData.tabActiveText}</div>
                    <div style="color: #818181;"><span>|</span></div>
                    <div class="gray outputLeverage" id="outputLeverage">${formData.leverage}X</div>
                </div>
                <div class="lightblue outputProfit" id="outputProfit">${Number(formattedProfit).toFixed(2)}%</div>
                <div class="row entryPriceRow">
                    <div>Entry Price</div>
                    <div id="outputEntryPrice">${formData.entryPrice}</div>
                </div>
                <div class="row currentPriceRow">
                    <div>Current Price</div>
                    <div id="outputCurrentPrice">${formData.currentPrice}</div>
                </div>
                <div class="row referralCodeRow align-center">
                    <div>Referral Code: <span id="outputReferralCode">${formData.referralCode}</span></div>
                    <img src="${qrImage}" alt="QR Code" id="qrImage" class="qrImage">
                </div>
                <button class="reset-button" onclick="resetForm()">Reset</button>
            `,
            // Add other card types like 'bybit' and 'binance' here similarly
        };

        output.innerHTML = cardContent[cardType.value] || "";
        displayTemporaryProfit(document.getElementById("outputProfit"), formattedProfit);
    }
}
