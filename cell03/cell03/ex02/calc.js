// Perform calculation
function calculate() {
    const operand1 = document.getElementById('operand1').value;
    const operator = document.getElementById('operator').value;
    const operand2 = document.getElementById('operand2').value;

    // Validate inputs
    if (operand1 === '' || operand2 === '' || operand1 < 0 || operand2 < 0) {
        alert('Error :(');
        return;
    }

    const num1 = parseInt(operand1);
    const num2 = parseInt(operand2);
    let result;

    if ((operator === '/' || operator === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            alert('Invalid operator');
            return;
    }

    alert(`Result: ${result}`);
    console.log(`Result: ${result}`);
}

// Reminder alert every 30 seconds
setInterval(() => {
    alert('Please, use me...');
}, 30000);
