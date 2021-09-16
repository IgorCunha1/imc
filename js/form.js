var form = document.querySelector("#formList");
var botao = document.querySelector("#botao");
var tabela = document.querySelector("#conteudo");

    botao.addEventListener('click', function(event){
        event.preventDefault();
        var paciente = extrairForm(form);
        
       if(!paciente.nome || !paciente.peso || !paciente.altura || !paciente.gorCorp){
           alert('Digite Todos os Campos!');
       }else{
           
            var pacienteTr = document.createElement("tr");
            pacienteTr.classList.add("paciente");

            var nomeTd = document.createElement("td");
            nomeTd.classList.add("info-nome");

            var pesoTd = document.createElement("td");
            pesoTd.classList.add("info-peso");

            var alturaTd = document.createElement("td");
            alturaTd.classList.add("info-altura");

            var gorCorpTd = document.createElement("td");
            gorCorpTd.classList.add("info-gorCorp");

            var imcTd = document.createElement("td");
            imcTd.classList.add("info-imc");

           
            pacienteTr.appendChild(nomeTd);
            pacienteTr.appendChild(pesoTd);
            pacienteTr.appendChild(alturaTd);
            pacienteTr.appendChild(gorCorpTd);
            pacienteTr.appendChild(imcTd);

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

        var nomeTd = montaTd(paciente.nome, "info-nome");
        var pesoId = montaTd(paciente.peso, "info-peso");
        var alturaTd = montaTd(paciente.altura, "info-altura");
        var gorCorpTd = montaTd(paciente.gorCorp, "info-gorCorp");
        var imcTd = montaTd(paciente.imc, "info-imc");
        
    }

    function montaTd(dado, classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }