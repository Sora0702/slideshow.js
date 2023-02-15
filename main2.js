
let result = document.getElementById("result");
let isCalc = false;

function displayNumber(val) {
    if (isCalc) {
        result.value = "0";
        isCalc = false;
    }

    if (result.value == "0" && val == "0") {
        result.value = "0";
    } else if (result.value == "0" && val == "00") {
        result.value = "0";
    } else if (result.value == "0" && val == ".") {
        result.value = "0.";
    } else if (isOpeLast() && val == ".") {
        result.value += "0.";
    } else if (isDotLast() && val == ".") {
        result.value;
    } else if (result.value == "0") {
        result.value = val;
    } else {
        result.value += val;
    }
}

function isOpeLast() {
   return ["+", "-", "*", "/"].includes(result.value.toString().slice(-1));
}

function isDotLast() {
    return ["."].includes(result.value.toString().slice(-1));
}

function displayOperator(ope) {
    if (isCalc) {
        isCalc = false;
        result.value += ope; 
    }
    
    if (isOpeLast()) {
        result.value = result.value.slice(0, -1) + ope;
    } else if (isDotLast()) {
        result.value;
    } else {
        result.value += ope;
    }
}

function equal() {
    if (isOpeLast() || isDotLast()) {
        result.value = result.value.slice(0, -1);
    }
    let num = new Function("return " + result.value)();
    if (Number.isNaN(num)) {
        result.value = "error";
    } else {
        result.value = num;
    }
    
    isCalc = true;
}

function allClear() {
    result.value = "0";
    isCalc = false;
}