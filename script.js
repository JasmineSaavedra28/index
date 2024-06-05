function appendNumber(number) {
    document.getElementById('display').innerText += number;
}

function appendOperator(operator) {
    document.getElementById('display').innerText += operator;
}

function calculate() {
    var input = document.getElementById('display').innerText;
    var result = eval(input);
    document.getElementById('display').innerText = result;
}

document.getElementById('btn-7').addEventListener('click', function() {
    appendNumber('7');
});

document.getElementById('btn-7').addEventListener('click', function() {
    appendNumber('7');
});

document.getElementById('btn-8').addEventListener('click', function() {
    appendNumber('8');
});

document.getElementById('btn-9').addEventListener('click', function() {
    appendNumber('9');
});

document.getElementById('btn-div').addEventListener('click', function() {
    appendOperator('/');
});

document.getElementById('btn-4').addEventListener('click', function() {
    appendNumber('4');
});

document.getElementById('btn-5').addEventListener('click', function() {
    appendNumber('5');
});

document.getElementById('btn-6').addEventListener('click', function() {
    appendNumber('6');
});

document.getElementById('btn-mult').addEventListener('click', function() {
    appendOperator('*');
});

document.getElementById('btn-1').addEventListener('click', function() {
    appendNumber('1');
});

document.getElementById('btn-2').addEventListener('click', function() {
    appendNumber('2');
});

document.getElementById('btn-3').addEventListener('click', function() {
    appendNumber('3');
});

document.getElementById('btn-sub').addEventListener('click', function() {
    appendOperator('-');
});

document.getElementById('btn-0').addEventListener('click', function() {
    appendNumber('0');
});

document.getElementById('btn-dot').addEventListener('click', function() {
    appendNumber('.');
});

document.getElementById('btn-equal').addEventListener('click', function() {
    calculate();
});

document.getElementById('btn-add').addEventListener('click', function() {
    appendOperator('+');
});

document.getElementById('btn-clear').addEventListener('click', function() {
    document.getElementById('display').innerText = '0';
});
