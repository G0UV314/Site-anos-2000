Projeto: Cadastro simples com login (ModaY2K)

Descrição
- Pequeno projeto front-end em HTML/CSS (Bootstrap) e JavaScript que implementa:
  - Página de login (`login.html`) com autenticação simples.
  - Página de cadastro (`cadastro.html`) onde é possível criar usuários (nome, email, senha).
  - Persistência de usuários em `localStorage` e proteção de rota simples via `sessionStorage`.

Como usar
1. Abra `login.html` no navegador (duplo-clique no arquivo ou arraste para o navegador).
2. Faça login com as credenciais de teste:
   - Email: `moday2k@admin.com`
   - Senha: `Glamour@20s`
3. Após login você será redirecionado para `cadastro.html`, onde pode cadastrar novos usuários.
4. Os usuários cadastrados são salvos em `localStorage` e permanecem entre recargas.
5. Para sair, use o botão `Sair` em `cadastro.html` (limpa a flag em `sessionStorage`).

Observações importantes
- As credenciais usadas aqui servem apenas para demonstração/local.
- As senhas são armazenadas em texto no `localStorage` neste exemplo.

Como limpar dados
- Pelo navegador: abra Ferramentas do Desenvolvedor → Application (ou Armazenamento) → Local Storage → remova a chave `usuarios`.
- Ou execute `localStorage.removeItem('usuarios')` no console do navegador.

Melhorias sugeridas
- Validar emails com regex mais robusta.
- Não armazenar senhas em texto; mover autenticação para o backend.
- Implementar login usando usuários criados em `localStorage` (se quiser, posso ajudar a implementar).
- Adicionar proteção CSRF e medidas contra XSS (sanitizar entradas antes de inserir no DOM).

Referências
- MDN — localStorage: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
- MDN — sessionStorage: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage
- MDN — addEventListener: https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
- MDN — Element.classList: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
- Bootstrap Forms: https://getbootstrap.com/docs/5.3/forms/
- OWASP — XSS: https://owasp.org/www-community/attacks/xss/
- OWASP — Autenticação (recomendações): https://owasp.org/www-project-top-ten/

Arquivo principal deste projeto
- `login.html` — página de login
- `cadastro.html` — formulário de cadastro (protegido por `sessionStorage`)
- `script.js` — lógica de validação, persistência e UI

