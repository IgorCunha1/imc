var tabela = document.querySelector("#conteudo");


tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
      setTimeout(function(){
        event.target.parentNode.remove();
      }, 1000);
});
