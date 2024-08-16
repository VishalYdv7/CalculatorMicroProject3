function appendToDisplay(value) {
    let display = document.getElementById('display');
    // if the value is already zero or zero because of reset it replaces the starting zero
    if (display.value === '0' && !isNaN(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

// reset value to zero
function resetDisplay() {
    document.getElementById('display').value = '0';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        // Replace any '×' with '*' before evaluating
        let expression = display.value.replace(/×/g, '*');
        // console.log(expression);

        // Replace leading zeros before digits
        expression = expression.replace(/(^|[\s\+\-\*\/])0+([0-9])/g, '$1$2');

        // Evaluate the expression
        let result = eval(expression);

        // Round the result to 3 decimal places
        display.value = Math.round(result * 1000) / 1000;
    } catch {
        display.value = 'Error';
    }
}



function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}