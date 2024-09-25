let valor1 = document.querySelector('#numero1');
let valor2 = document.querySelector('#numero2');
let operacao = document.querySelector('#operacao')
let res = document.querySelector('#resultado');
let verificar = document.querySelector('#verificar');
verificar.addEventListener('click', operacoes);

let resultadoFinal = '';

function operacoes() {

    let num1 = parseFloat(valor1.value);
    let num2 = parseFloat(valor2.value);

    if(isNaN(num1) || isNaN(num2)) {
        res.innerHTML = `Por favor, insira apenas números.`;
        return
    }

    switch (operacao.value) {
        case 'soma':
            resultadoFinal = num1 + num2;
            break

        case 'subtracao':
            resultadoFinal = num1 - num2;
            break

        case 'multiplicacao':
            resultadoFinal = num1 * num2;
            break

            case 'divisao':
                if (num2 == 0) {
                    res.innerHTML = `Não é possível dividir por 0`;
                    return;  // Interrompe a execução se a divisão por 0 for detectada
                } else {
                    resultadoFinal = num1 / num2;
                }
                break;
      
        // case 'divisao':
        //   if(num2 == 0){
        // res.innerHTML = `Não é possível dividir por 0`}
        //   else {resultadoFinal = num1 / num2;}
        //     break
    
        default:
    resultadoFinal = 'operacao invalida';
}

res.innerHTML = `Resultado: ${resultadoFinal}`;

}
