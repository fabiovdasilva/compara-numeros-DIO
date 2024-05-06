function comparaNumeros(num1,num2){
    let iguais = "";
    let soma = num1 + num2
    let maior = "";


    if(num1 === num2){
        iguais = `Os números ${num1} e ${num2} são iguais.`
    } else {
        iguais = `Os números ${num1} e ${num2} não são iguais.`
    }

    if(soma>10 &&  soma < 20){
        maior = `Sua soma é ${soma}, que é maior que 10 e menor que 20`
    } else if (soma < 10){
        maior = `Sua soma é ${soma}, que é menor que 10 e menor que 20`
    } else {
        maior = `Sua soma é ${soma}, que é maior que 10 e maior que 20`
    }

    console.log(`${iguais} ${maior}`)
}

comparaNumeros(2,2)