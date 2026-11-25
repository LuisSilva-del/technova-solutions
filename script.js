
const formularioPesquisa = document.querySelector("#blog form");
const campoPesquisa = document.querySelector("#pesquisa-artigos");
const artigos = document.querySelectorAll("#blog article");

if (formularioPesquisa && campoPesquisa) {
  formularioPesquisa.addEventListener("submit", function (event) {
    event.preventDefault();

    const pesquisa = campoPesquisa.value.toLowerCase().trim();
    let encontrados = 0;

    artigos.forEach(function (artigo) {
      const conteudo = artigo.textContent.toLowerCase();

      if (conteudo.includes(pesquisa)) {
        artigo.style.display = "block";
        encontrados++;
      } else {
        artigo.style.display = "none";
      }
    });

    let mensagem = document.querySelector("#mensagem-pesquisa");

    if (!mensagem) {
      mensagem = document.createElement("p");
      mensagem.id = "mensagem-pesquisa";
      formularioPesquisa.after(mensagem);
    }

    if (encontrados === 0) {
      mensagem.textContent = "Nenhum artigo encontrado.";
    } else {
      mensagem.textContent = encontrados + " artigo(s) encontrado(s).";
    }
  });
}

const formularioContato = document.querySelector("#contato form");

if (formularioContato) {
  formularioContato.addEventListener("submit", function (event) {
    event.preventDefault();

    const mensagem = document.createElement("p");

    mensagem.textContent =
      "Formulário preenchido com sucesso! O envio real ainda não está configurado.";

    mensagem.style.color = "#a78bfa";
    mensagem.style.marginTop = "15px";

    const mensagemAnterior =
      formularioContato.querySelector(".mensagem-status");

    if (mensagemAnterior) {
      mensagemAnterior.remove();
    }

    mensagem.classList.add("mensagem-status");
    formularioContato.appendChild(mensagem);
  });
}

const anoAtual = document.querySelector("footer p");

if (anoAtual) {
  anoAtual.innerHTML =
    "© " +
    new Date().getFullYear() +
    " TechNova Solutions. Todos os direitos reservados.";
}
