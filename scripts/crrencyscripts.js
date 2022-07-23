function convertCurrency(){
    var fromCurrency = document.getElementById("fromCurrencyList");
    var currencyChosen = fromCurrency.options[fromCurrency.selectedIndex].text;
    

    var toCurrency = document.getElementById("toCurrencyList");
    var currencyConverted = toCurrency.options[toCurrency.selectedIndex].text;
    

    var convertedValue = 0;

    var enteredAmount = document.getElementById("fromAmount").value;
    var conversionRatio = 0;

    var currencyUnit = "";

    if(currencyChosen == "Euro" && currencyConverted == "Euro"){
        convertedValue = enteredAmount * 1;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "EUR";
    }
    else if(currencyChosen == "Euro" && currencyConverted == "US Dollar"){
        convertedValue = enteredAmount * 1.16;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "USD";
    }
    else if(currencyChosen == "Euro" && currencyConverted == "Canadian Dollar"){
        convertedValue = enteredAmount * 1.43;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "CAD";
    }
    else if(currencyChosen == "Euro" && currencyConverted == "Bitcoin Digital Currency"){
        convertedValue = enteredAmount * 0.000019;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "BTC";
    }
    else if(currencyChosen == "Euro" && currencyConverted == "Ethereum Digital Currency"){
        convertedValue = enteredAmount * 0.0003;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "ETH";
    }
    else if(currencyChosen == "US Dollar" && currencyConverted == "Euro"){
        convertedValue = enteredAmount * 0.86;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "EUR";
    }
    else if(currencyChosen == "US Dollar" && currencyConverted == "US Dollar"){
        convertedValue = enteredAmount * 1;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "USD";
    }
    else if(currencyChosen == "US Dollar" && currencyConverted == "Canadian Dollar"){
        convertedValue = enteredAmount * 1.24;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "CAD";
    }
    else if(currencyChosen == "US Dollar" && currencyConverted == "Bitcoin Digital Currency"){
        convertedValue = enteredAmount * 0.000016;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "BTC";
    }
    else if(currencyChosen == "US Dollar" && currencyConverted == "Ethereum Digital Currency"){
        convertedValue = enteredAmount * 0.0002;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "ETH";
    }
    else if(currencyChosen == "Canadian Dollar" && currencyConverted == "Euro"){
        convertedValue = enteredAmount * 0.7;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "EUR";
    }
    else if(currencyChosen == "Canadian Dollar" && currencyConverted == "US Dollar"){
        convertedValue = enteredAmount * 0.81;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "USD";
    }
    else if(currencyChosen == "Canadian Dollar" && currencyConverted == "Canadian Dollar"){
        convertedValue = enteredAmount * 1;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "CAD";
    }
    else if(currencyChosen == "Canadian Dollar" && currencyConverted == "Bitcoin Digital Currency"){
        convertedValue = enteredAmount * 0.000013;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "BTC";
    }
    else if(currencyChosen == "Canadian Dollar" && currencyConverted == "Ethereum Digital Currency"){
        convertedValue = enteredAmount * 0.0002;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "ETH";
    }
    else if(currencyChosen == "Bitcoin Digital Currency" && currencyConverted == "Euro"){
        convertedValue = enteredAmount * 53949.96;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "EUR";
    }
    else if(currencyChosen == "Bitcoin Digital Currency" && currencyConverted == "US Dollar"){
        convertedValue = enteredAmount * 62382.37;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "USD";
    }
    else if(currencyChosen == "Bitcoin Digital Currency" && currencyConverted == "Canadian Dollar"){
        convertedValue = enteredAmount * 77280.84;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "CAD";
    }
    else if(currencyChosen == "Bitcoin Digital Currency" && currencyConverted == "Bitcoin Digital Currency"){
        convertedValue = enteredAmount * 1;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "BTC";
    }
    else if(currencyChosen == "Bitcoin Digital Currency" && currencyConverted == "Ethereum Digital Currency"){
        convertedValue = enteredAmount * 14.15;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "ETH";
    }
    else if(currencyChosen == "Ethereum Digital Currency" && currencyConverted == "Euro"){
        convertedValue = enteredAmount * 3811.6;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "EUR";
    }
    else if(currencyChosen == "Ethereum Digital Currency" && currencyConverted == "US Dollar"){
        convertedValue = enteredAmount * 4407.35;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "USD";
    }
    else if(currencyChosen == "Ethereum Digital Currency" && currencyConverted == "Canadian Dollar"){
        convertedValue = enteredAmount * 5459.94;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "CAD";
    }
    else if(currencyChosen == "Ethereum Digital Currency" && currencyConverted == "Bitcoin Digital Currency"){
        convertedValue = enteredAmount * 0.07;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "BTC";
    }
    else if(currencyChosen == "Ethereum Digital Currency" && currencyConverted == "Ethereum Digital Currency"){
        convertedValue = enteredAmount * 1;
        conversionRatio = convertedValue / enteredAmount;
        convertedValue = convertedValue.toFixed(2);
        currencyUnit = "ETH";
    }

    var conversionValue= "<div>";
    conversionValue += convertedValue + currencyUnit + " (" + conversionRatio + ":" +"1)";
    conversionValue += "</div>";
    
    
    document.getElementById('conversionValue').innerHTML = conversionValue;
    
}

