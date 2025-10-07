function add(number1, number2) {
    return number1 + number2
}

function subtract(number, number2) {
    return number - number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    if (number2 === 0) {
        return new Error("Zero Devision Error")
    } else {
        return number1 / number2
    }
}

document.getElementById('add').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0
    const number2 = parseFloat(document.getElementById("number2").value) || 0
    const result = add(number1, number2);

    document.getElementById('calculation-result').textContent = result;
})


document.getElementById("subtract").addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const result = subtract(number1, number2);

    document.getElementById("calculation-result").textContent = result;
})

document.getElementById("multiply").addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const result = multiply(number1, number2);

    document.getElementById("calculation-result").textContent = result;
})

document.getElementById("divide").addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const result = divide(number1, number2);
    if (isNaN(result)) {
        document.getElementById("calculation-result").style.color = "red";
        document.getElementById("calculation-result").textContent = result;
        return;
    }
    else {
        document.getElementById("calculation-result").style.color = "green";
        document.getElementById("calculation-result").textContent = result;
    }

})