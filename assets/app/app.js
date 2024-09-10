function pesquisar () {
    let section = document.getElementById("resultados-pesquisa");
//console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value
//console.log(campoPesquisa)

if (campoPesquisa == "") {
    section.innerHTML = "Nenhum item foi encontrado"
    return    
}

campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "";
let nome = "";
let descricao = "";

for (let dado of dados) {
    nome = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()
     if (dado.nome.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2>
            <a href="${dado.link}" target="_blank">${dado.nome}</a>
            </h2>
        <p class="descricao-meta">${dado.des}<a href="#" target="_blank">Mais informações</a>
        </p>
        </div>
        `
     }
};

//Atribui os resultados gerados à seção HTML
section.innerHTML = resultados;
}


