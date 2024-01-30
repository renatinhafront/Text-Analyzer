import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//querySelector = Busca o elemento no HTML atraves do atributo data-testid

// Contador de palavras
const wordCount = document.querySelector('[data-testid="word-count"]');
const wordCountText = "Contagem de palavras: "

// Contador de caracteres
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterCountText = "Contagem de caracteres: "

//Contador excluindo caracteres
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const characterNoSpacesCountText = "Contagem sem espaços e pontuação: "

// Contador de numeros
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberCountText = "Contagem de números: "

//Soma total de numeros
const numberSum = document.querySelector('[data-testid="number-sum"]');
const numberSumText = "Soma total de números: "

//Media das palavras
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
const wordLengthAverageText = "Comprimento médio das palavras: "

//Retorna o primeiro elemento dentro do documento
const textArea = document.querySelector('textarea[name="user-input"]');
textArea.addEventListener('input', function () {
  wordCount.textContent = wordCountText + analyzer.getWordCount(textArea.value);
  characterCount.textContent = characterCountText + analyzer.getCharacterCount(textArea.value);
  numberCount.textContent = numberCountText + analyzer.getNumberCount(textArea.value);
  characterNoSpacesCount.textContent = characterNoSpacesCountText + analyzer.getCharacterCountExcludingSpaces(textArea.value);
  numberSum.textContent = numberSumText + analyzer.getNumberSum(textArea.value);
  wordLengthAverage.textContent = wordLengthAverageText + analyzer.getAverageWordLength(textArea.value);

});

//Retorna a referência do elemento através do seu ID.
const button = document.getElementById("reset-button");
button.addEventListener('click', function () {
  initialize()
});

//executa a inicializacao
initialize();

//funcao que concatena o texto e o contador
function concat(text, count) {
  return text + count
}

//inicializa com 0 as caixas
function initialize() {
  textArea.value = "";
  wordCount.textContent = concat(wordCountText, 0);
  characterCount.textContent = concat(characterCountText, 0);
  numberCount.textContent = concat(numberCountText, 0);
  characterNoSpacesCount.textContent = concat(characterNoSpacesCountText, 0);
  numberSum.textContent = concat(numberSumText, 0);
  wordLengthAverage.textContent = concat(wordLengthAverageText, 0);

}

