// JavaScript for calculator functionality
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    const value = parseFloat(document.getElementById('display').value);
    const result = Math.sqrt(value);
    document.getElementById('display').value = result;
}

function calculateLogarithm() {
    const value = parseFloat(document.getElementById('display').value);
    const result = Math.log10(value);
    document.getElementById('display').value = result;
}

function calculateSin() {
    const value = parseFloat(document.getElementById('display').value);
    const radians = (value * Math.PI) / 180;
    const result = Math.sin(radians);
    document.getElementById('display').value = result;
}

function calculateCos() {
    const value = parseFloat(document.getElementById('display').value);
    const radians = (value * Math.PI) / 180;
    const result = Math.cos(radians);
    document.getElementById('display').value = result;
}