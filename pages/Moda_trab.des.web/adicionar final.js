// --- Início da Parte de Moda Y2K ---

// Função para expandir/ocultar os cards
function toggleConteudo(tituloId, conteudoId) {
    const titulo = document.getElementById(tituloId);
    const conteudo = document.getElementById(conteudoId);

    // Verifica se os elementos existem antes de tentar adicionar o evento
    if (titulo && conteudo) {
        titulo.addEventListener('click', function() {
            if (conteudo.style.display === 'none') {
                conteudo.style.display = 'block';
            } else {
                conteudo.style.display = 'none';
            }
        });
    }
}

// Ativar a funcionalidade para os 3 cards específicos
// linka os IDs de cada titulo no html
document.addEventListener("DOMContentLoaded", function() {
    toggleConteudo('titulo-cintura-baixa', 'conteudo-cintura-baixa');
    toggleConteudo('titulo-tops-brilho', 'conteudo-tops-brilho');
    toggleConteudo('titulo-veludo-agasalho', 'conteudo-veludo-agasalho');
});

// --- Fim da Parte de Moda Y2K ---