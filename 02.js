// # Faça uma função que receba a data atual (dia, mês e ano) e exiba-a na tela no formato
// # textual por extenso. Exemplo: Data: 01/01/2000, Imprimir: 1 de janeiro de 2000.

listaMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

function dataAtual (dia, mes, ano){
    var mes = mes - 1;
    var mesEscrito = listaMes[mes]
    document.write(`${dia} de ${mesEscrito} de ${ano}`);
};

var dia = parseInt(prompt("Digite o dia: "));
var mes = parseInt(prompt("Digite o mês: "));
var ano = parseInt(prompt("Digite o ano: "));

dataAtual(dia, mes, ano)