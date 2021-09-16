var form = document.querySelector("#formList");
var botao = document.querySelector("#botao");
var tabela = document.querySelector("#conteudo");


    botao.addEventListener('click', function(event){
        event.preventDefault();
        
        
       if(!paciente.nome || !paciente.peso || !paciente.altura || !paciente.gorCorp){
           alert('Digite Todos os Campos!');
       }else{
        var paciente = extrairForm(form);
        var pacienteTr = montaTr(paciente);
        tabela.appendChild(pacienteTr);
       }

    });

    function extrairForm(form){

      var  paciente = {
             nome: form.nome.value,
             peso: parseFloat(form.peso.value),
             altura: parseFloat(form.altura.value),
             gorCorp: form.gorCorp.value,
             imc: calculaIMC(form.peso.value, form.altura.value)
        };

        return paciente;
    }

    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gorCorp, "info-gorCorp"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
        
        return pacienteTr;
        
    }

    function montaTd(dado, classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }