const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const words = text.trim().split(/\s+/);
    const filteredWords = words.filter(word => word.length > 1);
    return filteredWords.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    //length é uma propriedade de um objeto função , e indica quantos argumentos a função espera, i.e. o número de parametros formais.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    const characterExcluido = text.replace(/[^0-9a-zA-Z]/gim, '');
    return characterExcluido.length
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    //trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto
    //split permite dividir uma string em partes menores com base em um separador especificado
    //regex \s+ qualquer caracter que não seja em espaço em branco
    const words = text.trim().split(/\s+/);

    //reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos(valores indefinidos)
    const totalCharacters = words.reduce((acc, word) => acc + word.length, 0);
    const media = totalCharacters / words.length || 0;
    //parseFloat converte a string recebida como argumento e a retorna como um número de ponto flutuante
    //toFixed para formatar casas decimais
    return parseFloat (media.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    const numberCount = text.match(/\b\d+(\.\d+)?\b/g);
    return numberCount ? numberCount.length : 0;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    //text.match() retorna uma lista de números inteiros ou decimais
    const numerosEncontrados = text.match(/\b\d+(\.\d+)?\b/g);

    //if Se - verifica se a lista está nula
    if (numerosEncontrados) {
      //let para declarar a varialvel total que soma os numeros
      let total = 0;

      //for para pegar os itens da lista
      for (let i = 0; i < numerosEncontrados.length; i++) {

        //[i] para pegar o conteudo dentro do indice
        total += Number(numerosEncontrados[i]);
      }

      return total;

      //caso contrario ele rotorna 0
    } else {
      return 0;
    }
  }
}


export default analyzer;
