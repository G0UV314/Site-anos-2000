
// Seletores
const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const resultado = document.getElementById("resultado");

// Estado
const STORAGE_KEY = "usuarios";
let usuarios = [];

// Carrega usuários do localStorage ao iniciar
(function carregarUsuarios() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) usuarios = parsed;
    } catch (err) {
      usuarios = [];
      console.error("Erro ao carregar usuários do localStorage:", err);
    }
  }
})();

function salvarUsuarios() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
  } catch (err) {
    console.error("Erro ao salvar usuários no localStorage:", err);
  }
}



// Validações
function validarNome(valor) {
  return valor.trim().length > 2;
}

function validarEmail(valor) {
  return valor.includes("@") && valor.includes(".");
}

function validarSenha(valor) {
  return String(valor).trim().length >= 4; // mínimo 4 caracteres
}

// UI helpers
function mostrarResultado(html, tipo = "info") {
  resultado.innerHTML = `<div class="alert alert-${tipo}">${html}</div>`;
}

function formatarDados(n, e) {
  return `
    <strong>Nome:</strong> ${n.toUpperCase()} <br>
    <strong>Email:</strong> ${e.toLowerCase()} 
  `;
}

function adicionarUsuario(n, e, s) {
  const nomeNorm = String(n).trim();
  const emailNorm = String(e).trim().toLowerCase();
  const senhaNorm = String(s);
  // a senha não está sendo exibida na listagem por questões de segurança
  usuarios.push({ nome: nomeNorm, email: emailNorm, senha: senhaNorm });
  salvarUsuarios();
}

function listarUsuarios() {
  if (usuarios.length === 0) return "<em>Nenhum usuário cadastrado.</em>";
  return usuarios.map((u, idx) => `<div>${idx+1}. ${u.nome} — ${u.email}</div>`).join("");
}

function marcarCampo(inputEl, valido) {
  inputEl.classList.remove("is-valid", "is-invalid");
  if (valido) inputEl.classList.add("is-valid");
  else inputEl.classList.add("is-invalid");
}

// Validação em tempo real
n=nome; // manter referência breve para leitura
nome.addEventListener("input", () => marcarCampo(nome, validarNome(nome.value)));
email.addEventListener("input", () => marcarCampo(email, validarEmail(email.value)));
senha.addEventListener("input", () => marcarCampo(senha, validarSenha(senha.value)));

// Submit
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nomeValido = validarNome(nome.value);
  const emailValido = validarEmail(email.value);
  const senhaValida = validarSenha(senha.value);

  marcarCampo(nome, nomeValido);
  marcarCampo(email, emailValido);
  marcarCampo(senha, senhaValida);

  if (nomeValido && emailValido && senhaValida) {
    adicionarUsuario(nome.value, email.value, senha.value);
    mostrarResultado("Cadastro realizado com sucesso!<hr>" + formatarDados(nome.value, email.value) + "<hr>" + listarUsuarios(), "success");
    form.reset();
    [nome, email, senha].forEach(i => i.classList.remove("is-valid", "is-invalid"));
  } else {
    mostrarResultado("Há erros no formulário. Verifique os campos.", "danger");
  }
});

