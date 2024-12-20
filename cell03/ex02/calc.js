$(document).ready(function () {
    $('#calculateBtn').on('click', function () {
        const operand1 = parseFloat($('#operand1').val());
        const operand2 = parseFloat($('#operand2').val());
        const operator = $('#operator').val();
        let result;

        // Input validation
        if (isNaN(operand1) || isNaN(operand2)) {
            $('#result').text('Please enter valid numbers.');
            return;
        }

        // Perform calculation based on the operator
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand2 !== 0 ? operand1 / operand2 : 'It’s over 9000!';
                break;
            case '%':
                result = operand2 !== 0 ? operand1 % operand2 : 'It’s over 9000!';
                break;
            default:
                result = 'Invalid operator';
        }

        $('#result').text(`Result: ${result}`);
    });
});
