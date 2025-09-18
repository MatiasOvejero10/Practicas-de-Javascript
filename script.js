const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let current = '';
let operator = '';
let operand = '';

function updateDisplay(value) {
    display.textContent = value;
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-value');
        if (btn.id === 'clear') {
            current = '';
            operator = '';
            operand = '';
            updateDisplay('0');
        } else if (btn.id === 'equals') {
            if (operator && operand !== '') {
                try {
                    const result = eval(current);
                    updateDisplay(result);
                    current = result.toString();
                    operator = '';
                    operand = '';
                } catch {
                    updateDisplay('Error');
                }
            }
        } else {
            current += val;
            updateDisplay(current);
            if ('+-*/'.includes(val)) {
                operator = val;
                operand = '';
            } else if (operator) {
                operand += val;
            }
        }
    });
});