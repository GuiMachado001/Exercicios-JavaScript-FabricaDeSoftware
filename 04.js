// # Faça uma função que receba 3 números inteiros como parâmetro, representando horas, minutos
// # e segundos, e os converta em segundos.

function horario(horas, minutos, segundos){
    var horasEmMinutos = horas * 60;
    var minutosEmSegundos = (minutos + horasEmMinutos) * 60;
    var totalSegundos = minutosEmSegundos +segundos;
    document.write(`${totalSegundos} segundos`);
}

var horas= parseInt(prompt("Digite a hora: "));
var minutos= parseInt(prompt("Digite os minutos: "));
var segundos= parseInt(prompt("Digite os segundos: "));

horario(horas, minutos,segundos)