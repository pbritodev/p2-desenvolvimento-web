window.onload = () => {
    carregarJogadores()
}

let elencoFeminino = document.getElementById('elenco-feminino')
let elencoMasculino = document.getElementById('elenco-masculino')

const carregarJogadores = () => {  
   jogadores.forEach((jogador, indice)=>{
        if(jogador["elenco"] == "feminino"){
            elencoFeminino.innerHTML += `
            <div class="jogador" id="jogador${indice}" onclick="salvarInformacoes(${indice})">
                <img src="${jogador["imagem"]}">
                <h4>${jogador["nome"]}</h4>
            </div>
            `;

        } else {
            elencoMasculino.innerHTML += `
            <div class="jogador" id="jogador${indice}" onclick="salvarInformacoes(${indice})">
                <img src="${jogador["imagem"]}">
                <h4>${jogador["nome"]}</h4>
            </div>
            `;
        }   
   })
}

function salvarInformacoes(indiceJogador) {
    const jogador = jogadores[indiceJogador];
    localStorage.setItem('@Nome', jogador.nome)
    localStorage.setItem('@Imagem', jogador.imagem)
    localStorage.setItem('@Posicao', jogador.posicao)
    localStorage.setItem('@Descricao', jogador.descricao)
    localStorage.setItem('@NomeCompleto', jogador.nome_completo)
    localStorage.setItem('@Nascimento', jogador.nascimento)
    localStorage.setItem('@Altura', jogador.altura);
    window.location.href = './detalhes.html'
}