function potencia(base, expoente){
    var expo = base ** expoente;
    document.write(expo)
}

var base = parseInt(prompt("Digite um numero inteiro para a base: "));
var expoente = parseInt(prompt("Digite um numero inteiro apra o expoente: "));

potencia(base, expoente)