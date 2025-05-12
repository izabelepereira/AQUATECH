const modal = document.getElementById("modalAcessibilidade");
const abrirBotoes = document.querySelectorAll(".abrir-modal");
const modalBlur = modal.querySelector(".modal-blur");

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

document.getElementById("fecharModalBtn").onclick = () => {
    if (alteracoesPendentes) {
        alert("Salve ou cancele as alterações antes de fechar.");
        return;
    }
    modal.classList.remove("show");
};

window.onclick = function (event) {
    if (event.target === modal) {
        document.getElementById("fecharModalBtn").click();
    }
};

document.getElementById("salvarBtn").onclick = () => {
    contrasteAtivoAnterior = document.body.classList.contains("high-contrast");
    tamanhoFonteAnterior = tamanhoFonteAtual;
    alteracoesPendentes = false;
    modal.classList.remove("show");
};

document.getElementById("cancelarBtn").onclick = () => {
    if (contrasteAtivoAnterior) {
        document.body.classList.add("high-contrast");
    } else {
        document.body.classList.remove("high-contrast");
    }

    tamanhoFonteAtual = tamanhoFonteAnterior;
    document.querySelectorAll("body *:not(#modalAcessibilidade *)").forEach(el => {
        el.style.fontSize = tamanhoFonteAtual + "px";
    });

    speechSynthesis.cancel();

    const btnVLibras = document.querySelector('[vw-access-button]');
    if (btnVLibras?.classList.contains('active')) btnVLibras.click();

    alteracoesPendentes = false;
    modal.classList.remove("show");
};

document.getElementById("aumento").onclick = () => alterarFonte(true);
document.getElementById("diminuir").onclick = () => alterarFonte(false);

function alterarFonte(aumentar = true) {
    const passo = 2;
    const minimo = 10;
    const maximo = 25;

    const novaFonte = tamanhoFonteAtual + (aumentar ? passo : -passo);
    if (novaFonte < minimo || novaFonte > maximo) return;

    tamanhoFonteAtual = novaFonte;
    document.querySelectorAll("body *:not(#modalAcessibilidade *)").forEach(el => {
        el.style.fontSize = tamanhoFonteAtual + "px";
    });

    alteracoesPendentes = true;
    animarModal();
}

document.getElementById("contrasteBtn").onclick = () => {
    document.body.classList.toggle("high-contrast");
    alteracoesPendentes = true;
};

document.getElementById("lerTextoBtn").onclick = () => {
    const texto = document.getElementById("main-content")?.innerText || document.body.innerText;
    const textoFiltrado = texto.replace(/\s+/g, ' ').trim();
    const utterance = new SpeechSynthesisUtterance(textoFiltrado);
    utterance.lang = "pt-BR";
    speechSynthesis.speak(utterance);
};

document.getElementById("vlibrasBtn").onclick = () => {
    const btnVLibras = document.querySelector('[vw-access-button]');
    if (btnVLibras) btnVLibras.click();
    else alert("VLibras não foi carregado corretamente.");
};

function animarModal() {
    modal.style.opacity = "0";
    modalBlur.style.opacity = "0";
    setTimeout(() => {
        modal.style.opacity = "1";
        modalBlur.style.opacity = "1";
    }, 300);
}

// Menu lateral
document.getElementById("menuToggle").onclick = () => {
    document.getElementById("menuLateral").classList.toggle("open");
    document.getElementById("menuIcon").classList.toggle("open");
};
