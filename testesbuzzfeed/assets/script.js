window.addEventListener('DOMContentLoaded', function() {

    let botao = document.querySelector("#btn");

    botao.addEventListener("click", function(){

            let check = document.querySelectorAll("input[name=itemCheck]:checked").length; 

            if (check >= 1 && check <=3){
            resultado.innerHTML = `Você marcou ${check} de 10 nessa lista, não é uma amante completa por chocolate!`
            }
            else if (check >= 4){
            resultado.innerHTML = `Você marcou ${check} de 10 nessa lista, você é uma chocolatra!!!`    
            }
            
            else {
                resultado.innerHTML = `Selecione uma opção para podermos dizer que tipo de pessoa você é com os chocolates!`
            }
        });
    });
    