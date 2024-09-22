// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(next);
    }
    return fib;
}

function pertenceFibonacci(numero) {
    const sequencia = fibonacci(numero);
    if (sequencia.includes(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de uso
let numero = parseInt(prompt("Informe um número:"));
pertenceFibonacci(numero);