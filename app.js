//Função para o botão
function exibir() {
    //Declaração e id do html para o Javascript
    let section = document.getElementById("resultados-pesquisa");

    //Destinado para o campo de pesquisa que o usuário  vai descrever 
    let campoPesquisa = document.getElementById("campo-pesquisa").value;




    if (!campoPesquisa) {

        section.innerHTML = "<p>Nada foi encontrado</p>"
        return

    } 


    campoPesquisa = campoPesquisa.toLowerCase();

    //String vazia
    let resultados = " ";
    let titulo = " ";
  

    

    //Para cada dado dentro da lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
      
        //Validação
        if (titulo.includes(campoPesquisa)){ 

            //Inclementação(soma dos elementos)
            resultados += `
        <div class="item-resultado">
            <h2>
                    ${dado.titulo}
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    `;

            `<div class="item-resultado">
            <h2>
                    ${dado.titulo}
                </a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    `;
            `<div class="item-resultado">
            <h2>
                  ${dado.titulo}
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    `;
            `<div class="item-resultado">
            <h2>
                    ${dado.titulo}
                </a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    `;
            `<div class="item-resultado">
            <h2>
                    ${dado.titulo}
                </a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    `;

            `<div class="item-resultado">
            <h2>
                    ${dado.titulo}
                </a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    `;



        }


    } 

    if (resultados== " ") {

        resultados = "<p>Nada foi encontrado</p>";

    } 

    section.innerHTML = resultados;


}
