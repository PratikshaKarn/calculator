function clearDisplay() {
    document.getElementById('display').value = '';
}

function AllClear() {
    document.getElementById('display').value = '';
}

function Multiply() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}