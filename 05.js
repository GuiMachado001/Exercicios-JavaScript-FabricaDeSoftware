// # Elaborar uma função para retornar o maior de três números recebidos por parâmetro.

function maiorDeTres(a, b, c){
    return Math.max(a, b, c);
}

function obterNumero(){
    var numeros = [];
    
    for(var i = 0; i < 3; i++){
        var num = parseInt(prompt("Digite um numero: "));
        numeros.push(num);
    }

    var maiorNumero = maiorDeTres(...numeros);
    document.write(`O maior numero é: ${maiorNumero}`);
}

obterNumero();