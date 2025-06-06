class MeuNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // cria shadow root
  }

  connectedCallback() {
    // 1. Coloque o seu HTML COMPLETO dentro de uma template literal
    // (copie exatamente seu HTML, sem alterar uma vírgula)
    this.shadowRoot.innerHTML = `
  <style>
    @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
.ajuda i {
  font-size: 2rem;
  color: #0b5498;
  margin-left: 0.2rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  font-family: 'Agrandir Regular', sans-serif !important;
  border: none;
  font-size: 1rem;
}


.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex: 1 1 60%;
  max-width: 60%;
}


.ajuda {
  display: flex;
  /* Alinha o ícone e o texto */
  align-items: center;
  /* Centraliza o ícone e o texto verticalmente */
  text-decoration: underline 1px #0b5498;
  flex: 0 0 auto;
}

.navbar a {
  margin-left: 1.5rem;
  margin-right: 2.5rem;
  text-decoration: none;
  color: #0b5498;
  font-weight: 500;
}

.navbar a:hover {
  text-decoration: underline;
}

.logo-img {
  height: 2rem;

  display: block;
  flex: 0 0 auto;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: opacity 0.4s ease;

}

.modal.show {
  display: flex;
  /* Exibe quando tiver a classe "show" */
  opacity: 1;
  /* Opacidade para o efeito de transição */
}

.modal::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.2);
  z-index: -1;
}

.modal-content {
  background-color: white;
  border-radius: 25px;
  padding: 2rem;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: auto;
  position: relative;
}

.modal-content h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
  color: #0b5498;
  font-family: 'Raleway';
  font-weight: bolder !important;
  margin-top: -2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1rem;
  color: #063764;
  cursor: pointer;
}


.modal-content p {
  font-size: 0.9rem;
  color: #0b5498;
  margin-bottom: 1rem;
  margin-top: -0.3rem;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}

.acessibility-grid {
  display: grid;
  grid-template-columns: repeat(2, 0.7fr);
  gap: 2rem;
  margin-bottom: 1.5rem;
  align-items: stretch;
  /* Garante que todas as opções de acessibilidade tenham a mesma altura */
}

.acessibility-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #0b5498;
  border-radius: 25px;
  padding: 1rem;
  min-height: 140px;
  position: relative;
}


.acessibility-option i {
  margin-top: auto;
  margin-bottom: 0;
  font-size: 4rem;
  color: #0b5498;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;
}

.acessibility-option img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  margin-top: auto;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;
}

.acessibility-option:hover img {
  filter: brightness(0) saturate(100%) invert(19%) sepia(68%) saturate(380%) hue-rotate(178deg) brightness(96%) contrast(101%);
}

.acessibility-option i:hover {
  color: #063663;

}

.acessibility-option p.opcao-titulo {
  font-family: 'CodecColdRegular', sans-serif !important;
  font-size: 0.9rem;
  color: #0b5498;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.modal-buttons button {
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;

}

.cancel-btn {
  background-color: transparent;
  color: #0b5498;
  text-decoration: underline 1px;
  font-family: 'Glacial Indifference', sans-serif;
  font-weight: 500;
  text-underline-offset: 5px;
  font-size: 1.1rem !important;
  border: none !important;
}

.save-btn {
  background-color: #0b5498dd;
  color: white;
  font-family: 'Glacial Indifference', sans-serif;
  font-weight: 500;
  letter-spacing: 0.7px;
  width: 45%;
}

.save-btn:hover {
  background-color: #fff !important;
  color: #0b5498 !important;
  border: #0b5498 1px solid;
  font-weight: bold;
}

.cancel-btn:hover {
  background-color: #fff !important;
  color: #b40808 !important;
}


.font-size-controls button {
  background-color: transparent;
  color: #0b5498;
  padding: 0.4rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1.3rem;
  /* Tamanho fixo */
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  border: #0b5498 2px solid;

}

.font-size-controls button:hover {
  background-color: #0b5498;
  color: #fff;
}

.font-size-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 0.5rem;
}

.menu-lateral {
  display: none;
}

/* Botão hamburguer também escondido por padrão */
.navbar-toggler {
  display: none;
}


/* Em telas pequenas (até 768px), exibe o botão e o menu lateral se estiver "open" */
@media (max-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1rem;
  }

  .logo {
    position: absolute;
    left: 1rem;
    /* Ajusta a posição da logo à esquerda */
    top: 50%;
    transform: translateY(-50%);
    /* Alinha verticalmente no meio */
  }

  .navbar-toggler {
    display: block;
    background: transparent;
    border: none;
    color: #000;
    font-size: 1.5rem;
    position: absolute;
    top: 0.1em;
    /* Define o ícone no topo */
    right: 1rem;
    /* Ajusta o botão de menu à direita */
    z-index: 1001;
  }

  .navbar-toggler i {
    color: #0b5498;
    /* Define a cor do ícone */
    font-size: 1.5rem;
    /* Ajusta o tamanho do ícone */
  }

  .menu-lateral {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    /* Inicialmente fora da tela */
    width: 70vw;
    height: 100%;
    background: #ffffff;
    box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.1);
    /* Adiciona uma sombra suave */
    padding: 2rem;
    transition: right 0.3s ease;
    z-index: 1000;

  }

  .menu-lateral.open {
    right: 0;
    display: flex;
    z-index: 9998;
  }

  .menu-lateral a,
  .menu-lateral p {
    color: #0b5498;
    /* Cor do texto */
    font-size: 1rem;
    /* Ajusta o tamanho da fonte */
    text-decoration: none;
    margin-bottom: 1rem;
    /* Espaço entre os links */
    margin-top: 2rem;
    /* Espaço entre os links */
    transition: color 0.3s ease;
    /* Transição suave para a cor */
    font-family: 'Agrandir Regular';
    text-align: left;
  }

  .menu-lateral a:hover {
    text-decoration: underline #0b5498;
  }

  .navbar .links,
  .navbar .ajuda {
    display: none;
  }

  #modalAcessibilidade {
    display: none;
    position: fixed;
    inset: 0;
    justify-content: center;
    align-items: center;
    z-index: 9999 !important;
    /* Aumente o valor do z-index */
    width: 90vw;
    /* Aumenta a largura para 90% da tela em dispositivos menores */
    max-width: 600px;
    /* Aumente o max-width */
    /* Limita a largura máxima para 500px */
    padding: 1.5rem;
    /* Ajuste no padding para se adequar melhor a telas menores */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    /* Diminui a sombra */
    backdrop-filter: blur(3px);
    /* Menor blur em telas menores */
    opacity: 0;
    transition: opacity 0.3s ease;
  }


  #modalAcessibilidade.show {
    display: flex !important;
    z-index: 10001;
    /* Garante que o modal fique acima do menu lateral */
  }
}

#modalAcessibilidade {
  display: none;
  position: fixed;
  inset: 0; /* Ocupa toda a viewport */
  justify-content: center;
  align-items: center;

  z-index: 9999;
  backdrop-filter: blur(3px); /* Agora vai pegar a tela toda */
  background-color: rgba(0, 0, 0, 0.1); /* (opcional) escurece o fundo */
  
  opacity: 0;
  transition: opacity 0.3s ease;
}

#modalAcessibilidade.show {
  display: flex;
  opacity: 1;
}



 @font-face {
      font-family: 'Agrandir Regular';
      src: url('../fonts/agrandir-regular.otf') format('opentype');
    }

    @font-face {
      font-family: 'Glacial Indifference';
      src: url('../../fonts/GlacialIndifference-Regular.otf') format('opentype');
    }

    @font-face {
      font-family: 'CodecColdRegular';
      src: url('../../fonts/Codec-Cold-Regular-trial.ttf') format('truetype');
    }

    .agrandir {
      font-family: 'Agrandir Regular', sans-serif;
    }

    .glacial {
      font-family: 'Glacial Indifference', sans-serif;
    }

    .codec-cold-regular {
      font-family: 'CodecColdRegular', sans-serif;
    }
      </style>

      ${`
        <!-- Navbar -->
<div class="navbar" id="navbar">
  <div class="logo">
    <img src="../../imagens/logobl.png" alt="Logo Aquatech" class="logo-img">
  </div>
  <div class="links">
    <a href="../../html/aboutus.html">Sobre Nós</a>
    <a href="../../html/calculadora.html">Recursos</a>
    <a href="../../html/home.html">Soluções</a>
  </div>
  <div class="ajuda">
    <a href="#" class="abrir-modal" style="margin-right: -1.0rem !important;">
      Ajuda <i class="bi bi-universal-access-circle" style="color:#0b5498; font-size: 1.1rem;"></i>
    </a>
  </div>
</div>

<!-- Botão Navbar Mobile -->
<button class="navbar-toggler" type="button" onclick="toggleMenu()" aria-label="Abrir menu" aria-expanded="false">
  <i class="bi bi-list" id="menuIcon" style="font-size: 1.5rem; z-index: 9999 !important;"></i>
</button>


<!-- Modal Acessibilidade -->
<div class="modal" id="modalAcessibilidade">
  <div class="modal-blur"></div>
  <div class="modal-content">
    <h2>
      <strong>Ajustes de Acessibilidade</strong>
      <button class="modal-close" onclick="fecharModal()" title="Fechar">
        <i class="bi bi-x-lg"></i>
      </button>
    </h2>
    <p>Melhore sua experiência no site.</p>

    <div class="acessibility-grid">
      <div class="acessibility-option">
        <p class="opcao-titulo">Tamanho do Texto</p>
        <div class="font-size-controls">
          <button onclick="alterarFonte(true)" id="aumento">A +</button>
          <button onclick="alterarFonte(false)" id="diminuir">a -</button>
        </div>
      </div>

      <div class="acessibility-option" onclick="ativarContraste()">
        <p class="opcao-titulo">Modo Contraste</p>
        <i class="bi bi-eye"></i>
      </div>

      <div class="acessibility-option" onclick="lerTexto()">
        <p class="opcao-titulo">Ouvir Texto</p>
        <i class="bi bi-ear"></i>
      </div>

      <div class="acessibility-option" onclick="abrirVLibras()">
        <p class="opcao-titulo">Traduzir para Libras</p>
        <img src="../../imagens/libras.svg" alt="Ícone de Libras" style="width: 82px; height: 82px;" />
      </div>
    </div>

    <div class="modal-buttons">
      <button class="cancel-btn" onclick="cancelarMudancas()">Cancelar</button>
      <button class="save-btn" onclick="salvarMudancas()">Salvar mudanças</button>
    </div>
  </div>
</div>

<!-- Menu Lateral (Mobile) -->
<div class="menu-lateral" id="menuLateral">
  <a href="#">Sobre Nós</a>
  <a href="#">Recursos</a>
  <a href="#">Soluções</a>
  <div class="ajuda">
    <a href="#" class="abrir-modal" style="margin-right: -1.0rem !important;">
      Ajuda <i class="bi bi-universal-access-circle" style="color:#0b5498; font-size: 1.1rem;"></i>
    </a>
  </div>
</div>

<!-- VLibras -->
<div vw class="enabled">
  <div vw-access-button class="active"></div>
  <div vw-plugin-wrapper>
    <div class="vw-plugin-top-wrapper"></div>
  </div>
</div>

      `}
    `;

    // 2. Agora você precisa “adaptar” o seu JS para funcionar dentro do shadow root

// Exemplo: capturar elementos dentro do shadowRoot e adicionar eventos
const modal = this.shadowRoot.getElementById("modalAcessibilidade");
const abrirBotoes = this.shadowRoot.querySelectorAll(".abrir-modal");
const modalBlur = modal?.querySelector(".modal-blur");
const fecharBotao = modal?.querySelector(".modal-close");
const cancelarBotao = modal?.querySelector(".cancel-btn");

// Replicar seu JS original com as referências ajustadas para shadowRoot
abrirBotoes.forEach(botao => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
    // ... Você pode replicar o resto da lógica adaptando as variáveis
  });
});

// Fechar modal ao clicar no botão de fechar
fecharBotao?.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("show");
});

// Fechar modal ao clicar fora (blur)
modalBlur?.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Fechar modal ao clicar no botão Cancelar
cancelarBotao?.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("show");
});

// Como seu código usa funções globais (ex: toggleMenu), 
// você pode criar métodos na classe para isso e ajustar o HTML para chamar esses métodos, 
// ou adicionar listeners aqui no JS da classe

// Exemplo simples para toggleMenu:
const btnToggle = this.shadowRoot.querySelector(".navbar-toggler");
btnToggle.addEventListener("click", () => {
  const menuLateral = this.shadowRoot.getElementById('menuLateral');
  const menuIcon = this.shadowRoot.getElementById('menuIcon');
  menuLateral.classList.toggle('open');
  menuIcon.classList.toggle('open');
});



    // Para o restante das funções que você quer manter idênticas, 
    // você pode transformar elas em métodos da classe ou mover para dentro do connectedCallback
  }
}

customElements.define('meu-navbar', MeuNavbar);

