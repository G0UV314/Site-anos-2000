/**
 * =========================================================
 * 1. FUNÇÃO PARA FIXAR O HEADER NO TOPO (Sticky Header)
 * =========================================================
 */
function fixarHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    // Define o ponto em que o header deve fixar
    const stickyOffset = 100;

    if (window.scrollY > stickyOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.addEventListener('scroll', fixarHeader);

/**
 * =========================================================
 * 2. FUNÇÃO PARA ABRIR/FECHAR MENU RESPONSIVO (Hamburger)
 * =========================================================
 */
function configurarMenuResponsivo() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header .menu');

    if (!menuToggle || !navMenu) return;

    // Ação principal: Abrir/Fechar o Menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Alterna o ícone de 'bars' para 'times' (X)
        const icon = menuToggle.querySelector('i');
        if (icon) {
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Ação Auxiliar: Fechar o menu ao clicar em um link
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fixarHeader(); // Chama no carregamento caso a página já inicie rolada (embora o listener de scroll seja o principal)
    configurarMenuResponsivo(); 
});

window.addEventListener('scroll', fixarHeader);


/**
 * =========================================================
 * Funções da página de login e Cadastro
 * =========================================================
 */








 // 3. INTERATIVIDADE DA SEÇÃO MODA (Expandir/Ocultar)
 

function cardsjs(tituloId, conteudoId) {                    
    const titulo = document.getElementById(tituloId);      //pega id do elemento titulo
    const conteudo = document.getElementById(conteudoId); //pega id do elemento conteudo

    if (titulo && conteudo) {                             // NONE esta oculto e BLOCK esta visivel
        titulo.addEventListener('click', () => {        //verifica o clique no titulo e caso ocorra executa o if e o else
            if (conteudo.style.display === 'none') {            
                conteudo.style.display = 'block'; // if = Mostra
            } else {
                conteudo.style.display = 'none'; // else = Esconde
            }
        });
    }
}

// Chama a função quando o site carregar 
document.addEventListener('DOMContentLoaded', () => {     //observa o código completo (document) no navegador e quando estiver carregago (DOMContentLoaded) aplica a função nos IDs e conteudo
    // Card Cintura Baixa
    cardsjs('titulo-cintura', 'conteudo-cintura');
    
    // 2. Veludo (O que estava faltando)
    cardsjs('titulo-veludo', 'conteudo-veludo');
    
    // 3. Cargo (Para garantir que todos funcionem)
    cardsjs('titulo-cargo', 'conteudo-cargo');
});





