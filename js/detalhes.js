window.onload = () => {
    dadosJogador()
}

let divDetalhes = document.getElementById('detalhes')

function dadosJogador(){
    divDetalhes.innerHTML = `
    <div class="div-detalhes">
        <h2 class="titulo-detalhes">${localStorage.getItem('@Nome')}</h2>
        <img class="imagem-detalhes" src="${localStorage.getItem('@Imagem')}">
        <h2 class="titulo-detalhes">${localStorage.getItem('@Posicao')}</h2>
        <p>${localStorage.getItem('@Descricao')}</p>
        <div class="informacoes">
            <p class="info-detalhes">Nome completo: ${localStorage.getItem('@Nome')} </p> 
            <p class="info-detalhes">Altura: ${localStorage.getItem('@Altura')}</p> 
            <p class="info-detalhes">Nascimento: ${localStorage.getItem('@Nascimento')} </p>
        </div>
        <a class="botao" href="./index.html">Voltar</a>
    </div>
    `;
}