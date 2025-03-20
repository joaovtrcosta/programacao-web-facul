function calculate(operation){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('result').textContent = 'Por favor, insira números válidos!!';
        return;
    }

    let result;

    switch(operation){
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

        if(num2 === 0){
            document.getElementById('result').textContent = 'Não é possível dividir por zero!!';
        }
        result = num1 / num2;
        break;
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}


function transformText(type){
    const text = document.getElementById('textInput').value;
    let result;

    if(text.trim() === ''){
        document.getElementById('textResult').textContent = "Por favor, digite algum texto!"
        return
    }

    if(type === 'upper'){
        result = text.toUpperCase();
    }else if (type === 'lower'){
        result = text.toLowerCase();
    }

    document.getElementById('textResult').textContent = `Texto transformado: ${result}`
    
}

function countChars(){
    const text = document.getElementById('textInput').value;
    const length = text.length;

    document.getElementById('textResult').textContent = `Quantidade de caracteres: ${length}`;
}

const colors = ['#3498db', '#e7ac3c', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c'];

let currentColorIndex = 0;

document.getElementById('colorBox').addEventListener('click', function(){
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    this.style.backgroundColor = colors[currentColorIndex];
})

