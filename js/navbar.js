// Inicializa widget VLibras, que precisa estar carregado no HTML antes
if (window.VLibras) {
  new window.VLibras.Widget('https://vlibras.gov.br/app');
}

const modal = document.getElementById("modalAcessibilidade");
const abrirBotoes = document.querySelectorAll(".abrir-modal");
const modalBlur = modal?.querySelector(".modal-blur");

let tamanhoFonteAtual = 16;
let tamanhoFonteAnterior = 16;
let contrasteAtivoAnterior = false;
let alteracoesPendentes = false;

abrirBotoes.forEach(botao => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
    tamanhoFonteAnterior = tamanhoFonteAtual;
    contrasteAtivoAnterior = document.body.classList.contains("high-contrast");
    alteracoesPendentes = false;
  });
});

function fecharModal() {
  if (alteracoesPendentes) {
    alert("Salve ou cancele as alterações antes de fechar.");
    return;
  }
  modal.classList.remove("show");
}

window.onclick = function (event) {
  if (event.target === modal) fecharModal();
};

function salvarMudancas() {
  contrasteAtivoAnterior = document.body.classList.contains("high-contrast");
  tamanhoFonteAnterior = tamanhoFonteAtual;
  alteracoesPendentes = false;
  modal.classList.remove("show");
}

function cancelarMudancas() {
  document.body.classList.toggle("high-contrast", contrasteAtivoAnterior);
  tamanhoFonteAtual = tamanhoFonteAnterior;
  document.querySelectorAll("body *:not(#modalAcessibilidade *):not(#modalAcessibilidade)").forEach(el => {
    el.style.fontSize = tamanhoFonteAtual + "px";
  });
  speechSynthesis.cancel();
  alteracoesPendentes = false;
  modal.classList.remove("show");
}

function alterarFonte(aumentar = true) {
  const passo = 2, minimo = 10, maximo = 25;
  const novaFonte = tamanhoFonteAtual + (aumentar ? passo : -passo);
  if (novaFonte < minimo || novaFonte > maximo) return;
  tamanhoFonteAtual = novaFonte;
  document.querySelectorAll("body *:not(#modalAcessibilidade *):not(#modalAcessibilidade)").forEach(el => {
    el.style.fontSize = tamanhoFonteAtual + "px";
  });
  alteracoesPendentes = true;
  animarModal();
}

function ativarContraste() {
  document.body.classList.toggle("high-contrast");
  alteracoesPendentes = true;
}

function lerTexto() {
  const texto = document.getElementById("main-content")?.innerText || document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto.replace(/\s+/g, ' ').trim());
  utterance.lang = "pt-BR";
  speechSynthesis.speak(utterance);
}

function abrirVLibras() {
  const btnVLibras = document.querySelector('[vw-access-button]');
  if (btnVLibras) btnVLibras.click();
  else alert("VLibras não foi carregado corretamente.");
}

function animarModal() {
  if (!modal || !modalBlur) return;
  modal.style.opacity = "0";
  modalBlur.style.opacity = "0";
  setTimeout(() => {
    modal.style.opacity = "1";
    modalBlur.style.opacity = "1";
  }, 300);
}

function toggleMenu() {
  document.getElementById('menuLateral').classList.toggle('open');
  document.getElementById('menuIcon').classList.toggle('open');
}

const navbar = document.getElementById('navbar');
if(navbar) {
  navbar.addEventListener('click', (event) => {
    if (!event.target.closest('a')) {
      document.querySelector('.links').classList.toggle('active');
    }
  });
}
