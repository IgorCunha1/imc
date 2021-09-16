
var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];

        var imc = paciente.querySelector(".imc");
        
        var nometd = paciente.querySelector(".nome");
        var nome = nometd.textContent;

        var pesotd = paciente.querySelector(".peso");
        var peso = parseFloat(pesotd.textContent);

        var alturatd = paciente.querySelector(".altura");
        var altura = parseFloat(alturatd.textContent);

        var gorCorptd = paciente.querySelector(".gorCorp");
        var gorCorp = gorCorptd.textContent;

       
    }

function calculaIMC(peso, altura){
    
    if(peso < 0 || peso > 800){
        imc.textContent = 'Peso Inválido!';
        paciente.classList.add("paciente-invalido");
    }else if(altura < 0 || altura > 3){
        imc.textContent = 'Altura Inválida!';
        paciente.classList.add("paciente-invalido");
    }else{
        var calc = peso / (altura * altura);
        parseFloat(calc);
        var resultado = calc.toFixed(2);
        return resultado; 
    }
}