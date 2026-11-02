
"use strict";

// MANUTEC EAD - FUNCIONALIDADES INICIAIS

// Botão de interesse no curso
const botaoMatricula =
  document.getElementById("btnMatricula");

if (botaoMatricula) {
  botaoMatricula.addEventListener("click", function () {

    const mensagem =
      "Olá! Tenho interesse no curso de " +
      "Eletricidade Básica e Instalações " +
      "Elétricas Prediais de 160 horas. " +
      "Gostaria de receber mais informações.";

    const telefone = "5521969799854";

    const link =
      "https://wa.me/" + telefone +
      "?text=" + encodeURIComponent(mensagem);

    window.open(link, "_blank", "noopener,noreferrer");
  });
}
