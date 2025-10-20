function logotoScreen(text) {
    const output = document.getElementById('output');
    output.textContent += text + '\n';
}

function logotoScreen2(text) {
    const output = document.getElementById('output2');
    output.textContent += text + '\n';
}

function logotoScreen3(text) {
    const output = document.getElementById('output3');
    output.textContent += text + '\n';
}

 function limpiarconsola (){
    document.getElementById('output').textContent = '';
    document.getElementById('output2').textContent = '';
    document.getElementById('output3').textContent = '';
 }

function realizarOperacionconCallback(a, b, callback) {
    return callback(a, b);
}

function realizarOperacion() {
    limpiarconsola();
    
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(num1) || isNaN(num2)) {
        const msg = 'Por favor, ingresa ambos números';
        console.log(msg);
        logotoScreen(msg);
        return;
    }

    const resultado = realizarOperacionconCallback(num1, num2,
        function(x, y) {
            return x + y;
        }
    );

    let msg2 = (num1 % 2 === 0) ? '* Número 1 es: Par' : 'Número 1 es: Impar';
    let msg3 = (num2 % 2 === 0) ? '* Número 2 es: Par' : 'Número 2 es: Impar';
    

    const msg = `* Resultado de suma ${num1} + ${num2} = ${resultado}`;
    logotoScreen(msg);
    logotoScreen2(msg2);
    logotoScreen3(msg3);
}