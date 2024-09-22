// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoDiarioJson = `{
    "faturamento": [1000, 1200, 800, 0, 950, 700, 0, 0, 1300, 1200, 0, 0, 1100, 1500, 1600, 0, 1700, 0, 900, 1400, 0, 0, 800, 0, 1300, 900, 0, 1800, 0, 0]
}`;

const dados = JSON.parse(faturamentoDiarioJson);
const faturamento = dados.faturamento.filter(valor => valor > 0);

// Menor e maior valor de faturamento
const menorFaturamento = Math.min(...faturamento);
const maiorFaturamento = Math.max(...faturamento);

// Média mensal, ignorando dias sem faturamento
const mediaMensal = faturamento.reduce((acc, valor) => acc + valor, 0) / faturamento.length;

// Dias com faturamento superior à média
const diasAcimaDaMedia = faturamento.filter(valor => valor > mediaMensal).length;

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
