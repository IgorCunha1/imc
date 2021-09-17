function calculaIMC(peso, altura){

    if(!validaPeso(peso) || !validaAltura(altura)){
        return false;
    }else{
        var calc = peso / (altura * altura);
        parseFloat(calc);
        var resultado = calc.toFixed(2);
        return resultado; 
    }
}