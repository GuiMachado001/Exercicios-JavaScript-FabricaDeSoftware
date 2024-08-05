// # Faça uma função para verificar se um número é positivo ou negativo. Sendo que o valor de
// # retorno será 1 se positivo, -1 se negativo e 0 se for igual a 0.

function posNegat (num){
    if(num === 0){
        return "Zero"
    }
    else if(num > 0){
        return 1
    }
    else{
        return -1
    }
}

num = parseInt(prompt("Digite um numero positivo, negativo ou zero: "));

verificar = posNegat(num);

document.write(verificar)