var saibaMais = window.document.getElementById('saiba-mais');
var saibaMais2 = window.document.getElementById('saiba-mais-2');
var inputData = window.document.getElementById('input-data'); // input que pega o mês de nascimento
var calcular = window.document.getElementById('calcular'); // botao que ativa a funcao do signo
var signo = window.document.getElementById('signo'); // span que mostra o signo
var signoDestaque = window.document.getElementById('signo-destaque'); // h1 que mostra o signo destacado
var mensagemSigno = window.document.getElementById('mensagem-signo'); // mensagem que aparece apos calcular o signo
var caracterArea = window.document.getElementById('caracter-area'); // div que contém as características do signo
var caracter = window.document.getElementById('caracter'); // span que mostra as características do signo
signo.style.display = "none";
caracterArea.style.display = "none";
mensagemSigno.style.display = "none";

// Função para determinar o signo e suas características
function determinarSigno() {
  // Extrair o mês e o dia da data de nascimento
  var parts = inputData.value.split("-");
  var dia = parseInt(parts[2]);
  var mes = parseInt(parts[1]);

  // Array com os signos, suas respectivas datas e características
  var signos = [
    { nome: "Capricórnio", inicio: { dia: 22, mes: 12 }, fim: { dia: 19, mes: 1 }, caracteristicas: "Ambicioso, disciplinado, realista, prudente, reservado" },
    { nome: "Aquário", inicio: { dia: 20, mes: 1 }, fim: { dia: 18, mes: 2 }, caracteristicas: "Criativo, progressista, original, humanitário, independente" },
    { nome: "Peixes", inicio: { dia: 19, mes: 2 }, fim: { dia: 20, mes: 3 }, caracteristicas: "Compassivo, artístico, intuitivo, gentil, sábio" },
    { nome: "Áries", inicio: { dia: 21, mes: 3 }, fim: { dia: 19, mes: 4 }, caracteristicas: "Aventureiro, energético, pioneiro, corajoso, entusiasmado" },
    { nome: "Touro", inicio: { dia: 20, mes: 4 }, fim: { dia: 20, mes: 5 }, caracteristicas: "Confiável, paciente, prático, dedicado, responsável" },
    { nome: "Gêmeos", inicio: { dia: 21, mes: 5 }, fim: { dia: 20, mes: 6 }, caracteristicas: "Versátil, comunicativo, curioso, inteligente, animado" },
    { nome: "Câncer", inicio: { dia: 21, mes: 6 }, fim: { dia: 22, mes: 7 }, caracteristicas: "Protetor, emocional, intuitivo, gentil, criativo" },
    { nome: "Leão", inicio: { dia: 23, mes: 7 }, fim: { dia: 22, mes: 8 }, caracteristicas: "Generoso, caloroso, criativo, apaixonado, fiel" },
    { nome: "Virgem", inicio: { dia: 23, mes: 8 }, fim: { dia: 22, mes: 9 }, caracteristicas: "Lógico, prático, sensível, analítico, observador" },
    { nome: "Libra", inicio: { dia: 23, mes: 9 }, fim: { dia: 22, mes: 10 }, caracteristicas: "Diplomático, gracioso, justo, social, cooperativo" },
    { nome: "Escorpião", inicio: { dia: 23, mes: 10 }, fim: { dia: 21, mes: 11 }, caracteristicas: "Determinado, corajoso, ciumento, passional, intuitivo" },
    { nome: "Sagitário", inicio: { dia: 22, mes: 11 }, fim: { dia: 21, mes: 12 }, caracteristicas: "Aventureiro, otimista, entusiástico, independente, impulsivo" }
];

  // Determinar o signo com base na data de nascimento
  var signoEncontrado = signos.find(function(signo) {
    if ((mes == signo.inicio.mes && dia >= signo.inicio.dia) || (mes == signo.fim.mes && dia <= signo.fim.dia)) {
      return true;
    }
    return false;
  });

  // Atualizar os elementos HTML com o signo encontrado e suas características
  if (signoEncontrado) {
    signo.style.display = "inline";
    signo.innerText = signoEncontrado.nome;
    signoDestaque.innerText = signoEncontrado.nome;
    mensagemSigno.style.display = "block";
    caracter.innerText = signoEncontrado.caracteristicas;
    caracterArea.style.display = "block";
  } else {
    signo.style.display = "inline";
    signo.innerText = "Signo não encontrado";
    signoDestaque.innerText = "Signo não encontrado";
    mensagemSigno.style.display = "none";
    caracterArea.style.display = "none";
  }
}

// Evento de clique do botão calcular
calcular.addEventListener('click', determinarSigno);
